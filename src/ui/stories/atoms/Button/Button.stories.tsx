import React from 'react';
import { Story, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Button, ButtonProps } from '@atoms';

const figmaUrl =
  'https://www.figma.com/file/wW7x4g4eNApQg4LJ8VLcSa/Extrato?node-id=123%3A611';
export default {
  title: 'Components/Atoms/Button',
  component: Button,
  parameters: {
    design: {
      type: 'figma',
      url: figmaUrl,
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;
Template.decorators = [withDesign];

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
