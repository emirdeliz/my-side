import * as helpers from '@helpers';
import { FontSizeProps, MarginProps, PaddingProps } from '@theme';
import React, {
  ChangeEvent,
  ClipboardEvent,
  FocusEvent,
  KeyboardEvent,
  MouseEvent,
  ReactNode,
} from 'react';
import { Flex, FormControl, Title } from '..';
import * as S from './Input.style';

const INPUT_TEXT_MAX_LENGTH_DEFAULT = 255;

export interface InputProps
  extends FormControl,
    FontSizeProps,
    PaddingProps,
    MarginProps {
  currency?: boolean;
  placeholder?: string;
  before?: ReactNode;
  after?: ReactNode;
  textarea?: boolean;
  maxLength?: number;
  minLength?: number;
  alignCenter?: boolean;
  id?: string | number;
  dataTestId?: string | number;
  readOnly?: boolean;
  transparent?: boolean;
  onClick?: (e: MouseEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onPaste?: (e: ClipboardEvent) => void;
  onKeyDown?: (e: KeyboardEvent) => void;
}
const InputText = ({ dataTestId, ...props }: InputProps) => {
  const id = String(props.id || '');
  return (
    <S.Input
      {...props}
      id={id}
      fs1
      data-testid={dataTestId || ''}
      value={String(props.value)}
    />
  );
};

export const applyMaskMaybe = (
  value: string | number | Date | null | undefined | boolean,
  { currency }: InputProps
) => {
  if (value === undefined) {
    return '';
  }
  const valueAsString = String(value);
  switch (true) {
    case currency:
      return helpers.maskMoney(valueAsString);
    default:
      return valueAsString;
  }
};
export const Input = ({
  currency,
  after,
  before,
  value,
  readOnly,
  transparent,
  dataTestId,
  onChange,
  ...props
}: InputProps) => {
  const id = String(props.id);
  if (readOnly) {
    return (
      <S.ReadOnly data-testid={dataTestId || ''}>
        <Title {...props} fs1 ellipsis>
          {applyMaskMaybe(value, {
            currency,
          })}
        </Title>
      </S.ReadOnly>
    );
  }

  const input = (
    <InputText
      {...props}
      id={id}
      maxLength={INPUT_TEXT_MAX_LENGTH_DEFAULT}
      value={applyMaskMaybe(value, {
        currency,
      })}
      dataTestId={dataTestId}
      onChange={(e) => {
        const eventMask = { ...e };
        onChange &&
          onChange(
            eventMask as ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
          );
      }}
    />
  );
  
  return (
    <S.Container transparent={transparent}>
      {before && <Flex.Center ml2>{before}</Flex.Center>}
      {input}
      {after && <Flex.Center mr2>{after}</Flex.Center>}
    </S.Container>
  );
};

Input.TextArea = (props: InputProps) => <Input {...props} textarea />;
Input.TextArea255 = (props: InputProps) => (
  <Input.TextArea {...props} maxLength={INPUT_TEXT_MAX_LENGTH_DEFAULT} />
);
