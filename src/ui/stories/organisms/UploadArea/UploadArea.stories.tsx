import React, { useCallback, useEffect, useState } from 'react';
import { Meta, Story } from '@storybook/react';
import {
  UploadArea,
  UploadAreaListProps,
  UploadAreaProps,
  UploadInputItem,
} from '@organisms';
import { Flex } from '@atoms';

const figmaUrl =
  'https://www.figma.com/file/WBwjhYPSkQ75nVc4E0Gvu6/Demonstrativo-Financeiro?node-id=324%3A1519';
export default {
  title: 'Components/Organisms/UploadArea',
  component: UploadArea,
  parameters: {
    design: {
      type: 'figma',
      url: figmaUrl,
    },
  },
} as Meta;

const Template: Story<UploadAreaProps> = (args) => {
  const [value, setValue] = useState<Array<File> | File>();
  return (
    <Flex hFull wFull mb7 mt7 ml7 mr7>
      <UploadArea {...args} value={value} onChange={(f) => setValue(f)} />
    </Flex>
  );
};

export const UploadAreaSingle = Template.bind({});
UploadAreaSingle.args = {
  title:
    'Arraste o PDF do boleto para esta área ou clique aqui para fazer o upload.',
};

export const UploadAreaMultiple = Template.bind({});
UploadAreaMultiple.args = {
  title:
    'Arraste o PDF do boleto para esta área ou clique aqui para fazer o upload.',
  multiple: true,
};

const TemplateInput: Story<UploadAreaListProps> = (args) => {
  const [value, setValue] = useState<
    Array<UploadInputItem> | UploadInputItem
  >();
  return (
    <Flex hFull wFull mb7 mt7 ml7 mr7>
      <UploadArea.Input
        {...args}
        value={value}
        onRemove={(f) => setValue(f || [])}
        onChange={(f) => setValue(f || [])}
      />
    </Flex>
  );
};

export const UploadAreaListSimple = TemplateInput.bind({});
UploadAreaListSimple.args = {
  title: 'Anexar documento',
  value: undefined,
  placeholder: 'Nota explicativa',
};

export const UploadAreaListMultiple = TemplateInput.bind({});
UploadAreaListMultiple.args = {
  title: 'Anexar documento',
  multiple: true,
  value: [],
  placeholder: 'Nota explicativa',
  accept: ['image/png'],
};

export const UploadAreaListMerge = TemplateInput.bind({});
UploadAreaListMerge.args = {
  title: 'Anexar documento',
  multiple: false,
  value: undefined,
  placeholder: 'Nota explicativa',
  accept: ['image/png'],
  matchList: true,
  center: true,
  ignoreDescription: true,
  icon: 'pdfDouble',
};
