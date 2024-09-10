import { DefaultTheme } from 'styled-components';

export enum Margin {
  Xs = '4px',
  Sm = '8px',
  Nm = '16px',
  Lg = '24px',
  XLg = '32px',
  XXLg = '48px',
  XXXLg = '72px',
}

export interface MarginProps {
  ml1?: boolean;
  ml2?: boolean;
  ml3?: boolean;
  ml4?: boolean;
  ml5?: boolean;
  ml6?: boolean;
  ml7?: boolean;
  mr1?: boolean;
  mr2?: boolean;
  mr3?: boolean;
  mr4?: boolean;
  mr5?: boolean;
  mr6?: boolean;
  mr7?: boolean;
  mt1?: boolean;
  mt2?: boolean;
  mt3?: boolean;
  mt4?: boolean;
  mt5?: boolean;
  mt6?: boolean;
  mt7?: boolean;
  mb1?: boolean;
  mb2?: boolean;
  mb3?: boolean;
  mb4?: boolean;
  mb5?: boolean;
  mb6?: boolean;
  mb7?: boolean;
}

interface MarginByDirectionProps {
  xs?: boolean;
  sm?: boolean;
  nm?: boolean;
  lg?: boolean;
  xLg?: boolean;
  xxLg?: boolean;
  xxxLg?: boolean;
}

export const getMarginByDirection = ({
  xs,
  sm,
  nm,
  lg,
  xLg,
  xxLg,
  xxxLg,
  theme,
}: MarginByDirectionProps & {
  theme: DefaultTheme;
}) => {
  switch (true) {
    case xs:
      return theme.margin.Xs;
    case sm:
      return theme.margin.Sm;
    case nm:
      return theme.margin.Nm;
    case lg:
      return theme.margin.Lg;
    case xLg:
      return theme.margin.XLg;
    case xxLg:
      return theme.margin.XXLg;
    case xxxLg:
      return theme.margin.XXXLg;
    default:
      return 0;
  }
};

export const getMargin = ({
  ml1,
  ml2,
  ml3,
  ml4,
  ml5,
  ml6,
  ml7,
  mr1,
  mr2,
  mr3,
  mr4,
  mr5,
  mr6,
  mr7,
  mt1,
  mt2,
  mt3,
  mt4,
  mt5,
  mt6,
  mt7,
  mb1,
  mb2,
  mb3,
  mb4,
  mb5,
  mb6,
  mb7,
  theme,
}: MarginProps & {
  theme: DefaultTheme;
}) => {
  const marginLeft = getMarginByDirection({
    xs: ml1,
    sm: ml2,
    nm: ml3,
    lg: ml4,
    xLg: ml5,
    xxLg: ml6,
    xxxLg: ml7,
    theme,
  });
  const marginRight = getMarginByDirection({
    xs: mr1,
    sm: mr2,
    nm: mr3,
    lg: mr4,
    xLg: mr5,
    xxLg: mr6,
    xxxLg: mr7,
    theme,
  });
  const marginTop = getMarginByDirection({
    xs: mt1,
    sm: mt2,
    nm: mt3,
    lg: mt4,
    xLg: mt5,
    xxLg: mt6,
    xxxLg: mt7,
    theme,
  });
  const marginBottom = getMarginByDirection({
    xs: mb1,
    sm: mb2,
    nm: mb3,
    lg: mb4,
    xLg: mb5,
    xxLg: mb6,
    xxxLg: mb7,
    theme,
  });
  return { marginLeft, marginRight, marginTop, marginBottom };
};
