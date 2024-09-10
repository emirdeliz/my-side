import { DefaultTheme } from "styled-components";

export enum Padding {
  Xss = '0px',
  Xs = '4px',
  Sm = '8px',
  Nm = '16px',
  Md = '24px',
  Lg = '32px',
  XLg = '44px',
  XXLg = '96px',
  XXXLg = '128px',
}

export interface PaddingProps {
  pl1?: boolean;
  pl2?: boolean;
  pl3?: boolean;
  pl4?: boolean;
  pl5?: boolean;
  pl6?: boolean;
  pl7?: boolean;
  pr1?: boolean;
  pr2?: boolean;
  pr3?: boolean;
  pr4?: boolean;
  pr5?: boolean;
  pr6?: boolean;
  pr7?: boolean;
  pt1?: boolean;
  pt2?: boolean;
  pt3?: boolean;
  pt4?: boolean;
  pt5?: boolean;
  pt6?: boolean;
  pt7?: boolean;
  pb1?: boolean;
  pb2?: boolean;
  pb3?: boolean;
  pb4?: boolean;
  pb5?: boolean;
  pb6?: boolean;
  pb7?: boolean;
}

interface PaddingByDirectionProps {
  xs?: boolean;
  sm?: boolean;
  nm?: boolean;
  lg?: boolean;
  xLg?: boolean;
  xxLg?: boolean;
  xxxLg?: boolean;
}

export const getPaddingByDirection = ({
  xs,
  sm,
  nm,
  lg,
  xLg,
  xxLg,
  xxxLg,
  theme,
}: PaddingByDirectionProps & {
  theme: DefaultTheme;
}) => {
  switch (true) {
    case xs:
      return theme.padding.Xs;
    case sm:
      return theme.padding.Sm;
    case nm:
      return theme.padding.Nm;
    case lg:
      return theme.padding.Lg;
    case xLg:
      return theme.padding.XLg;
    case xxLg:
      return theme.padding.XXLg;
    case xxxLg:
      return theme.padding.XXXLg;
    default:
      return 0;
  }
};

export const getPadding = ({
  pl1,
  pl2,
  pl3,
  pl4,
  pl5,
  pl6,
  pl7,
  pr1,
  pr2,
  pr3,
  pr4,
  pr5,
  pr6,
  pr7,
  pt1,
  pt2,
  pt3,
  pt4,
  pt5,
  pt6,
  pt7,
  pb1,
  pb2,
  pb3,
  pb4,
  pb5,
  pb6,
  pb7,
  theme,
}: PaddingProps & {
  theme: DefaultTheme;
}) => {
  const paddingLeft = getPaddingByDirection({
    xs: pl1,
    sm: pl2,
    nm: pl3,
    lg: pl4,
    xLg: pl5,
    xxLg: pl6,
    xxxLg: pl7,
    theme,
  });
  const paddingRight = getPaddingByDirection({
    xs: pr1,
    sm: pr2,
    nm: pr3,
    lg: pr4,
    xLg: pr5,
    xxLg: pr6,
    xxxLg: pr7,
    theme,
  });
  const paddingTop = getPaddingByDirection({
    xs: pt1,
    sm: pt2,
    nm: pt3,
    lg: pt4,
    xLg: pt5,
    xxLg: pt6,
    xxxLg: pt7,
    theme,
  });
  const paddingBottom = getPaddingByDirection({
    xs: pb1,
    sm: pb2,
    nm: pb3,
    lg: pb4,
    xLg: pb5,
    xxLg: pb6,
    xxxLg: pb7,
    theme,
  });
  return { paddingLeft, paddingRight, paddingTop, paddingBottom };
};