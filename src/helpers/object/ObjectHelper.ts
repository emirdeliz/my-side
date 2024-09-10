export const checkIfIsEmptyUndefinedOrNull = (value?: number|string|Date|boolean|null) => {
  return typeof value === 'undefined' || value === null || String(value).trim() === '';
};
