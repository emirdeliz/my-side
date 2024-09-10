import { maskMoney } from "@helpers";
import { TableColumnProps } from "./Table";
import { GenericObject } from "@types";

export const formatData = <T extends GenericObject>(column: TableColumnProps<T>, data: GenericObject) => {
  const { currency, keyValue } = column;
  const value = data[keyValue];
  if (currency) {
    return maskMoney(Number(value));
  }
  return value;
};