import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Radio, RadioProps } from '@atoms';

const figmaUrl =
  'https://www.figma.com/file/HraHHrgUSx4NkPMrMJnM2G/Pagamentos?node-id=75%3A5735';
export default {
  title: 'Components/Atoms/Radio',
  component: Radio,
  parameters: {
    design: {
      type: 'figma',
      url: figmaUrl,
    },
  },
} as Meta;

const Template: Story<RadioProps> = (args) => {
  const [value, setValue] = useState<boolean>(true);
  return <Radio {...args} checked={value} onChange={(v) => setValue(v)} />;
};

export const RadioSimple = Template.bind({});
RadioSimple.args = {};
