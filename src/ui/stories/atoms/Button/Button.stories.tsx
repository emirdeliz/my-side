import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button, ButtonProps } from '@atoms';

export default {
  title: 'Components/Atoms/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const ButtonSimple = Template.bind({});
ButtonSimple.args = {
  children: '🤓  Click me',
};

export const ButtonRounded = Template.bind({});
ButtonRounded.args = {
  ...ButtonSimple.args,
  rounded: true,
};

export const ButtonOutlined = Template.bind({});
ButtonOutlined.args = {
  ...ButtonSimple.args,
  outlined: true,
};

export const ButtonSmall = Template.bind({});
ButtonSmall.args = {
  ...ButtonSimple.args,
  sm: true,
};

export const ButtonNormal = Template.bind({});
ButtonNormal.args = {
  ...ButtonSimple.args,
  nm: true,
};

export const ButtonNotClickable = Template.bind({});
ButtonNotClickable.args = {
  ...ButtonSimple.args,
  clickable: false,
};
