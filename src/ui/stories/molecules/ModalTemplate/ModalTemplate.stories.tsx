import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ModalTemplate, ModalTemplateProps } from '@molecules';
import { InputFormLabel } from '@organisms';

export default {
  title: 'Components/Molecules/ModalTemplate',
  component: ModalTemplate,
} as Meta;

const Template: Story<ModalTemplateProps> = (args) => (
  <ModalTemplate {...args} />
);

export const ModalTemplateSimple = Template.bind({});
ModalTemplateSimple.args = {
  labelButton: 'Click me!',
  children: (
    <InputFormLabel.Input value="peter" onInputChange={() => {}}>
      Entre com o nome
    </InputFormLabel.Input>
  ),
  onClickButton: () => {},
};

export const ModalTemplateTitleAndSubTitle = Template.bind({});
ModalTemplateTitleAndSubTitle.args = {
  ...ModalTemplateSimple.args,
  title: 'Title',
  subTitle: 'SubTitle',
};
