import { useCallback, useMemo } from 'react';
import { GenericObject } from '@types';
import { Title } from '@atoms';
import { sortTableValues, buildDataSource } from './TableBody.logic';
import * as S from './TableBody.style';
import { TableHeaderProps } from '..';
import { TableProps, TableSortProps } from '../../Table';

export interface TableBodyProps<T>
  extends Omit<
      TableHeaderProps<T>,
      'setSorterColumnStatus' | 'setSorterColumnIndex'
    >,
    TableProps<T>,
    TableSortProps {}

export const TableBody = <T extends GenericObject>({
  columns,
  dataSource,
  sorterColumnStatus,
  sorterColumnIndex,
  onRowClick,
}: TableBodyProps<T>) => {
  const dataSourceBase = useMemo(
    () => buildDataSource<T>({ columns, dataSource }) as Array<T>,
    [columns, dataSource]
  );
  const dataSourceSortable = useMemo(() => {
    const result = sortTableValues<T>({
      dataSource: dataSourceBase,
      columns,
      sorterColumnStatus,
      sorterColumnIndex,
    });
    return result;
  }, [dataSourceBase, columns, sorterColumnStatus, sorterColumnIndex]);

  const buildBody = useCallback(() => {
    const result = dataSourceSortable?.map((row: T, index: number) => {
      const result = columns?.map((column, colIndex) => {
        const { key: keyLabel, customCellRender } = column;
        const valueFormatted = row[`${String(keyLabel)}Formatted` as keyof T];

        return (
          <S.BodyColumn
            key={colIndex}
            role="cell"
            data-testid={`table-row-${index}-cell-${colIndex}`}
          >
            {customCellRender ? (
              customCellRender(row)
            ) : (
              <Title fs1>{String(valueFormatted || row[keyLabel] || '')}</Title>
            )}
          </S.BodyColumn>
        );
      });
      return (
        <S.TableRow
          role="row"
          key={index}
          clickable={!!onRowClick}
          onClick={(e) => {
            e.stopPropagation();
            onRowClick && onRowClick(row, index);
          }}
        >
          {result}
        </S.TableRow>
      );
    });
    return <S.Body data-testid="table-body">{result}</S.Body>;
  }, [columns, dataSourceSortable, onRowClick]);

  return buildBody();
};
