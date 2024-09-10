import { Flex, Label } from '@atoms';
import { FontSizeProps } from '@theme';
import React, { ReactNode } from 'react';
import * as S from './FormGroup.style';

export interface FormGroupProps extends FontSizeProps {
  label?: ReactNode;
  target?: string;
  labelId?: string;
  optional?: boolean;
  fw3?: boolean;
  row?: boolean;
}

export interface FormGroupChildrenProps extends FormGroupProps {
  children?: ReactNode;
}

export const FormGroup = ({
  fw3,
  children,
  label,
  target,
  labelId,
  ...props
}: FormGroupChildrenProps) => {
  return (
    <S.FormGroup>
      {label && (
        <Flex.Row alignCenter justifyStart mb1>
          <Label
            n2
            fs1
            target={target}
            fw3={fw3}
            data-testid={`${labelId}-label`}
            {...props}
          >
            {label}
          </Label>
        </Flex.Row>
      )}
      {children}
    </S.FormGroup>
  );
};
