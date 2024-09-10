import { MarginProps, PaddingProps } from '@theme';
import React, { memo, ReactNode } from 'react';
import * as S from './Col.style';

export type ColSize =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12';

export interface ColProps extends MarginProps, PaddingProps {
  de?: ColSize;
  mobiles?: ColSize;
  mobilem?: ColSize;
  mobilel?: ColSize;
  tablet?: ColSize;
  laptop?: ColSize;
  desktop?: ColSize;
  auto?: boolean;
  children?: ReactNode;
}

const ColBase = memo(({ children, ...props }: ColProps) => {
  return <S.Col {...props}>{children}</S.Col>;
});

export const Col = (props: ColProps) => <ColBase {...props} />;
Col.C1 = (props: ColProps) => <Col {...props} de="1" />;
Col.C2 = (props: ColProps) => <Col {...props} de="2" />;
Col.C3 = (props: ColProps) => <Col {...props} de="3" />;
Col.C4 = (props: ColProps) => <Col {...props} de="4" />;
Col.C5 = (props: ColProps) => <Col {...props} de="5" />;
Col.C6 = (props: ColProps) => <Col {...props} de="6" />;
Col.C7 = (props: ColProps) => <Col {...props} de="7" />;
Col.C8 = (props: ColProps) => <Col {...props} de="8" />;
Col.C9 = (props: ColProps) => <Col {...props} de="9" />;
Col.C10 = (props: ColProps) => <Col {...props} de="10" />;
Col.C11 = (props: ColProps) => <Col {...props} de="11" />;
Col.C12 = (props: ColProps) => <Col {...props} de="12" />;
Col.Auto = (props: ColProps) => <Col {...props} auto />;
