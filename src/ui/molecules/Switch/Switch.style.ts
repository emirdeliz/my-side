import { centerVerticalAbsolute } from '@theme';
import styled from 'styled-components';
import { SwitchProps } from '..';

export const duration = 300;

const SWITCH_WIDTH = '50px';
const SWITCH_HEIGHT = '23px';

export const Switch = styled.div`
  width: ${SWITCH_WIDTH};
  height: ${SWITCH_HEIGHT};
`;

export const Slider = styled.div<SwitchProps>`
  position: relative;
  cursor: pointer;
  width: 100%;
  height: 100%;
  transition: 0.5s;
  border-radius: ${({ theme }) => theme.radius.Nm};
  background-color: ${({ theme, selected }) =>
    selected ? theme.colors.P2 : theme.colors.N3};
`;

const SWITCH_CIRCLE_WIDTH = '17px';
const SWITCH_CIRCLE_HEIGHT = '17px';
const SWITCH_CIRCLE_LEFT = '3px';

export const Circle = styled.div<SwitchProps>`
  transition: 0.2s;
  left: ${SWITCH_CIRCLE_LEFT};
  width: ${SWITCH_CIRCLE_WIDTH};
  height: ${SWITCH_CIRCLE_HEIGHT};
  ${centerVerticalAbsolute};
  background-color: ${({ theme }) => theme.colors.White};
  border-radius: ${({ theme }) => theme.radius.Full};
  box-shadow: ${({ theme }) => theme.shadow.Nm};
  ${({ selected }) =>
    selected
      ? `
    transform: translate(calc((${SWITCH_WIDTH} / 2) + ${SWITCH_CIRCLE_LEFT} - 1px), -50%);
  `
      : ''}
`;
