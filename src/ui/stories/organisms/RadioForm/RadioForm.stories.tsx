import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { RadioForm, RadioFormProps } from '@organisms';

const figmaUrl =
  'https://www.figma.com/file/HraHHrgUSx4NkPMrMJnM2G/Pagamentos?node-id=75%3A5735';
export default {
  title: 'Components/Organisms/RadioForm',
  component: RadioForm,
  parameters: {
    design: {
      type: 'figma',
      url: figmaUrl,
    },
  },
} as Meta;

const Template: Story<RadioFormProps> = (args) => {
  const [value, setValue] = useState<string | number>();
  return <RadioForm {...args} value={value} onChange={(v) => setValue(v)} />;
};

export const RadioFormSimple = Template.bind({});
RadioFormSimple.args = {
  options: [
    { label: 'Pagar hoje', value: 1 },
    { label: 'Agendar para', value: 2 },
  ],
};

export const RadioFormRow = Template.bind({});
RadioFormRow.args = {
  directionRow: true,
  options: [
    { label: 'Pagar hoje', value: 1 },
    { label: 'Agendar para', value: 2 },
  ],
};
