import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Input, Link } from '@atoms';
import { Title } from '../../../atoms/Title/Title.style';
import { Modal, ModalProps } from '@molecules';

export default {
  title: 'Components/Molecules/Modal',
  component: Modal,
} as Meta;

const Template: Story<ModalProps> = (args) => {
  const [visible, setVisible] = useState<boolean>(true);
  return (
    <Modal {...args} visible={visible} onClose={() => setVisible(!visible)} />
  );
};

export const ModalSimple = Template.bind({});
ModalSimple.args = {
  children: 'Hello world!',
};

export const ModalOverlay = Template.bind({});
ModalOverlay.args = {
  children: (
    <>
      <Title fw3 center>
        Criação de PIN
      </Title>
      <Title fs1 mb2 mt3 center>
        Crie um PIN de 4 dígitos numéricos para realizar ações de segurança na
        sua conta e transações financeiras. Sua senha deve conter 4 números, não
        serão aceitos dados pessoais de fácil dedução.
      </Title>
      <Input value="" placeholder="entre com o pin" />
    </>
  ),
  visible: true,
  overlay: true,
};

export const ModalClose = Template.bind({});
ModalClose.args = {
  children: (
    <>
      <Title fw3 center>
        Criação de PIN
      </Title>
      <Title fs1 mb2 mt3 center>
        Crie um PIN de 4 dígitos numéricos para realizar ações de segurança na
        sua conta e transações financeiras. Sua senha deve conter 4 números, não
        serão aceitos dados pessoais de fácil dedução.
      </Title>
      <Input value="" placeholder="entre com o pin" />
    </>
  ),
  visible: true,
  onClose: () => {},
};

export const ModalLeftIcon = Template.bind({});
ModalLeftIcon.args = {
  children: (
    <>
      <Title fw3 center>
        Criação de PIN
      </Title>
      <Title fs1 mb2 mt3 center>
        Crie um PIN de 4 dígitos numéricos para realizar ações de segurança na
        sua conta e transações financeiras. Sua senha deve conter 4 números, não
        serão aceitos dados pessoais de fácil dedução.
      </Title>
      <Input value="" placeholder="entre com o pin" />
    </>
  ),
  visible: true,
  headerLeftIcon: <Link.Icon sm arrowBack />,
  onClose: () => {},
};

export const ModalConfirm = Template.bind({});
ModalConfirm.args = {
  children: (
    <>
      <Title fw3 center>
        Confirmar
      </Title>
      <Title fs1 mb2 mt3 center>
        Confirmar exclusão da conta?
      </Title>
    </>
  ),
  confirm: true,
  visible: true,
  overlay: true,
};
