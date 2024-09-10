export const checkIfIsEmptyUndefinedOrNull = (value?: Number|String|Date|Boolean|null) => {
  return typeof value === 'undefined' || value === null || String(value).trim() === '';
};
