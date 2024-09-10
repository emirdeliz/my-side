export const formatStringOrNumberAsCpf = (cpf: string | number) => {
  const cleanCPF = String(cpf || '').replace(/\D/g, '');
  let cpfFormat = cleanCPF.length > 11 ? cleanCPF.slice(0, 11) : cleanCPF;

  return cpfFormat
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1');
};
