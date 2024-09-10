import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Toast, ToastProps, ToastProvider, useToast } from '@molecules';
import { Link } from '@atoms';
import { AppThemeOptions } from '@theme';

export default {
  title: 'Components/Molecules/Toast',
  component: Toast,
} as Meta;

const Wrapper = (args: ToastProps & AppThemeOptions) => {
  const { showToast } = useToast();
  const showNewToast = () => {
    showToast({
      ...args,
      title: 'Hello world!',
      message: `
				It is a long established fact that a reader will be distracted by 
				the readable content of a page when looking at its layout.
			`,
    });
  };

  return (
    <>
      <Link.Icon
        rightOpen
        white
        data-testid="show-toast"
        onClick={showNewToast}
      />
      <Toast {...args} />
    </>
  );
};

const Template: Story<ToastProps & AppThemeOptions> = (args) => {
  return (
    <ToastProvider>
      <Wrapper {...args} />
    </ToastProvider>
  );
};

export const ToastSimple = Template.bind({});
ToastSimple.args = {
  topRight: true,
};

export const ToastSuccess = Template.bind({});
ToastSuccess.args = {
  topRight: true,
  success: true,
};

export const ToastWarn = Template.bind({});
ToastWarn.args = {
  topRight: true,
  warn: true,
};

export const ToastError = Template.bind({});
ToastError.args = {
  topRight: true,
  error: true,
};

export const ToastDefault = Template.bind({});
ToastDefault.args = {
  topRight: true,
  default: true,
};
