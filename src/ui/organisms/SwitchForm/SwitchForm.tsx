import { Input, InputProps } from '@atoms';
import { FormGroup, Switch, SwitchProps } from '@molecules';
import { ChangeEvent } from 'react';
import * as S from './SwitchForm.style';

export interface SwitchFormProps extends SwitchProps {
  children?: string;
  errorMsg?: string;
  id?: string;
  fw3?: boolean;
  row?: boolean;
}

export const SwitchForm = ({
  children,
  id,
  fw3,
  errorMsg,
  row,
  ...props
}: SwitchFormProps) => {
  return (
    <FormGroup row={row} label={children} target={id} fw3={fw3} {...props}>
      <Switch id={id} {...props} />
    </FormGroup>
  );
};

export interface SwitchFormInputProps
  extends SwitchFormProps,
    Omit<InputProps, 'onChange' | 'id'> {
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

SwitchForm.Input = ({
  children,
  onInputChange,
  ...props
}: SwitchFormInputProps) => {
  return (
    <S.SwitchInput>
      <SwitchForm {...props} row>
        {children}
      </SwitchForm>
      <Input
        {...props}
        fs2
        transparent
        onChange={(e) => onInputChange(e as ChangeEvent<HTMLInputElement>)}
        readOnly
      />
    </S.SwitchInput>
  );
};
