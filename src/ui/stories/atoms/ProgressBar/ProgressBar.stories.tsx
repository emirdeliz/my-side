import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ProgressBar, ProgressBarProps } from '@atoms';

export default {
  title: 'Components/Atoms/ProgressBar',
  component: ProgressBar,
} as Meta;

const Template: Story<ProgressBarProps> = (args) => <ProgressBar {...args} />;

export const ProgressBarSimple = Template.bind({});
ProgressBarSimple.args = {};
