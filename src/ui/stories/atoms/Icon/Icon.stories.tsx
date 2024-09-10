import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Flex, Icon, IconProps } from '@atoms';

export default {
  title: 'Components/Atoms/Icon',
  component: Icon,
} as Meta;

const Template: Story<IconProps> = (args) => {
  return (
    <>
      <Flex alignCenter justifyCenter>
        <Icon {...args} xs />
      </Flex>
      <Flex alignCenter justifyCenter ml3>
        <Icon {...args} sm />
      </Flex>
      <Flex alignCenter justifyCenter ml3>
        <Icon {...args} nm />
      </Flex>
    </>
  );
};

export const IconCheckGreen = Template.bind({});
IconCheckGreen.args = {
  check: true,
  green: true,
};

export const IconUploadRed = Template.bind({});
IconUploadRed.args = {
  upload: true,
  red: true,
};

export const IconCheckCircledWhite = Template.bind({});
IconCheckCircledWhite.args = {
  check: true,
  circled: true,
  white: true,
};

export const IconPdfDoubleCircledWhite = Template.bind({});
IconPdfDoubleCircledWhite.args = {
  pdfDouble: true,
  circled: true,
  white: true,
};
