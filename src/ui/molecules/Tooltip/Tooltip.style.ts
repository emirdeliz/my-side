import { getThemeColorByOptions, AppThemeOptions } from '@theme';
import styled, { css, keyframes } from 'styled-components';
import { TooltipProps } from './Tooltip';

const opacity = (reverse?: boolean) => {
  return keyframes`
    from { opacity: ${reverse ? 1 : 0} }
    to { opacity: ${reverse ? 0 : 1} }
  `;
};

const getArrowRotate = (bottom?: boolean, left?: boolean, right?: boolean) => {
  switch (true) {
    case left:
      return '135deg';
    case bottom:
      return '45deg';
    case right:
      return '315deg';
    default:
      return '225deg';
  }
};

const CONTAINER_MAX_WIDTH = '300px';
const CONTAINER_MAX_HEIGHT = '300px';

export const Container = styled.div<TooltipProps>`
  display: inline-block;
  text-align: center;
  overflow-y: auto;
  max-width: ${CONTAINER_MAX_WIDTH};
  max-height: ${CONTAINER_MAX_HEIGHT};
  animation: ${opacity()} 0.1s;
  font-weight: ${({ theme }) => theme.fontWeight.Regular};
  padding: ${({ theme }) => theme.padding.Sm};
  background-color: ${({ theme, light }) =>
    light ? theme.colors.White : theme.colors.P1};
  border-radius: ${({ theme }) => theme.radius.Xs};
  box-shadow: ${({ theme }) => theme.shadow.Nm};
  color: ${({ theme, light }) =>
    light ? theme.colors.P1 : theme.colors.White};
  border: 1px solid
    ${({ light, theme, info, success, warn, error }) =>
      light
        ? getThemeColorByOptions({ info, success, warn, error }).border
        : theme.colors.P1};
`;

interface ArrowProps extends AppThemeOptions {
  top?: boolean;
  bottom?: boolean;
  left?: boolean;
  right?: boolean;
  arrowTopPosition: number;
  arrowLeftPosition: number;
}

export const Arrow = styled.div<ArrowProps>`
  position: relative;
  animation: ${opacity()} 0.1s;
  top: ${({ arrowTopPosition }) => arrowTopPosition}px;
  left: ${({ arrowLeftPosition }) => arrowLeftPosition || 5}px;
  width: 10px;
  height: 10px;
  border-color: transparent;
  border-style: solid;
  border-width: 1px;
  border-top-color: ${({ light, theme, info, success, warn, error }) =>
    light
      ? getThemeColorByOptions({ info, success, warn, error }).border
      : theme.colors.P1};
  border-left-color: ${({ light, theme, info, success, warn, error }) =>
    light
      ? getThemeColorByOptions({ info, success, warn, error }).border
      : theme.colors.P1};
  background-color: ${({ light, theme }) =>
    light ? theme.colors.White : theme.colors.P1};
  border-radius: 3px;
  border-top-right-radius: 0;
  border-bottom-left-radius: 0;
  ${({ bottom, left, right }) => {
    return css`
      transform: rotate(${getArrowRotate(bottom, left, right)});
    `;
  }}
`;

export const Content = styled.div``;
