import styled, { css } from 'styled-components';
import { getThemeColor } from '@theme';
import { IconProps } from './Icon';

const animation = css<IconProps>`
  transition: transform ease-in-out 300ms;
  ${({ rotate90 }) =>
    rotate90
      ? css`
          transform: rotate(90deg);
        `
      : css`
          transform: rotate(0deg);
        `}
`;

export enum FontSize {
  Xs = '12px',
  Sm = '20px',
  Nm = '30px',
}

export enum FontSizeCircled {
  Xs = '6px',
  Sm = '10px',
  Nm = '14px',
  XXXLg = '150px',
}

const getFontSize = ({ xs, sm, circled, xxxLg }: IconProps) => {
  if (circled) {
    switch (true) {
      case xs:
        return FontSizeCircled.Xs;
      case sm:
        return FontSizeCircled.Sm;
      default:
        return FontSizeCircled.Nm;
    }
  }

  switch (true) {
    case xs:
      return FontSize.Xs;
    case sm:
      return FontSize.Sm;
    case xxxLg:
      return FontSizeCircled.XXXLg;
    default:
      return FontSize.Nm;
  }
};

export enum Size {
  Xs = '20px',
  Sm = '25px',
  Nm = '32px',
  XXXLg = '150px',
}

const getSize = ({ xs, sm, xxxLg }: IconProps) => {
  switch (true) {
    case xs:
      return Size.Xs;
    case sm:
      return Size.Sm;
    case xxxLg:
      return Size.XXXLg;
    default:
      return Size.Nm;
  }
};

export const Icon = styled.i<IconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: ${(props) => getSize(props)};
  height: ${({ circled, ...props }) => (circled ? getSize(props) : 'auto')};
  ${({ bordered, circled, theme, bgColor }) => {
    return `
      ${
        bgColor
          ? `
        background-color: ${bgColor};
      `
          : ''
      };
      ${bordered ? `border: 2px solid ${theme.colors.N1};` : ''};
      ${
        circled
          ? `
        border-radius: 50%;
        border: 2px solid ${bgColor || theme.colors.P3};
      `
          : ''
      };  
    `;
  }};
  color: ${(props) => getThemeColor(props)};
  &:before {
    transition: transform ease-in-out 300ms;
    line-height: 1.6em;
    animation: ${animation};
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    ${(props) => {
      const fontSize = getFontSize(props);
      return `
        font-size: ${fontSize};
        line-height: ${fontSize};
      `;
    }}
  }
`;
