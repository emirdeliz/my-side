import React, { ReactNode } from 'react';
import { MarginProps } from '@theme';
import * as S from './FormError.style';

interface FormErrorChildrenProps extends MarginProps {
  children: ReactNode;
}

export const FormError = ({ children, ...props }: FormErrorChildrenProps) => {
  return <S.Error {...props}>{children}</S.Error>;
};
