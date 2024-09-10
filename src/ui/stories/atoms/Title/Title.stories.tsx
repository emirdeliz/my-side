import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Flex, Title, TitleProps } from '@atoms';

export default {
  title: 'Components/Atoms/Title',
  component: Title,
} as Meta;

const Template: Story<TitleProps> = (args) => <Title {...args} />;

export const TitleSimple = Template.bind({});
TitleSimple.args = {
  children: 'Hello world!',
  white: true,
};

export const TitleCapitalize = Template.bind({});
TitleCapitalize.args = {
  ...TitleSimple.args,
  capitalize: true,
};

export const TitleSemibold = Template.bind({});
TitleSemibold.args = {
  ...TitleSimple.args,
  semibold: true,
};

export const TitleUpperCase = Template.bind({});
TitleUpperCase.args = {
  ...TitleSimple.args,
  uppercase: true,
};

const TemplateFontSize: Story<TitleProps> = (args) => (
  <Flex.Col>
    <Title {...args} fs1 mb1 />
    <Title {...args} fs2 mb1 />
    <Title {...args} fs3 mb1 />
    <Title {...args} fs4 mb2 />
    <Title {...args} fs5 mb3 />
    <Title {...args} fs6 />
  </Flex.Col>
);

export const TitleFontSize = TemplateFontSize.bind({});
TitleFontSize.args = {
  ...TitleSimple.args,
};
