import { Meta, Story } from '@storybook/react';
import { InputFormLabel, InputFormLabelFormProps } from '@organisms';
import React, { useState } from 'react';

const figmaUrl =
  'https://www.figma.com/file/ifCLiQochCsdkSATTKNBzh/Investimentos?node-id=402%3A2318';
export default {
  title: 'Components/Organisms/InputFormLabel',
  component: InputFormLabel,
  parameters: {
    design: {
      type: 'figma',
      url: figmaUrl,
    },
  },
} as Meta;

const TemplateInput: Story<InputFormLabelFormProps> = (args) => {
  const [value, setValue] = useState<string>('');
  return (
    <InputFormLabel.Input
      {...args}
      value={value}
      onInputChange={(e) => setValue(e.target.value)}
    />
  );
};

export const InputFormLabelForm = TemplateInput.bind({});
InputFormLabelForm.args = {
  children: 'Fundo de reserva',
  placeholder: 'R$ 0,00',
  labelInfo: 'Obrigatório',
};
