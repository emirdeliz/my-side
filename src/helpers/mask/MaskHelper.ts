
export const maskMoney = (money: string | number) => {
  const moneyFormat = Number(money || 0).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
  return moneyFormat;
};