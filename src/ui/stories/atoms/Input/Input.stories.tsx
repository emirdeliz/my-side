import React, { ChangeEvent, useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Flex, Input, InputProps } from '@atoms';

export default {
  title: 'Components/Atoms/Input',
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => {
  const [value, setValue] = useState<
    string | number | Date | boolean | null | undefined
  >(args.value);
  return (
    <Flex>
      <Input
        {...args}
        value={value}
        onChange={(e) => {
          const { valueAsDate, value } = (e as ChangeEvent<HTMLInputElement>)
            .target;
          setValue(args.date ? valueAsDate : value);
        }}
      />
    </Flex>
  );
};

export const InputText = Template.bind({});
InputText.args = {
  value: 'Hello world!',
};

export const InputTextArea = Template.bind({});
InputTextArea.args = {
  value: 'Hello world!',
  textarea: true,
};

export const InputNumber = Template.bind({});
InputNumber.args = {
  value: 2155,
  number: true,
};

export const InputRg = Template.bind({});
InputRg.args = {
  value: 377011113,
  rg: true,
};

export const InputCpf = Template.bind({});
InputCpf.args = {
  value: 65816899040,
  cpf: true,
};

export const InputCnpj = Template.bind({});
InputCnpj.args = {
  value: 23254234000160,
  cnpj: true,
};

export const InputDate = Template.bind({});
InputDate.args = {
  value: new Date(),
  date: true,
};

export const InputPhone = Template.bind({});
InputPhone.args = {
  value: 47986553224,
  phone: true,
};

export const InputBarcodeCommon = Template.bind({});
InputBarcodeCommon.args = {
  value: '23793381286006800396512000063300187440000002001',
  barcode: true,
};

export const InputBarcodeInsurance = Template.bind({});
InputBarcodeInsurance.args = {
  value: '836200000005865801620002001010202172425049125098',
  barcode: true,
};

export const InputReadonly = Template.bind({});
InputReadonly.args = {
  value: '836200000005865801620002001010202172425049125098',
  barcode: true,
  readOnly: true,
};

export const InputTransparent = Template.bind({});
InputTransparent.args = {
  placeholder: 'R$ 0,00',
  transparent: true,
};
