import styled, { css } from 'styled-components';
import { buildMargin, getThemeColorByOptions, Padding, Size } from '@theme';
import { ButtonProps } from './Button';

const getSize = ({ sm, xs }: Size): Array<Padding> => {
  if (sm) {
    return [Padding.Xs, Padding.Xs];
  }
  if (xs) {
    return [Padding.Xss, Padding.Xss];
  }
  return [Padding.Sm, Padding.Nm];
};

export const Button = styled.button<ButtonProps>`
  ${({ theme, rounded, clickable, xs, sm, maxWidth, wFull }) => css`
    width: 100%;
    max-width: ${maxWidth || '100%'};
    text-transform: uppercase;
    box-sizing: border-box;
    width: ${wFull ? '100%' : 'auto'};
    font-size: ${theme.fontSize.Xs};
    font-weight: ${({ theme }) => theme.fontWeight.Semibold};
    padding: ${getSize({ xs, sm }).join(' ')};
    opacity: ${clickable ? 1 : theme.opacity.Disable};
    cursor: ${clickable ? 'pointer' : 'not-allowed'};
    border-radius: ${({ theme }) =>
      rounded ? theme.radius.Nm : theme.radius.Sm};
  `}

  ${({
    info,
    success,
    warn,
    error,
    default: def,
    outlined,
    link,
    theme,
    light,
  }) => {
    if (link) {
      return;
    }

    const { bg, text, border } = getThemeColorByOptions({
      info,
      success,
      warn,
      error,
      default: def,
      light,
    });
    return !outlined
      ? `border: solid 1px ${bg};background-color: ${bg};color: ${text};`
      : `border: solid 1px ${bg};background-color: ${theme.colors.White};color: ${bg};`;
  }}
  ${buildMargin()}
`;
