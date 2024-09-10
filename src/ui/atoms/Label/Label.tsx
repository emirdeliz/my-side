import React, { ReactNode } from 'react';
import { ColorsProps, FontSizeProps } from '@theme';
import * as S from './Label.style';

export interface LabelProps extends ColorsProps, FontSizeProps {
  children: ReactNode;
  target?: string | number;
  fw3?: boolean;
}

export const Label = ({ children, target, ...props }: LabelProps) => {
  return (
    <S.Label {...props} htmlFor={String(target)}>
      {children}
    </S.Label>
  );
};
