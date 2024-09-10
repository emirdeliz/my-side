import { DefaultTheme } from 'styled-components';
import { Colors } from './colors';
import { Display } from './display';
import { FontSize } from './font-size';
import { FontWeight } from './font-weight';
import { LineHeight } from './line-height';
import { Margin } from './margin';
import { Opacity } from './opacity';
import { Padding } from './padding';
import { Radius } from './radius';
import { Shadow } from './shadow';
import { ZIndex } from './z-index';

export const theme = {
  zIndex: ZIndex,
  colors: Colors,
  display: Display,
  fontSize: FontSize,
  fontWeight: FontWeight,
  lineHeight: LineHeight,
  margin: Margin,
  opacity: Opacity,
  padding: Padding,
  radius: Radius,
  shadow: Shadow,
} as DefaultTheme;
