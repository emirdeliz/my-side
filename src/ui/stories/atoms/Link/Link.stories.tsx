import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Link, LinkIconProps, LinkProps } from '@atoms';

export default {
  title: 'Components/Atoms/Link',
  component: Link,
} as Meta;

const Template: Story<LinkProps> = (args) => <Link {...args} />;

export const LinkSimple = Template.bind({});
LinkSimple.args = {
  children: 'Hello world!',
};

const TemplateIcon: Story<LinkIconProps> = (args) => <Link.Icon {...args} />;
export const LinkIcon = TemplateIcon.bind({});
LinkIcon.args = {
  children: 'Hello world!',
  check: true,
  xs: true,
};
