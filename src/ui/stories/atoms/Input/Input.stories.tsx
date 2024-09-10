import React, { ChangeEvent, useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Flex, Input, InputProps } from '@atoms';

export default {
  title: 'Components/Atoms/Input',
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => {
  const [value, setValue] = useState<
    string | number | Date | boolean | null | undefined
  >(args.value);
  return (
    <Flex>
      <Input
        {...args}
        value={value}
        onChange={(e) => {
          const { value } = (e as ChangeEvent<HTMLInputElement>).target;
          setValue(value);
        }}
      />
    </Flex>
  );
};

export const InputText = Template.bind({});
InputText.args = {
  value: 'Hello world!',
};

export const InputTextArea = Template.bind({});
InputTextArea.args = {
  value: 'Hello world!',
  textarea: true,
};

export const InputTransparent = Template.bind({});
InputTransparent.args = {
  placeholder: 'R$ 0,00',
  transparent: true,
};
