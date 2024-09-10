import { formatNumberAsCurrency } from './NumberHelper';

describe('helpers/number/formatNumberAsCurrency', () => {
  test('Should have format number 1', () => {
    expect(formatNumberAsCurrency(1).replace(/\s/g, '')).toBe('R$1,00');
  });

  test('Should have format number 98765432.10 and ignoreCurrencySign', () => {
    expect(formatNumberAsCurrency(98765432.1).replace(/\s/g, '')).toBe(
      'R$98.765.432,10'
    );
  });

  test('Should have format number -1', () => {
    expect(formatNumberAsCurrency(-1).replace(/\s/g, '')).toBe('-R$1,00');
  });

  test('Should have format number undefined', () => {
    expect(formatNumberAsCurrency(undefined).replace(/\s/g, '')).toBe('R$0,00');
  });

  test('Should have format number Infinity', () => {
    expect(formatNumberAsCurrency(Infinity).replace(/\s/g, '')).toBe('R$0,00');
  });

  test('Should have format number -Infinity', () => {
    expect(formatNumberAsCurrency(-Infinity).replace(/\s/g, '')).toBe('R$0,00');
  });

  test('Should have format number NaN', () => {
    expect(formatNumberAsCurrency(NaN).replace(/\s/g, '')).toBe('R$0,00');
  });

  test('Should have format number 1 and ignoreCurrencySign', () => {
    const ignoreCurrencySign = true;
    expect(
      formatNumberAsCurrency(1, ignoreCurrencySign).replace(/\s/g, '')
    ).toBe('1,00');
  });

  test('Should have format number 1.23 and ignoreCurrencySign', () => {
    const ignoreCurrencySign = true;
    expect(
      formatNumberAsCurrency(1.23, ignoreCurrencySign).replace(/\s/g, '')
    ).toBe('1,23');
  });

  test('Should have format number 1.223223 and ignoreCurrencySign', () => {
    const ignoreCurrencySign = true;
    expect(
      formatNumberAsCurrency(1.223223, ignoreCurrencySign).replace(/\s/g, '')
    ).toBe('1,22');
  });

  test('Should have format number 1.266223 and ignoreCurrencySign', () => {
    const ignoreCurrencySign = true;
    expect(
      formatNumberAsCurrency(1.266223, ignoreCurrencySign).replace(/\s/g, '')
    ).toBe('1,27');
  });

  test('Should have format number 12345678.90 and ignoreCurrencySign', () => {
    const ignoreCurrencySign = true;
    expect(
      formatNumberAsCurrency(12345678.9, ignoreCurrencySign).replace(/\s/g, '')
    ).toBe('12.345.678,90');
  });

  test('Should have format number undefined and ignoreCurrencySign', () => {
    const ignoreCurrencySign = true;
    expect(
      formatNumberAsCurrency(undefined, ignoreCurrencySign).replace(/\s/g, '')
    ).toBe('0,00');
  });

  test('Should have format number Infinity and ignoreCurrencySign', () => {
    const ignoreCurrencySign = true;
    expect(
      formatNumberAsCurrency(Infinity, ignoreCurrencySign).replace(/\s/g, '')
    ).toBe('0,00');
  });

  test('Should have format number NaN ans ignoreCurrencySign', () => {
    const ignoreCurrencySign = true;
    expect(
      formatNumberAsCurrency(NaN, ignoreCurrencySign).replace(/\s/g, '')
    ).toBe('0,00');
  });
});
