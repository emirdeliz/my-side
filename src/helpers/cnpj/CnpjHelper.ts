export const formatStringOrNumberAsCnpj = (cnpj: string | number) => {
  const cnpjAsOnlyNumber = String(cnpj || '').replace(/\D/g, '');
  const cnpjSlice= cnpjAsOnlyNumber.length > 14 ? cnpjAsOnlyNumber.slice(0, 14) : cnpjAsOnlyNumber;
  return cnpjSlice
    .replace(/(\d{2})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1/$2')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1');
};