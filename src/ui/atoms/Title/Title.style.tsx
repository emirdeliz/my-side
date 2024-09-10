import {
  buildMargin,
  getFontSize,
  getLineHeight,
  getThemeColor,
  getDisplay,
} from '@theme';
import styled from 'styled-components';
import { TitleProps } from './Title';

export const Title = styled.span<TitleProps>`
  ${({
    capitalize,
    uppercase,
    semibold,
    cursorPointer,
    noWrap,
    theme,
    error,
    ...props
  }) => `
    vertical-align: middle;
    font-size: ${getFontSize({ theme, ...props })};
    text-transform: ${
      capitalize ? 'capitalize' : uppercase ? 'uppercase' : 'none'
    };
    font-weight: ${semibold ? theme.fontWeight.Semibold : 'normal'};
    cursor: ${cursorPointer ? 'pointer' : 'auto'};
    white-space: ${noWrap ? 'nowrap' : 'initial'};
    color: ${error ? theme.colors.Red : getThemeColor(props)};
  `}
  ${({ center, justify }) =>
    center || justify
      ? `
    width: 100%;
    text-align: ${center ? 'center' : 'justify'};
  `
      : ''}
  ${({ ellipsis }) =>
    ellipsis
      ? `
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `
      : ''};
  line-height: ${(props) => getLineHeight(props)};
  display: ${(props) => getDisplay(props)};
  ${buildMargin()}
`;
