import { DefaultTheme } from 'styled-components';
import { AppThemeColorDark } from './colors';
import { Display } from './display';
import { FontSize } from './font-size';
import { FontWeight } from './font-weight';
import { LineHeight } from './line-height';
import { Opacity } from './opacity';
import { Radius } from './radius';
import { Padding } from './padding';
import { Margin } from './margin';
import { Shadow } from './shadow';
import { ZIndex } from './z-index';

export const AppTheme = {
  colors: AppThemeColorDark,
  fontSize: FontSize,
  fontWeight: FontWeight,
  radius: Radius,
  opacity: Opacity,
  lineHeight: LineHeight,
  display: Display,
  zIndex: ZIndex,
  margin: Margin,
  padding: Padding,
  shadow: Shadow,
} as DefaultTheme;

export * from './colors';
export * from './display';
export * from './font-size';
export * from './font-weight';
export * from './mixins';
export * from './line-height';
export * from './margin';
export * from './opacity';
export * from './padding';
export * from './radius';
export * from './shadow';
export * from './z-index';
export * from './size';
export * from './theme';
