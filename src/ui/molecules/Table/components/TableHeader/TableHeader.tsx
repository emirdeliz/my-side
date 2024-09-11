import { GenericObject } from '@types';
import { Flex, Icon, Title } from '@atoms';
import { useCallback } from 'react';
import { TableProps, TableSort, TableSortProps } from '../../Table';
import * as S from './TableHeader.style';

export interface TableHeaderProps<T> extends TableProps<T> {
  sortable?: boolean;
  setSorterColumnStatus: (sorterColumnStatus: TableSort) => void;
  setSorterColumnIndex: (index: number) => void;
}

export interface TableHeaderSortProps<T>
  extends TableHeaderProps<T>,
    TableSortProps {}

export const TableHeader = <T extends GenericObject>({
  sortable,
  columns,
  sorterColumnStatus,
  sorterColumnIndex,
  setSorterColumnStatus,
  setSorterColumnIndex,
}: TableHeaderSortProps<T>) => {
  const sortData = useCallback(
    (columnIndex: number) => {
      if (sorterColumnIndex !== columnIndex) {
        setSorterColumnIndex(columnIndex);
        setSorterColumnStatus(TableSort.ASC);
      } else {
        const sorterStatus =
          sorterColumnStatus === TableSort.ASC ? TableSort.DESC : TableSort.ASC;
        setSorterColumnStatus(sorterStatus);
      }
    },
    [
      setSorterColumnIndex,
      setSorterColumnStatus,
      sorterColumnIndex,
      sorterColumnStatus,
    ]
  );

  const buildHead = useCallback(() => {
    const result = columns?.map((column, index) => {
      const { label, minWidth } = column;
      const isSortAsc = sorterColumnStatus === TableSort.ASC;
      const isCurrentColumnSort = index === sorterColumnIndex;
      return (
        <S.HeadColumn
          key={index}
          role="columnheader"
          style={{ minWidth }}
          onClick={() => sortData(index)}
        >
          <Flex.Row wFull alignCenter>
            <Title fs1 semibold n2>{label}</Title>
            {sortable && label && (
              <Icon
                sm
                down={!isSortAsc || !isCurrentColumnSort}
                up={isSortAsc && isCurrentColumnSort}
              />
            )}
          </Flex.Row>
        </S.HeadColumn>
      );
    });
    return (
      <S.Head>
        <S.TableRow>{result}</S.TableRow>
      </S.Head>
    );
  }, [columns, sortData, sortable, sorterColumnIndex, sorterColumnStatus]);
  return buildHead();
};
