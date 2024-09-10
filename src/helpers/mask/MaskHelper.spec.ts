import * as mask from './MaskHelper';

const cnpj = {
  correct: '12312321313132',
  withLetters: '123123Test21313132',
  withSpaces: '12 31 23 2131 3132',
};

const cpf = {
  correct: '12312321313',
  withLetters: '123123test21313',
  withSpaces: '12 31 23 2131 3',
};

const date = {
  testOne: '12122012',
  testTwo: '08012021',
  testThree: '30082020',
};

const zipCode = {
  testOne: '00000000',
  testTwo: '000000',
  testThree: '0000',
};

const barcode = {
  testOne: '23793381286006227199852000609207486790000088147',
  testTwo: '23793381286006800396512000063300187440000002001',
  testThree: '836200000005865801620002001010202172425049125098',
  testInvalid: '˜`!@#$%ˆ&*()_+4523543afgdsvbbbb',
  testUndefined: undefined,
  testNull: null,
};

const bankAccount = {
  testOne: '34123123',
  testTwo: '34123',
  testThree: '3419',
};

const bankAgency = {
  testOne: '34',
  testTwo: '3419',
  testThree: '34193418',
};

describe('/helper/masks', () => {
  it('Should format CNPJ', () => {
    expect(mask.maskCNPJ(cnpj.correct)).toBe('12.312.321/3131-32');
    expect(mask.maskCNPJ(cnpj.withLetters)).toBe('12.312.321/3131-32');
    expect(mask.maskCNPJ(cnpj.withSpaces)).toBe('12.312.321/3131-32');
  });

  it('Should format CPF', () => {
    expect(mask.maskCPF(cpf.correct)).toBe('123.123.213-13');
    expect(mask.maskCPF(cpf.withLetters)).toBe('123.123.213-13');
    expect(mask.maskCPF(cpf.withSpaces)).toBe('123.123.213-13');
  });

  it('Should format date', () => {
    expect(mask.maskDate(date.testOne)).toMatch('12/12/2012');
    expect(mask.maskDate(date.testTwo)).toMatch('08/01/2021');
    expect(mask.maskDate(date.testThree)).toMatch('30/08/2020');
  });

  it('Should format zip code', () => {
    expect(mask.maskZipCode(zipCode.testOne)).toMatch('00000-000');
    expect(mask.maskZipCode(zipCode.testTwo)).toMatch('00000-0');
    expect(mask.maskZipCode(zipCode.testThree)).toMatch('0000');
  });

  it('Should format barcode', () => {
    expect(mask.maskBarcode(barcode.testOne)).toMatch(
      '23793.38128 60062.271998 52000.609207 4 86790000088147'
    );
    expect(mask.maskBarcode(barcode.testTwo)).toMatch(
      '23793.38128 60068.003965 12000.063300 1 87440000002001'
    );
    expect(mask.maskBarcode(barcode.testThree)).toMatch(
      '83620000000-5 86580162000-2 00101020217-2 42504912509-8'
    );
    expect(mask.maskBarcode(barcode.testInvalid)).toMatch('');
    expect(mask.maskBarcode(barcode.testUndefined)).toMatch('');
    expect(mask.maskBarcode(barcode.testNull)).toMatch('');
  });

  it('Should format bank account', () => {
    expect(mask.maskBankAccount(bankAccount.testOne)).toMatch('3412312-3');
    expect(mask.maskBankAccount(bankAccount.testTwo)).toMatch('3412-3');
    expect(mask.maskBankAccount(bankAccount.testThree)).toMatch('341-9');
  });

  it('Should format bank agency', () => {
    expect(mask.maskBankAgency(bankAgency.testOne)).toMatch('34');
    expect(mask.maskBankAgency(bankAgency.testTwo)).toMatch('3419');
    expect(mask.maskBankAgency(bankAgency.testThree)).toMatch('3419');
  });

  it('Should remove mask money input', () => {
    const valueMock1 = '1';
    const valueMock2 = '12';
    const valueMock3 = '123';
    const valueMock4 = '123456';
    const valueMock5 = '';

    expect(mask.removeMaskMoneyInput(valueMock1)).toMatch('0.01');
    expect(mask.removeMaskMoneyInput(valueMock2)).toMatch('0.12');
    expect(mask.removeMaskMoneyInput(valueMock3)).toMatch('1.23');
    expect(mask.removeMaskMoneyInput(valueMock4)).toMatch('1234.56');
    expect(mask.removeMaskMoneyInput(valueMock5)).toMatch('0');
  });

  it('Should format phone number', () => {
    const valueMock1 = '1999999999';
    const valueMock2 = '+551999999999';

    expect(mask.maskPhone(valueMock1)).toMatch('(19) 9999-9999');
    expect(mask.maskPhone(valueMock2)).toMatch('(19) 9999-9999');
  });

  it('Should return only numbers on mask OnlyNumbers', () => {
    const valueMock1 = '123d123.123';
    const valueMock2 = 'Teste123';
    const valueMock3 = '123';
    const valueMock4 = '43.277.083/0001-73';
    const valueMock5 = '';

    expect(mask.maskOnlyNumbers(valueMock1)).toMatch('123123123');
    expect(mask.maskOnlyNumbers(valueMock2)).toMatch('123');
    expect(mask.maskOnlyNumbers(valueMock3)).toMatch('123');
    expect(mask.maskOnlyNumbers(valueMock4)).toMatch('43277083000173');
    expect(mask.maskOnlyNumbers(valueMock5)).toMatch('');
  });
});
