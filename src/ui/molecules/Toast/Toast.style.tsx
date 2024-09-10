import { getThemeColorByOptions, AppThemeOptions } from '@theme';
import styled from 'styled-components';
import { Title } from '../../atoms/Title/Title.style';

const POSITION_BASE = 12;
const TOAST_WIDTH = '300px';

interface ToastPositionProps {
  topRight?: boolean;
  topLeft?: boolean;
  bottomLeft?: boolean;
  topOffset?: number;
}

interface ToastAnimationProps {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}

const buildAnimation = ({ top, bottom, left, right }: ToastAnimationProps) => {
  return `
    transition: transform .6s ease-in-out;
    animation: toast-in-${right ? 'right' : 'left'} .7s;
    ${top ? `top: ${top}px;` : ''}
    ${bottom ? `bottom: ${bottom}px;` : ''}
    ${left ? `left: ${left}px;` : ''}
    ${right ? `right: ${right}px;` : ''}
  `;
};

export const Container = styled.div`
  position: fixed;
  z-index: ${({ theme }) => theme.zIndex.Nm};
  ${({ topRight, topLeft, bottomLeft, topOffset }: ToastPositionProps) => {
    const top = POSITION_BASE + (topOffset || 0);
    if (topRight) {
      return buildAnimation({ top, right: POSITION_BASE });
    }

    if (topLeft) {
      return buildAnimation({ top, left: POSITION_BASE });
    }

    if (bottomLeft) {
      return buildAnimation({ bottom: POSITION_BASE, left: POSITION_BASE });
    }
    return buildAnimation({ bottom: POSITION_BASE, right: POSITION_BASE });
  }}
`;

export const Close = styled.div`
  position: absolute;
  top: 3px;
  right: 5px;
`;

export const ProgressBar = styled.div`
  position: absolute;
  bottom: -1px;
  left: -1px;
  right: -1px;
`;

export const Toast = styled.div<AppThemeOptions>`
  display: flex;
  flex-direction: column;
  position: relative;
  width: ${TOAST_WIDTH};
  padding: ${({ theme }) => `${theme.padding.Nm} ${theme.padding.Xs}`};
  border-radius: ${({ theme }) => theme.radius.Xs};
  ${(props) => {
    const { bg, text } = getThemeColorByOptions(props);
    return `
      border: solid 1px ${bg};
      background-color: ${bg};
      ${Title} {
        color: ${text};
      }
    `;
  }}
`;
