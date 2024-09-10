export enum Colors {
  Black = '#2c2c2c',
  White = '#ffffff',
  Red = '#c25343',
  LightRed = '#ff9791',
  Yellow = '#f5d87d',
  YellowDark = '#856404',
  Orange = '#FF6B00',
  LightOrange = '#fff0e4',
  Green = '#a0da8c',
  DarkGreen = '#5a7e68',
  LightBlue = '#4a79d4',
  LightGrey = '#B8BECD',
  P1 = '#3e4651',
  P2 = '#386d82',
  P3 = '#ccc1b4',
  P4 = '#e5e5e5',
  S1 = '#54402d',
  S2 = '#9fbbc4',
  S3 = '#4d555f',
  S4 = '#71777f',
  N1 = '#58595b',
  N2 = '#696a6b',
  N3 = '#bcbdbd',
  N4 = '#eeeeef',
  N5 = '#f9f9f9',
  N6 = '#ebf0f2',
}

export const AppThemeColorLight = {
  ...Colors,
};

export const AppThemeColorDark = {
  ...Colors,
};

export interface ColorsProps {
  black?: boolean;
  white?: boolean;
  red?: boolean;
  lightRed?: boolean;
  yellow?: boolean;
  yellowDark?: boolean;
  orange?: boolean;
  lightOrange?: boolean;
  green?: boolean;
  darkGreen?: boolean;
  p1?: boolean;
  p2?: boolean;
  p3?: boolean;
  s1?: boolean;
  s2?: boolean;
  s3?: boolean;
  s4?: boolean;
  n1?: boolean;
  n2?: boolean;
  n3?: boolean;
  n4?: boolean;
  n5?: boolean;
  b1?: boolean;
  y1?: boolean;
}

export interface AppThemeOptions {
  info?: boolean;
  success?: boolean;
  warn?: boolean;
  error?: boolean;
  default?: boolean;
  light?: boolean;
}

export interface AppThemeColor {
  bg?: string;
  bgHover?: string;
  text?: string;
  textLight?: string;
  border?: string;
}

export const getThemeColor = ({
  black,
  white,
  red,
  lightRed,
  yellow,
  yellowDark,
  orange,
  lightOrange,
  green,
  darkGreen,
  p1,
  p2,
  p3,
  s1,
  s2,
  s3,
  s4,
  n1,
  n2,
  n3,
  n4,
  n5,
}: ColorsProps) => {
  switch (true) {
    case black:
      return Colors.Black;
    case white:
      return Colors.White;
    case red:
      return Colors.Red;
    case lightRed:
      return Colors.LightRed;
    case yellow:
      return Colors.Yellow;
    case yellowDark:
      return Colors.YellowDark;
    case orange:
      return Colors.Orange;
    case lightOrange:
      return Colors.Orange;
    case green:
      return Colors.Green;
    case darkGreen:
      return Colors.DarkGreen;
    case p1:
      return Colors.P1;
    case p2:
      return Colors.P2;
    case p3:
      return Colors.P3;
    case s1:
      return Colors.S1;
    case s2:
      return Colors.S2;
    case s3:
      return Colors.S3;
    case s4:
      return Colors.S4;
    case n1:
      return Colors.N1;
    case n2:
      return Colors.N2;
    case n3:
      return Colors.N3;
    case n4:
      return Colors.N4;
    case n5:
      return Colors.N5;
    default:
      return Colors.Black;
  }
};

export const getThemeColorByOptions = (
  props?: AppThemeOptions
): AppThemeColor => {
  const { info, success, warn, error, light, default: def } = props || {};

  switch (true) {
    case info:
      return {
        bg: Colors.P2,
        border: Colors.P2,
        text: Colors.White,
      };
    case success:
      return {
        bg: Colors.DarkGreen,
        border: Colors.DarkGreen,
        text: Colors.White,
      };
    case warn:
      return {
        bg: Colors.Yellow,
        border: Colors.Yellow,
        text: Colors.Black,
      };
    case def:
      return {
        bg: Colors.N4,
        border: Colors.N4,
        text: Colors.Black,
      };
    case error:
      return {
        bg: Colors.Red,
        border: Colors.Red,
        text: Colors.White,
      };
    case light:
      return {
        bg: Colors.N5,
        border: Colors.N5,
        text: Colors.Black,
      };
    default:
      return {
        bg: Colors.P2,
        border: Colors.P2,
        text: Colors.White,
      };
  }
};
