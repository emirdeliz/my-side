import React from 'react';
import { Story, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Tooltip, TooltipProps } from '@molecules';
import { Button, Flex } from '@atoms';

const figmaUrl =
  'https://www.figma.com/file/wW7x4g4eNApQg4LJ8VLcSa/Extrato?node-id=244%3A2217';
export default {
  title: 'Components/Molecules/Tooltip',
  component: Tooltip,
  parameters: {
    design: {
      type: 'figma',
      url: figmaUrl,
    },
  },
} as Meta;

const TooltipItem = ({ children, ...props }: TooltipProps) => (
  <Flex.Row mb5>
    <Tooltip {...props}>
      <Button>{children}</Button>
    </Tooltip>
  </Flex.Row>
);

const Template: Story<TooltipProps> = (args) => (
  <Flex.Col>
    <TooltipItem {...args}>Top tooltip!</TooltipItem>
    <TooltipItem {...args} bottom>
      Bottom tooltip!
    </TooltipItem>
    <TooltipItem {...args} left>
      Left tooltip!
    </TooltipItem>
    <TooltipItem {...args} right>
      Right tooltip!
    </TooltipItem>
  </Flex.Col>
);
Template.decorators = [withDesign];

export const TooltipSimple = Template.bind({});
TooltipSimple.args = {
  title: 'Hello world!',
};

export const TooltipLight = Template.bind({});
TooltipLight.args = {
  title: 'Hello world!',
  light: true,
};

export const TooltipLightWithBorder = Template.bind({});
TooltipLightWithBorder.args = {
  title: 'Hello world!',
  light: true,
  error: true,
};

export const TooltipLightHideArrow = Template.bind({});
TooltipLightHideArrow.args = {
  title: 'Hello world!',
  light: true,
  hideArrow: true,
};

export const TooltipLargeText = Template.bind({});
TooltipLargeText.args = {
  title: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
    essentially unchanged. It was popularized in the 1960s with the release of Letraset sheets 
    containing Lorem Ipsum passages, and more recently with desktop publishing software like 
    Peter PageMaker including versions of Lorem Ipsum.`,
};
