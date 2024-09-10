import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { DropdownForm, DropdownFormProps } from '@organisms';
import { GenericObject } from '@types';

export default {
  title: 'Components/Organisms/DropdownForm',
  component: DropdownForm,
} as Meta;

const optionsWithObjects = [
  { label: 'One', value: 1 },
  { label: 'Two', value: 2 },
  { label: 'Three', value: 3 },
  { label: 'Four', value: 4 },
  { label: 'Five', value: 5 },
];

const Template: Story<DropdownFormProps<GenericObject>> = <
  T extends GenericObject
>(
  args: DropdownFormProps<GenericObject>
) => {
  const [value, setValue] = useState<T>();
  return (
    <DropdownForm
      {...args}
      value={value}
      onDropdownChange={(v) => setValue(v?.value)}
    />
  );
};

export const DropdownFormSimple = Template.bind({});
DropdownFormSimple.args = {
  children: 'Categoria',
  options: optionsWithObjects,
  keyOfLabel: 'label',
};

export const DropdownFormSemibold = Template.bind({});
DropdownFormSemibold.args = {
  ...DropdownFormSimple.args,
  fw3: true,
};

export const DropdownFormRequired = Template.bind({});
DropdownFormRequired.args = {
  ...DropdownFormSemibold.args,
  errorMsg: 'Categoria inválida',
  required: true,
};
