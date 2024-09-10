import { render, screen } from 'test';
import { InputFormLabelForm } from '@stories';

describe('/organisms/InputFormLabel', () => {
  const onInputChange = jest.fn();
  it('should render successfully', () => {
    render(
      <InputFormLabelForm
        {...InputFormLabelForm.args}
        onInputChange={onInputChange}
      />
    );

    const labelInfo = screen.getByText(/Obrigatório/i);
    const children = screen.getByText(/Fundo de reserva/i);

    expect(labelInfo).toBeInTheDocument();
    expect(children).toBeInTheDocument();
  });
});
