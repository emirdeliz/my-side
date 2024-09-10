import { Story } from '@storybook/react';
import { render } from '@test';
import { FormGroupSimple, FormGroupTextArea } from '@stories';
import { FormGroupProps } from '..';

const renderFormGroup = async (
  formgroup: Story<FormGroupProps>,
  props?: FormGroupProps
) => {
  const FormGroup = formgroup;
  const { baseElement } = render(<FormGroup {...formgroup.args} {...props} />);
  return baseElement;
};

describe('FormGroup component test', () => {
  it('Have FormGroup', async () => {
    const { container: formgroupNode } = render(<FormGroupSimple />);
    expect(typeof formgroupNode).toEqual(typeof (<FormGroupSimple />));
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

  it('Have FormGroup textarea', async () => {
    const formGroupNode = await renderFormGroup(FormGroupTextArea);
    const textarea = formGroupNode.querySelector(
      'textarea'
    ) as HTMLTextAreaElement;
    const label = formGroupNode.querySelector(
      `[for='${textarea.id}']`
    ) as HTMLLabelElement;

    expect(label).toBeInTheDocument();
    expect(label.innerHTML).toEqual('Entre com a descrição');

    expect(textarea).toBeInTheDocument();
    expect(textarea.value).toBeFalsy();
  });
});
