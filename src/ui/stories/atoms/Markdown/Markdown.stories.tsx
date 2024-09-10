import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Markdown, MarkdownProps } from '@atoms';

export default {
  title: 'Components/Atoms/Markdown',
  component: Markdown,
} as Meta;

const Template: Story<MarkdownProps> = ({ children }) => (
  <Markdown>{children}</Markdown>
);

export const MarkdownSimple = Template.bind({});
MarkdownSimple.args = {
  children: '# **This is title bold text**',
};

export const MarkdownColored = Template.bind({});
MarkdownColored.args = {
  children: '<span style="color:#FF6B00">*This is orange italic text*</span>',
};
