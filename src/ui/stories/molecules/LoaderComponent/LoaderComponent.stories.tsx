import React, { ComponentType } from 'react';
import { Meta, Story } from '@storybook/react';
import { LoaderComponent, LoaderComponentProps } from '@molecules';
import { IconProps } from '@atoms';
import { setTimeout } from 'timers';

export default {
  title: 'Components/Molecules/LoaderComponent',
  component: LoaderComponent,
} as Meta;

const Template: Story<LoaderComponentProps<IconProps>> = (args) => (
  <LoaderComponent<IconProps> {...args} />
);

export const LoaderComponentSimple = Template.bind({});
LoaderComponentSimple.args = {
  children: async () => ({
    default: await new Promise<ComponentType<IconProps>>(async (resolve) => {
      const r = (await import('../../../atoms/Icon/Icon')).Icon;
      setTimeout(() => {
        resolve(r);
      }, 1500);
    }),
  }),
  props: {
    white: true,
  },
};
