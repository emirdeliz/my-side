import { checkIfIsEmptyUndefinedOrNull } from './ObjectHelper';

describe('helpers/object', () => {
  test('Should will have return true for checkIfIsEmptyUndefinedOrNull with parameter undefined', () => {
    const resultEmpty = checkIfIsEmptyUndefinedOrNull();
    const resultUndefined = checkIfIsEmptyUndefinedOrNull(undefined);
    expect(resultEmpty).toBeTruthy();
    expect(resultUndefined).toBeTruthy();
  });

  test('Should will have return true for checkIfIsEmptyUndefinedOrNull with parameter null', () => {
    const result = checkIfIsEmptyUndefinedOrNull(null);
    expect(result).toBeTruthy();
  });

  test('Should will have return true for checkIfIsEmptyUndefinedOrNull with parameter ""', () => {
    const result = checkIfIsEmptyUndefinedOrNull('');
    expect(result).toBeTruthy();
  });

  test('Should will have return true for checkIfIsEmptyUndefinedOrNull with parameter "  "', () => {
    const result = checkIfIsEmptyUndefinedOrNull('  ');
    expect(result).toBeTruthy();
  });

  test('Should will have return false for checkIfIsEmptyUndefinedOrNull with parameter 1', () => {
    const result = checkIfIsEmptyUndefinedOrNull(1);
    expect(result).toBeFalsy();
  });

  test('Should will have return false for checkIfIsEmptyUndefinedOrNull with parameter -1', () => {
    const result = checkIfIsEmptyUndefinedOrNull(-1);
    expect(result).toBeFalsy();
  });

  test('Should will have return false for checkIfIsEmptyUndefinedOrNull with parameter "abc"', () => {
    const result = checkIfIsEmptyUndefinedOrNull('abc');
    expect(result).toBeFalsy();
  });

  test('Should will have return false for checkIfIsEmptyUndefinedOrNull with parameter new Date()', () => {
    const result = checkIfIsEmptyUndefinedOrNull(new Date());
    expect(result).toBeFalsy();
  });

  test('Should will have return false for checkIfIsEmptyUndefinedOrNull with parameter false', () => {
    const result = checkIfIsEmptyUndefinedOrNull(false);
    expect(result).toBeFalsy();
  });

  test('Should will have return false for checkIfIsEmptyUndefinedOrNull with parameter true', () => {
    const result = checkIfIsEmptyUndefinedOrNull(true);
    expect(result).toBeFalsy();
  });
});
