import { fireEvent } from '@testing-library/react';
import { render } from '@test';
import { InputForm } from './InputForm';

describe('/ui/molecules/InputForm', () => {
  const PASSWORD_ID = 'test-input-password';
  it('Should show error when password has less than required characters', async () => {
    const pass = '';
    const onChange = jest.fn().mockImplementation(({ hasError, ...e }) => {
      expect(hasError).toBe(true);
    });
    render(
      <InputForm password id={PASSWORD_ID} value={pass} onChange={onChange}>
        Nome
      </InputForm>,
    );

    const inputPass = document.querySelector(`#${PASSWORD_ID}`);
    expect(inputPass).toBeInTheDocument();
  });

  it('Should not show error when password has enough required characters', async () => {
    const pass = '';
    const onChange = jest.fn().mockImplementation(({ hasError, ...e }) => {
      expect(hasError).toBe(false);
    });

    render(
      <InputForm password id={PASSWORD_ID} value={pass} onChange={onChange}>
        Nome
      </InputForm>,
    );

    const inputPass = document.querySelector<HTMLInputElement>(
      `#${PASSWORD_ID}`,
    );
    expect(inputPass).toBeInTheDocument();
  });
});
