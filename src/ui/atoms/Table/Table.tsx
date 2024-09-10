import { ReactNode, useCallback, useMemo } from 'react';
import { GenericObject } from '@types';
import * as S from './Table.style';
import { maskMoney } from '@helpers';
import { formatData } from './Table.logic';

export interface TableColumnProps <T> {
  keyValue: keyof T;
  label: ReactNode;
  width: string;
  currency?: boolean;
}
interface TableProps<T> {
  columns: Array<TableColumnProps<T>>;
  dataSource: Array<T>;
  clickable?: boolean;
}

export const Table = <T extends GenericObject>({ columns, dataSource, clickable }: TableProps<T>) => {
  const dataColumns = useMemo(() => {
    return columns.map((column) => {
      return (
        <S.Th
          key={String(column.keyValue)}
          style={{ width: column.width, cursor: clickable ? 'pointer' : 'default' }}
        >
          {column.label}
        </S.Th>
      );
    });
  }, [columns]);

  const dataRows = useMemo(() => {
    return dataSource.map((row, index) => {
      return (
        <S.Tr key={index}>
          {columns.map((column) => {
            return (
              <S.Td
                key={String(column.keyValue)}
                style={{ width: column.width, cursor: clickable ? 'pointer' : 'default' }}
              >
                {formatData(column, row)}
              </S.Td>
            );
          })}
        </S.Tr>
      );
    });
    
  }, [columns]);

  

  return (
    <S.Container>
      <S.Table tabIndex={0}>
        <S.Thead>
          <S.Tr>{dataColumns}</S.Tr>
        </S.Thead>
        <S.Tbody>{dataRows}</S.Tbody>
      </S.Table>
    </S.Container>
  );
};