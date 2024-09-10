import { Story } from '@storybook/react';
import { fireEvent, render, screen, waitFor } from '@test';
import { TableSimple } from '@stories';
import { TableProps } from './Table';
import { sortTableValues } from './components/TableBody/TableBody.logic';
import { TableColumnProps, TableSort } from '..';
import {
  formatNumberAsCurrency,
  formatDateAsDDMMYYYY,
  formatDateAsDDMMYYYYAndTime,
} from '@helpers';
import { GenericObject } from '@types';

const renderTable = async (
  tableEl: Story<TableProps<GenericObject>>,
  props?: TableProps<GenericObject>
) => {
  const Table = tableEl;
  const { baseElement } = render(<Table {...tableEl.args} {...props} />);
  return baseElement;
};

const { parameters } = TableSimple;
const dataSource = (parameters?.dataSource || []) as Array<GenericObject>;
const columns = (parameters?.columns || []) as Array<
  TableColumnProps<GenericObject>
>;

describe('Table component test', () => {
  it('Have Table', async () => {
    const { container: TableNode } = render(
      <TableSimple columns={[]} dataSource={[]} />
    );
    expect(typeof TableNode).toEqual(
      typeof (<TableSimple columns={[]} dataSource={[]} />)
    );
  });

  it('Have Table columns with label', async () => {
    await renderTable(TableSimple);
    const { columns } = (TableSimple.parameters ||
      []) as TableProps<GenericObject>;
    const legalName = screen.getByText(String((columns || [])[0].label));
    const name = screen.getByText(String((columns || [])[1].label));
    const numberOfUnits = screen.getByText(String((columns || [])[2].label));
    const createdAt = screen.getByText(String((columns || [])[3].label));
    const establishmentDate = screen.getByText(
      String((columns || [])[4].label)
    );

    expect(legalName).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(numberOfUnits).toBeInTheDocument();
    expect(createdAt).toBeInTheDocument();
    expect(establishmentDate).toBeInTheDocument();
  });

  it('Have Table rows with values', async () => {
    await renderTable(TableSimple);
    const { dataSource } = (TableSimple.parameters ||
      {}) as TableProps<GenericObject>;

    const cellsOfFirstRow = screen.getAllByTestId(/table-row-0/i);
    expect(cellsOfFirstRow[0]).toHaveTextContent(
      String((dataSource || [])[0].legalName)
    );
    expect(cellsOfFirstRow[1]).toHaveTextContent(
      String((dataSource || [])[0].name)
    );
    expect(cellsOfFirstRow[2]).toHaveTextContent(
      String((dataSource || [])[0].numberOfUnits)
    );
    expect(cellsOfFirstRow[3]).toHaveTextContent(
      formatDateAsDDMMYYYYAndTime((dataSource || [])[0].createdAt)
    );
    expect(cellsOfFirstRow[4]).toHaveTextContent(
      formatDateAsDDMMYYYY((dataSource || [])[0].establishmentDate)
    );

    const cellsOfSecondRow = screen.getAllByTestId(/table-row-1/i);
    expect(cellsOfSecondRow[0]).toHaveTextContent(
      String((dataSource || [])[1].legalName)
    );
    expect(cellsOfSecondRow[1]).toHaveTextContent(
      String((dataSource || [])[1].name)
    );
    expect(cellsOfSecondRow[2]).toHaveTextContent(
      String((dataSource || [])[1].numberOfUnits)
    );
    expect(cellsOfSecondRow[3]).toHaveTextContent(
      formatDateAsDDMMYYYYAndTime((dataSource || [])[1].createdAt)
    );
    expect(cellsOfSecondRow[4]).toHaveTextContent(
      formatDateAsDDMMYYYY((dataSource || [])[1].establishmentDate)
    );

    const cellsOfThirdRow = screen.getAllByTestId(/table-row-2/i);
    expect(cellsOfThirdRow[0]).toHaveTextContent(
      String((dataSource || [])[2].legalName)
    );
    expect(cellsOfThirdRow[1]).toHaveTextContent(
      String((dataSource || [])[2].name)
    );
    expect(cellsOfThirdRow[2]).toHaveTextContent(
      String((dataSource || [])[2].numberOfUnits)
    );
    expect(cellsOfThirdRow[3]).toHaveTextContent(
      formatDateAsDDMMYYYYAndTime((dataSource || [])[2].createdAt)
    );
    expect(cellsOfThirdRow[4]).toHaveTextContent(
      formatDateAsDDMMYYYY((dataSource || [])[2].establishmentDate)
    );

    const rows = screen.getAllByRole('row');
    expect(rows.length - 1).toEqual(dataSource?.length);
  });

  it('Have Table sorted values by text', async () => {
    await renderTable(TableSimple);

    let dataSourceAfterSort = sortTableValues<GenericObject>({
      dataSource: [...dataSource],
      columns,
      sorterColumnStatus: TableSort.ASC,
      sorterColumnIndex: 0,
    });

    const cellsOfFirstRow = screen.getAllByTestId(/table-row-0/i);
    expect(cellsOfFirstRow[0]).toHaveTextContent(
      String((dataSource || [])[0].legalName)
    );
    expect(cellsOfFirstRow[1]).toHaveTextContent(
      String((dataSource || [])[0].name)
    );

    const cellsOfSecondRow = screen.getAllByTestId(/table-row-1/i);
    expect(cellsOfSecondRow[0]).toHaveTextContent(
      String((dataSource || [])[1].legalName)
    );
    expect(cellsOfSecondRow[1]).toHaveTextContent(
      String((dataSource || [])[1].name)
    );

    const cellsOfThirdRow = screen.getAllByTestId(/table-row-2/i);
    expect(cellsOfThirdRow[0]).toHaveTextContent(
      String((dataSource || [])[2].legalName)
    );
    expect(cellsOfThirdRow[1]).toHaveTextContent(
      String((dataSource || [])[2].name)
    );

    const textColumn = screen.getAllByRole('columnheader')[0];
    await waitFor(() => {
      fireEvent.click(textColumn);
    });

    expect(cellsOfFirstRow[0]).toHaveTextContent(
      dataSourceAfterSort[0].legalName || ''
    );
    expect(cellsOfFirstRow[1]).toHaveTextContent(
      dataSourceAfterSort[0].name || ''
    );

    expect(cellsOfSecondRow[0]).toHaveTextContent(
      dataSourceAfterSort[1].legalName || ''
    );
    expect(cellsOfSecondRow[1]).toHaveTextContent(
      dataSourceAfterSort[1].name || ''
    );

    expect(cellsOfThirdRow[0]).toHaveTextContent(
      dataSourceAfterSort[2].legalName || ''
    );
    expect(cellsOfThirdRow[1]).toHaveTextContent(
      dataSourceAfterSort[2].name || ''
    );

    dataSourceAfterSort = sortTableValues<GenericObject>({
      dataSource: dataSourceAfterSort,
      columns,
      sorterColumnStatus: TableSort.DESC,
      sorterColumnIndex: 0,
    });

    await waitFor(() => {
      fireEvent.click(textColumn);
    });

    expect(cellsOfFirstRow[0]).toHaveTextContent(
      String((dataSourceAfterSort || [])[0].legalName)
    );
    expect(cellsOfFirstRow[1]).toHaveTextContent(
      String((dataSourceAfterSort || [])[0].name)
    );

    expect(cellsOfSecondRow[0]).toHaveTextContent(
      String((dataSourceAfterSort || [])[1].legalName)
    );
    expect(cellsOfSecondRow[1]).toHaveTextContent(
      String((dataSourceAfterSort || [])[1].name)
    );

    expect(cellsOfThirdRow[0]).toHaveTextContent(
      String((dataSourceAfterSort || [])[2].legalName)
    );
    expect(cellsOfThirdRow[1]).toHaveTextContent(
      String((dataSourceAfterSort || [])[2].name)
    );
  });

  it('Have Table sorted values by number', async () => {
    await renderTable(TableSimple);
    let dataSourceAfterSort = sortTableValues<GenericObject>({
      dataSource,
      columns,
      sorterColumnStatus: TableSort.ASC,
      sorterColumnIndex: 2,
    });

    const cellsOfFirstRow = screen.getAllByTestId(/table-row-0/i);
    expect(cellsOfFirstRow[2]).toHaveTextContent(
      String((dataSource || [])[0].numberOfUnits)
    );

    const cellsOfSecondRow = screen.getAllByTestId(/table-row-1/i);
    expect(cellsOfSecondRow[2]).toHaveTextContent(
      String((dataSource || [])[1].numberOfUnits)
    );

    const cellsOfThirdRow = screen.getAllByTestId(/table-row-2/i);
    expect(cellsOfThirdRow[2]).toHaveTextContent(
      String((dataSource || [])[2].numberOfUnits)
    );

    const numberColumn = screen.getAllByRole('columnheader')[2];
    await waitFor(() => {
      fireEvent.click(numberColumn);
    });

    expect(cellsOfFirstRow[2]).toHaveTextContent(
      String(dataSourceAfterSort[0].numberOfUnits)
    );
    expect(cellsOfSecondRow[2]).toHaveTextContent(
      String(dataSourceAfterSort[1].numberOfUnits)
    );
    expect(cellsOfThirdRow[2]).toHaveTextContent(
      String(dataSourceAfterSort[2].numberOfUnits)
    );

    await waitFor(() => {
      fireEvent.click(numberColumn);
    });

    dataSourceAfterSort = sortTableValues<GenericObject>({
      dataSource,
      columns,
      sorterColumnStatus: TableSort.DESC,
      sorterColumnIndex: 2,
    });

    expect(cellsOfFirstRow[2]).toHaveTextContent(
      String((dataSourceAfterSort || [])[0].numberOfUnits)
    );
    expect(cellsOfSecondRow[2]).toHaveTextContent(
      String((dataSourceAfterSort || [])[1].numberOfUnits)
    );
    expect(cellsOfThirdRow[2]).toHaveTextContent(
      String((dataSourceAfterSort || [])[2].numberOfUnits)
    );
  });

  it('Have Table sorted values by date', async () => {
    await renderTable(TableSimple);
    const { dataSource } = (TableSimple.parameters ||
      {}) as TableProps<GenericObject>;
    let dataSourceAfterSort = sortTableValues<GenericObject>({
      dataSource,
      columns,
      sorterColumnStatus: TableSort.ASC,
      sorterColumnIndex: 4,
    });

    const cellsOfFirstRow = screen.getAllByTestId(/table-row-0/i);
    expect(cellsOfFirstRow[3]).toHaveTextContent(
      formatDateAsDDMMYYYYAndTime((dataSource || [])[0].createdAt)
    );
    expect(cellsOfFirstRow[4]).toHaveTextContent(
      formatDateAsDDMMYYYY((dataSource || [])[0].establishmentDate)
    );

    const cellsOfSecondRow = screen.getAllByTestId(/table-row-1/i);
    expect(cellsOfSecondRow[3]).toHaveTextContent(
      formatDateAsDDMMYYYYAndTime((dataSource || [])[1].createdAt)
    );
    expect(cellsOfSecondRow[4]).toHaveTextContent(
      formatDateAsDDMMYYYY((dataSource || [])[1].establishmentDate)
    );

    const cellsOfThirdRow = screen.getAllByTestId(/table-row-2/i);
    expect(cellsOfThirdRow[3]).toHaveTextContent(
      formatDateAsDDMMYYYYAndTime((dataSource || [])[2].createdAt)
    );
    expect(cellsOfThirdRow[4]).toHaveTextContent(
      formatDateAsDDMMYYYY((dataSource || [])[2].establishmentDate)
    );

    const dateColumn = screen.getAllByRole('columnheader')[4];
    await waitFor(() => {
      fireEvent.click(dateColumn);
    });

    expect(cellsOfFirstRow[3]).toHaveTextContent(
      formatDateAsDDMMYYYYAndTime(dataSourceAfterSort[0].createdAt)
    );
    expect(cellsOfFirstRow[4]).toHaveTextContent(
      formatDateAsDDMMYYYY(dataSourceAfterSort[0].establishmentDate)
    );

    expect(cellsOfSecondRow[3]).toHaveTextContent(
      formatDateAsDDMMYYYYAndTime(dataSourceAfterSort[1].createdAt)
    );
    expect(cellsOfSecondRow[4]).toHaveTextContent(
      formatDateAsDDMMYYYY(dataSourceAfterSort[1].establishmentDate)
    );

    expect(cellsOfThirdRow[3]).toHaveTextContent(
      formatDateAsDDMMYYYYAndTime(dataSourceAfterSort[2].createdAt)
    );
    expect(cellsOfThirdRow[4]).toHaveTextContent(
      formatDateAsDDMMYYYY(dataSourceAfterSort[2].establishmentDate)
    );

    dataSourceAfterSort = sortTableValues<GenericObject>({
      dataSource,
      columns,
      sorterColumnStatus: TableSort.DESC,
      sorterColumnIndex: 4,
    });

    await waitFor(() => {
      fireEvent.click(dateColumn);
    });

    expect(cellsOfFirstRow[3]).toHaveTextContent(
      formatDateAsDDMMYYYYAndTime((dataSourceAfterSort || [])[0].createdAt)
    );
    expect(cellsOfFirstRow[4]).toHaveTextContent(
      formatDateAsDDMMYYYY((dataSourceAfterSort || [])[0].establishmentDate)
    );

    expect(cellsOfSecondRow[3]).toHaveTextContent(
      formatDateAsDDMMYYYYAndTime((dataSourceAfterSort || [])[1].createdAt)
    );
    expect(cellsOfSecondRow[4]).toHaveTextContent(
      formatDateAsDDMMYYYY((dataSourceAfterSort || [])[1].establishmentDate)
    );

    expect(cellsOfThirdRow[3]).toHaveTextContent(
      formatDateAsDDMMYYYYAndTime((dataSourceAfterSort || [])[2].createdAt)
    );
    expect(cellsOfThirdRow[4]).toHaveTextContent(
      formatDateAsDDMMYYYY((dataSourceAfterSort || [])[2].establishmentDate)
    );
  });

  it('Have Table sorted values by date and time', async () => {
    await renderTable(TableSimple);
    const { dataSource } = (TableSimple.parameters ||
      {}) as TableProps<GenericObject>;
    let dataSourceAfterSort = sortTableValues<GenericObject>({
      dataSource,
      columns,
      sorterColumnStatus: TableSort.ASC,
      sorterColumnIndex: 3,
    });

    const cellsOfFirstRow = screen.getAllByTestId(/table-row-0/i);
    expect(cellsOfFirstRow[3]).toHaveTextContent(
      formatDateAsDDMMYYYYAndTime((dataSource || [])[0].createdAt)
    );
    expect(cellsOfFirstRow[4]).toHaveTextContent(
      formatDateAsDDMMYYYY((dataSource || [])[0].establishmentDate)
    );

    const cellsOfSecondRow = screen.getAllByTestId(/table-row-1/i);
    expect(cellsOfSecondRow[3]).toHaveTextContent(
      formatDateAsDDMMYYYYAndTime((dataSource || [])[1].createdAt)
    );
    expect(cellsOfSecondRow[4]).toHaveTextContent(
      formatDateAsDDMMYYYY((dataSource || [])[1].establishmentDate)
    );

    const cellsOfThirdRow = screen.getAllByTestId(/table-row-2/i);
    expect(cellsOfThirdRow[3]).toHaveTextContent(
      formatDateAsDDMMYYYYAndTime((dataSource || [])[2].createdAt)
    );
    expect(cellsOfThirdRow[4]).toHaveTextContent(
      formatDateAsDDMMYYYY((dataSource || [])[2].establishmentDate)
    );

    const dateAndTimeColumn = screen.getAllByRole('columnheader')[3];
    await waitFor(() => {
      fireEvent.click(dateAndTimeColumn);
    });

    expect(cellsOfFirstRow[3]).toHaveTextContent(
      formatDateAsDDMMYYYYAndTime(dataSourceAfterSort[0].createdAt)
    );
    expect(cellsOfFirstRow[4]).toHaveTextContent(
      formatDateAsDDMMYYYY(dataSourceAfterSort[0].establishmentDate)
    );

    expect(cellsOfSecondRow[3]).toHaveTextContent(
      formatDateAsDDMMYYYYAndTime(dataSourceAfterSort[1].createdAt)
    );
    expect(cellsOfSecondRow[4]).toHaveTextContent(
      formatDateAsDDMMYYYY(dataSourceAfterSort[1].establishmentDate)
    );

    expect(cellsOfThirdRow[3]).toHaveTextContent(
      formatDateAsDDMMYYYYAndTime(dataSourceAfterSort[2].createdAt)
    );
    expect(cellsOfThirdRow[4]).toHaveTextContent(
      formatDateAsDDMMYYYY(dataSourceAfterSort[2].establishmentDate)
    );

    dataSourceAfterSort = sortTableValues<GenericObject>({
      dataSource,
      columns,
      sorterColumnStatus: TableSort.DESC,
      sorterColumnIndex: 3,
    });

    await waitFor(() => {
      fireEvent.click(dateAndTimeColumn);
    });

    expect(cellsOfFirstRow[3]).toHaveTextContent(
      formatDateAsDDMMYYYYAndTime((dataSourceAfterSort || [])[0].createdAt)
    );
    expect(cellsOfFirstRow[4]).toHaveTextContent(
      formatDateAsDDMMYYYY((dataSourceAfterSort || [])[0].establishmentDate)
    );

    expect(cellsOfSecondRow[3]).toHaveTextContent(
      formatDateAsDDMMYYYYAndTime((dataSourceAfterSort || [])[1].createdAt)
    );
    expect(cellsOfSecondRow[4]).toHaveTextContent(
      formatDateAsDDMMYYYY((dataSourceAfterSort || [])[1].establishmentDate)
    );

    expect(cellsOfThirdRow[3]).toHaveTextContent(
      formatDateAsDDMMYYYYAndTime((dataSourceAfterSort || [])[2].createdAt)
    );
    expect(cellsOfThirdRow[4]).toHaveTextContent(
      formatDateAsDDMMYYYY((dataSourceAfterSort || [])[2].establishmentDate)
    );
  });

  it('Have Table sorted values by currency', async () => {
    await renderTable(TableSimple);
    const { dataSource } = (TableSimple.parameters ||
      {}) as TableProps<GenericObject>;
    let dataSourceAfterSort = sortTableValues<GenericObject>({
      dataSource,
      columns,
      sorterColumnStatus: TableSort.ASC,
      sorterColumnIndex: 5,
    });

    const ignoreCurrencySign = true;
    const cellsOfFirstRow = screen.getAllByTestId(/table-row-0/i);
    expect(cellsOfFirstRow[5]).toHaveTextContent(
      formatNumberAsCurrency((dataSource || [])[0].id, ignoreCurrencySign)
    );

    const cellsOfSecondRow = screen.getAllByTestId(/table-row-1/i);
    expect(cellsOfSecondRow[5]).toHaveTextContent(
      formatNumberAsCurrency((dataSource || [])[1].id, ignoreCurrencySign)
    );

    const cellsOfThirdRow = screen.getAllByTestId(/table-row-2/i);
    expect(cellsOfThirdRow[5]).toHaveTextContent(
      formatNumberAsCurrency((dataSource || [])[2].id, ignoreCurrencySign)
    );

    const currencyColumn = screen.getAllByRole('columnheader')[5];
    await waitFor(() => {
      fireEvent.click(currencyColumn);
    });

    expect(cellsOfFirstRow[5]).toHaveTextContent(
      formatNumberAsCurrency(
        (dataSourceAfterSort || [])[0].id,
        ignoreCurrencySign
      )
    );
    expect(cellsOfSecondRow[5]).toHaveTextContent(
      formatNumberAsCurrency(
        (dataSourceAfterSort || [])[1].id,
        ignoreCurrencySign
      )
    );
    expect(cellsOfThirdRow[5]).toHaveTextContent(
      formatNumberAsCurrency(
        (dataSourceAfterSort || [])[2].id,
        ignoreCurrencySign
      )
    );

    dataSourceAfterSort = sortTableValues<GenericObject>({
      dataSource,
      columns,
      sorterColumnStatus: TableSort.DESC,
      sorterColumnIndex: 5,
    });

    await waitFor(() => {
      fireEvent.click(currencyColumn);
    });

    expect(cellsOfFirstRow[5]).toHaveTextContent(
      formatNumberAsCurrency(
        (dataSourceAfterSort || [])[0].id,
        ignoreCurrencySign
      )
    );
    expect(cellsOfSecondRow[5]).toHaveTextContent(
      formatNumberAsCurrency(
        (dataSourceAfterSort || [])[1].id,
        ignoreCurrencySign
      )
    );
    expect(cellsOfThirdRow[5]).toHaveTextContent(
      formatNumberAsCurrency(
        (dataSourceAfterSort || [])[2].id,
        ignoreCurrencySign
      )
    );
  });

  it('Have Table with empty values', async () => {
    const columns = [
      { key: 'legalName', label: 'Nome' },
      { key: 'name', label: 'Nome Fantasia' },
      { key: 'numberOfUnits', label: 'Número de Unidades', num: true },
      { key: 'createdAt', label: 'Data de Criação', dateAndTime: true },
      { key: 'establishmentDate', label: 'Data de Fundação', date: true },
    ] as Array<TableColumnProps<GenericObject>>;

    const mockWithEmptyValues = sortTableValues<GenericObject>({
      dataSource,
      columns,
    });

    mockWithEmptyValues[0].legalName = '';
    mockWithEmptyValues[0].name = '';

    await renderTable(TableSimple, {
      columns,
      dataSource: mockWithEmptyValues,
    });

    const cellsOfFirstRow = screen.getAllByTestId(/table-row-0/i);
    expect(cellsOfFirstRow[0]).toHaveTextContent('');
    expect(cellsOfFirstRow[1]).toHaveTextContent('');
  });

  it('Have Table with undefined values', async () => {
    const columns = [
      { key: 'legalName', label: 'Nome' },
      { key: 'name', label: 'Nome Fantasia' },
      { key: 'numberOfUnits', label: 'Número de Unidades', num: true },
      { key: 'createdAt', label: 'Data de Criação', dateAndTime: true },
      { key: 'establishmentDate', label: 'Data de Fundação', date: true },
    ] as Array<TableColumnProps<GenericObject>>;

    const mockWithUndefinedValues = sortTableValues<GenericObject>({
      dataSource,
      columns,
    });

    mockWithUndefinedValues[0].legalName = undefined;
    mockWithUndefinedValues[0].name = undefined;
    mockWithUndefinedValues[0].numberOfUnits = undefined;
    mockWithUndefinedValues[0].createdAt = undefined;
    mockWithUndefinedValues[0].establishmentDate = undefined;
    await renderTable(TableSimple, {
      columns,
      dataSource: mockWithUndefinedValues,
    });

    const cellsOfFirstRow = screen.getAllByTestId(/table-row-0/i);
    expect(cellsOfFirstRow[0]).toHaveTextContent('-');
    expect(cellsOfFirstRow[1]).toHaveTextContent('-');
    expect(cellsOfFirstRow[2]).toHaveTextContent('-');
    expect(cellsOfFirstRow[3]).toHaveTextContent('-');
    expect(cellsOfFirstRow[4]).toHaveTextContent('-');
  });

  it('Have Table with null values', async () => {
    const columns = [
      { key: 'legalName', label: 'Nome' },
      { key: 'name', label: 'Nome Fantasia' },
      { key: 'numberOfUnits', label: 'Número de Unidades', num: true },
      { key: 'createdAt', label: 'Data de Criação', dateAndTime: true },
      { key: 'establishmentDate', label: 'Data de Fundação', date: true },
    ] as Array<TableColumnProps<GenericObject>>;

    const mockWithNullValues = sortTableValues<GenericObject>({
      dataSource,
      columns,
    });

    mockWithNullValues[0].legalName = null as GenericObject;
    mockWithNullValues[0].name = null as GenericObject;
    mockWithNullValues[0].numberOfUnits = null as GenericObject;
    mockWithNullValues[0].createdAt = null as GenericObject;
    mockWithNullValues[0].establishmentDate = null as GenericObject;

    await renderTable(TableSimple, { columns, dataSource: mockWithNullValues });

    const cellsOfFirstRow = screen.getAllByTestId(/table-row-0/i);
    expect(cellsOfFirstRow[0]).toHaveTextContent('-');
    expect(cellsOfFirstRow[1]).toHaveTextContent('-');
    expect(cellsOfFirstRow[2]).toHaveTextContent('-');
    expect(cellsOfFirstRow[3]).toHaveTextContent('-');
    expect(cellsOfFirstRow[4]).toHaveTextContent('-');
  });

  it('Have Table onClick on row', async () => {
    const onRowClick = jest.fn();
    await renderTable(TableSimple, { onRowClick });

    const firstRow = screen.getAllByRole('row')[3];
    await waitFor(() => {
      fireEvent.click(firstRow);
      fireEvent.click(firstRow);
      fireEvent.click(firstRow);
    });

    expect(onRowClick).toHaveBeenCalledTimes(3);
  });
});
