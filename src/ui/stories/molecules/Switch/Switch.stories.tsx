import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Switch, SwitchProps } from '@molecules';

export default {
  title: 'Components/Molecules/Switch',
  component: Switch,
} as Meta;

const Template: Story<SwitchProps> = (args) => {
  const [selected, setSelected] = useState<boolean>(false);
  return <Switch {...args} {...{ selected, onChange: setSelected }} />;
};

export const SwitchSimple = Template.bind({});
SwitchSimple.args = {};
