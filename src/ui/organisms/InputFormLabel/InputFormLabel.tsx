import { Input, InputProps } from '@atoms';
import { FormGroup } from '@molecules';
import { ChangeEvent } from 'react';
import * as S from './InputFormLabel.style';

export interface InputFormLabelProps extends InputProps {
  children?: string;
  errorMsg?: string;
  id?: string;
  labelInfo?: string;
  fw3?: boolean;
  row?: boolean;
}

export const InputFormLabel = ({
  children,
  id,
  labelInfo,
  fw3,
  errorMsg,
  row,
  ...props
}: InputFormLabelProps) => {
  return (
    <FormGroup row={row} label={children} target={id} fw3={fw3} {...props}>
      <S.LabelInfo fs0 red {...props}>
        {labelInfo}
      </S.LabelInfo>
    </FormGroup>
  );
};

export interface InputFormLabelFormProps
  extends InputFormLabelProps,
    Omit<InputProps, 'onChange' | 'id'> {
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

InputFormLabel.Input = ({
  children,
  onInputChange,
  ...props
}: InputFormLabelFormProps) => {
  return (
    <S.InputFormLabel>
      <InputFormLabel {...props} row>
        {children}
      </InputFormLabel>
      <Input
        {...props}
        fs2
        transparent
        onChange={(e) => onInputChange(e as ChangeEvent<HTMLInputElement>)}
      />
    </S.InputFormLabel>
  );
};
