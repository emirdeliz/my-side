import { GenericObject } from '@types';
import { ReactNode, useState } from 'react';
import { TableBody, TableHeader } from './components';
import { TablePagination } from './components/TablePagination/TablePagination';
import * as S from './Table.style';

export interface TableColumnProps<T> {
  currency?: boolean;
  sorterKey?: keyof T;
  key: keyof T;
  label?: ReactNode;
  minWidth?: number;
  customCellRender?: (value: T) => ReactNode;
}

export interface TableSortProps {
  sorterColumnStatus?: TableSort;
  sorterColumnIndex?: number;
}

export interface TableProps<T> {
  enablePagination?: boolean;
  numOfPages?: number;
  page?: number;
  disabled?: boolean;
  sortable?: boolean;
  columns?: Array<TableColumnProps<T>>;
  dataSource?: Array<T>;
  onChangePage?: (pageNumber: number) => void;
  onRowClick?: (row: T, index: number) => void;
}

export enum TableSort {
  ASC = 'asc',
  DESC = 'desc',
}

export const Table = <T extends GenericObject>({
  columns,
  dataSource,
  sortable,
  onRowClick,
  enablePagination,
  numOfPages,
  page,
  onChangePage,
  ...props
}: TableProps<T>) => {
  const [sorterColumnIndex, setSorterColumnIndex] = useState<number>();
  const [sorterColumnStatus, setSorterColumnStatus] = useState<TableSort>();

  if (enablePagination && numOfPages === undefined) {
    throw new Error('numOfPages prop is required.');
  }

  if (enablePagination && page === undefined) {
    throw new Error('page prop is required.');
  }

  if (enablePagination && onChangePage === undefined) {
    throw new Error('onChangePage prop is required.');
  }

  return (
    <S.Container disabled={props.disabled}>
      <S.Table role="table">
        <TableHeader<T>
          {...{
            columns,
            sorterColumnStatus,
            sorterColumnIndex,
            setSorterColumnStatus,
            setSorterColumnIndex,
            sortable,
          }}
        />
        <TableBody<T>
          {...{
            columns,
            dataSource,
            sorterColumnIndex,
            sorterColumnStatus,
            onRowClick,
          }}
        />
      </S.Table>
      {enablePagination && (
        <TablePagination
          page={page!}
          numOfPages={numOfPages!}
          onChangePage={onChangePage!}
        />
      )}
    </S.Container>
  );
};
