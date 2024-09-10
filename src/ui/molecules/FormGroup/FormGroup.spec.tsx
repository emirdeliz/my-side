import { Story } from '@storybook/react';
import { render } from '@test';
import { FormGroupSimple } from '@stories';
import { FormGroupProps } from '..';

const renderFormGroup = async (
  formGroup: Story<FormGroupProps>,
  props?: FormGroupProps
) => {
  const FormGroup = formGroup;
  const { baseElement } = render(<FormGroup {...formGroup.args} {...props} />);
  return baseElement;
};

describe('FormGroup component test', () => {
  it('Have FormGroup', async () => {
    const { container: formGroupNode } = render(<FormGroupSimple />);
    expect(typeof formGroupNode).toEqual(typeof (<FormGroupSimple />));
  });

  it('Have FormGroup input', async () => {
    const formGroupNode = await renderFormGroup(FormGroupSimple);
    const input = formGroupNode.querySelector('input') as HTMLInputElement;
    const label = formGroupNode.querySelector(
      `[for='${input.id}']`
    ) as HTMLLabelElement;

    expect(label).toBeInTheDocument();
    expect(label.innerHTML).toEqual('Entre com o nome');

    expect(input).toBeInTheDocument();
    expect(input.value).toBeFalsy();
  });
});
