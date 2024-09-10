import React, { ReactNode } from 'react';
import { Flex } from '@atoms';
import { MarginProps } from '@theme';
import * as S from './Form.style';

interface FormChildrenProps extends MarginProps {
  children: ReactNode;
  onSubmit?: (evt: React.SyntheticEvent) => void;
}

export const Form = ({ children, onSubmit, ...props }: FormChildrenProps) => {
  return (
    <S.Container {...props} onSubmit={onSubmit}>
      <Flex wFull>{children}</Flex>
    </S.Container>
  );
};
