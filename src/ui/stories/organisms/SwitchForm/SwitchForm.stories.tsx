import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { SwitchForm, SwitchFormInputProps, SwitchFormProps } from '@organisms';

const figmaUrl =
  'https://www.figma.com/file/ifCLiQochCsdkSATTKNBzh/Investimentos?node-id=402%3A2318';
export default {
  title: 'Components/Organisms/SwitchForm',
  component: SwitchForm,
  parameters: {
    design: {
      type: 'figma',
      url: figmaUrl,
    },
  },
} as Meta;

const Template: Story<SwitchFormProps> = (args) => {
  const [selected, setSelected] = useState<boolean>(false);
  return <SwitchForm {...args} selected={selected} onChange={setSelected} />;
};

export const SwitchFormSimple = Template.bind({});
SwitchFormSimple.args = {
  children: 'Fundo de reserva',
};

export const SwitchFormRow = Template.bind({});
SwitchFormRow.args = {
  children: 'Fundo de reserva',
  row: true,
};

const TemplateInput: Story<SwitchFormInputProps> = (args) => {
  const [selected, setSelected] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');
  return (
    <SwitchForm.Input
      {...args}
      selected={selected}
      value={value}
      onChange={setSelected}
      onInputChange={(e) => setValue(e.target.value)}
    />
  );
};

export const SwitchFormInput = TemplateInput.bind({});
SwitchFormInput.args = {
  children: 'Fundo de reserva',
  placeholder: 'R$ 0,00',
};
