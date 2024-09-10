import React from 'react';
import { Story, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Alert, AlertProps } from '@molecules';

const figmaUrl =
  'https://www.figma.com/file/Wa3F6Lk4wkjEXnFMOa7YuU/Cadastro-das-taxas---Boleto-Zero?node-id=404%3A2877';
export default {
  title: 'Components/Molecules/Alert',
  component: Alert,
  parameters: {
    design: {
      type: 'figma',
      url: figmaUrl,
    },
  },
} as Meta;

const Template: Story<AlertProps> = (args) => {
  return <Alert {...args} />;
};
Template.decorators = [withDesign];

export const AlertSimple = Template.bind({});
AlertSimple.args = {
  children:
    'Todos os dias os arquivos de retorno podem ser atualizados. Você receberá uma notificação.',
};

const TemplateInfo: Story<AlertProps> = (args) => {
  return <Alert.Info {...args} />;
};
TemplateInfo.decorators = [withDesign];

export const AlertInfo = TemplateInfo.bind({});
AlertInfo.args = {
  children:
    'Todos os dias os arquivos de retorno podem ser atualizados. Você receberá uma notificação.',
};
