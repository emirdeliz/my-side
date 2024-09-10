import { render, screen } from '@test';
import {
  InputText,
  InputTextArea,
} from '@stories';
import { Story } from '@storybook/react';
import { InputProps } from '..';
import { Input } from './Input';

const renderInput = async (input: Story<InputProps>, props?: InputProps) => {
  const Input = input;
  const { container } = render(<Input {...input.args} {...props} />);
  const inputNode = (await screen.findByRole(
    'textbox',
    container
  )) as HTMLInputElement;
  return inputNode;
};

describe('Input component test', () => {
  it('Have Input', async () => {
    const { container: inputNode } = render(<Input />);
    expect(typeof inputNode).toEqual(typeof (<Input />));
  });

  it('Have Input text with max length 255', async () => {
    const inputNode = await renderInput(InputText, { maxLength: 255 });
    expect(inputNode.maxLength).toBe(255);
  });

  it('Have Input textarea with max length 255', async () => {
    const inputNode = await renderInput(InputTextArea, { maxLength: 255 });
    expect(inputNode.maxLength).toBe(255);
  });
});
