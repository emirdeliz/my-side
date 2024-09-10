import React, { ReactNode } from 'react';
import { ColorsProps } from '@theme';
import * as S from './Dot.style';
export interface DotProps extends ColorsProps {
  xss?: boolean;
  xs?: boolean;
  sm?: boolean;
  nm?: boolean;
  outlined?: boolean;
  children?: ReactNode;
}

export const Dot = ({ children, ...props }: DotProps) => {
  return <S.Dot {...props}>{children}</S.Dot>;
};

Dot.Xss = (props: DotProps) => <Dot {...props} xss />;
Dot.Xs = (props: DotProps) => <Dot {...props} xs />;
Dot.Sm = (props: DotProps) => <Dot {...props} sm />;
Dot.Nm = (props: DotProps) => <Dot {...props} nm />;
Dot.Outlined = (props: DotProps) => <Dot {...props} outlined />;
