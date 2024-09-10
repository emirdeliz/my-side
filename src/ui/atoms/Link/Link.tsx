import React, { MouseEvent, ReactNode } from 'react';
import { TitleProps } from '..';
import { Icon, IconProps } from '../Icon/Icon';
import * as S from './Link.style';

export interface LinkProps extends TitleProps {
  children?: ReactNode;
  href?: string;
  target?: string;
  role?: string;
  rel?: string;
  dataTestId?: string;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
  noUnderline?: boolean;
}

export interface LinkIconProps extends LinkProps, IconProps {}

export const Link = ({ children, dataTestId, ...props }: LinkProps) => {
  return (
    <S.Link {...props} data-testid={dataTestId}>
      {children}
    </S.Link>
  );
};

Link.Icon = ({ children, ...props }: LinkIconProps) => (
  <Link {...props}>
    <Icon {...{ ...props, onClick: undefined }} /> {children}
  </Link>
);
