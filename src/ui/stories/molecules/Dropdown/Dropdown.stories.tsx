import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Icon } from '@atoms';
import { Dropdown, DropdownProps } from '@molecules';
import { GenericObject } from '@types';

export default {
  title: 'Components/Molecules/Dropdown',
  component: Dropdown,
} as Meta;

const options = ['One', 'Two', 'Three', 'Four', 'Five'];
const optionsWithObjects = [
  { label: 'One', value: 1 },
  { label: 'Two', value: 2 },
  { label: 'Three', value: 3 },
  { label: 'Four', value: 4 },
  { label: 'Five', value: 5 },
];

const Template: Story<GenericObject> = <T extends GenericObject>({
  value: initialValue,
  ...args
}: DropdownProps<T>) => {
  const [value, setValue] = useState<T | undefined>(initialValue);
  return (
    <Dropdown<T> {...args} value={value} onChange={(v: T) => setValue(v)} />
  );
};
Template.decorators = [withDesign];

export const DropdownSimple = Template.bind({});
DropdownSimple.args = {
  id: 'categoria',
  placeholder: 'Escolha a categoria',
  options,
};

export const DropdownOptionsWithObjects = Template.bind({});
DropdownOptionsWithObjects.args = {
  ...DropdownSimple.args,
  keyOfLabel: 'label',
  options: optionsWithObjects,
};

export const DropdownOptionsWithIcon = Template.bind({});
DropdownOptionsWithIcon.args = {
  ...DropdownSimple.args,
  keyOfLabel: 'label',
  options: optionsWithObjects.map((opt) => ({
    ...opt,
    before: <Icon.Email xs />,
  })),
};

export const DropdownOptionsReadonly = Template.bind({});
DropdownOptionsReadonly.args = {
  ...DropdownSimple.args,
  keyOfLabel: 'label',
  options: optionsWithObjects,
  value: optionsWithObjects[0],
  readOnly: true,
};
