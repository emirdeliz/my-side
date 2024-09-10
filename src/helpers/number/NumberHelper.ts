

export const formatNumberAsCurrency = (value?: number, ignoreCurrencySign?: boolean) => {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: ignoreCurrencySign ? 'decimal' : 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const valueAsNumber = Number.isFinite(value) || Number.isNaN(value) ? value || 0: 0;
  return formatter.format(valueAsNumber);
};
