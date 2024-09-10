import 'styled-components';
import {
  Colors,
  Display,
  FontSize,
  FontWeight,
  LineHeight,
  Margin,
  Opacity,
  Padding,
  Radius,
  Shadow,
  ZIndex,
} from '@theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof Colors;
    display: typeof Display;
    fontSize: typeof FontSize;
    fontWeight: typeof FontWeight;
    lineHeight: typeof LineHeight;
    margin: typeof Margin;
    opacity: typeof Opacity;
    padding: typeof Padding;
    radius: typeof Radius;
    shadow: typeof Shadow;
    zIndex: typeof ZIndex;
  }
}
