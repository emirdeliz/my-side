import { MarginProps, PaddingProps } from '@theme';
import React, { ReactNode } from 'react';
import * as S from './Row.style';

export interface RowProps extends MarginProps, PaddingProps {
  children: ReactNode;
}

export const Row = ({ children, ...props }: RowProps) => {
  return (
    <S.Row {...props}>
      {children}
    </S.Row>
  );
};
