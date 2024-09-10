import { DefaultTheme } from 'styled-components';

export enum FontSize {
  Xss = '10px',
  Xs = '12px',
  Sm = '14px',
  Nm = '16px',
  Lg = '20px',
  XLg = '28px',
  XXLg = '36px',
}

export interface FontSizeProps {
  fs0?: boolean;
  fs1?: boolean;
  fs2?: boolean;
  fs3?: boolean;
  fs4?: boolean;
  fs5?: boolean;
  fs6?: boolean;
}

export const getFontSize = ({
  fs0,
  fs1,
  fs2,
  fs3,
  fs4,
  fs5,
  fs6,
  theme,
}: FontSizeProps & {
  theme: DefaultTheme;
}) => {
  switch (true) {
    case fs0:
      return theme.fontSize.Xss;
    case fs1:
      return theme.fontSize.Xs;
    case fs2:
      return theme.fontSize.Sm;
    case fs3:
      return theme.fontSize.Nm;
    case fs4:
      return theme.fontSize.Lg;
    case fs5:
      return theme.fontSize.XLg;
    case fs6:
      return theme.fontSize.XXLg;
  }
  return theme.fontSize.Nm;
};
