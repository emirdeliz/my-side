import { centerAbsolute, fullAbsolute } from '@theme';
import styled, { css, keyframes } from 'styled-components';

interface PathProps {
  increase?: boolean;
}

interface ContainerProps {
  center?: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${({ theme }) => theme.zIndex.Nm};
  ${({ center }) => (center ? centerAbsolute : '')};
`;

const SVG_CIRCLE_SIZE = '50px';

export const SvgCircle = styled.svg.attrs({
  viewBox: '0 0 100 100',
  xmlns: 'http://www.w3.org/2000/svg',
})`
  width: ${SVG_CIRCLE_SIZE};
  height: ${SVG_CIRCLE_SIZE};
  display: flex;
  align-content: space-around;
  justify-content: center;
  position: relative;
  margin: 5px;
`;

export const SvgFull = styled.svg.attrs({
  viewBox: '0 0 100 100',
  enableBackground: 'new 0 0 0 0',
  x: '0px',
  y: '0px',
})`
  width: 100px;
  height: 100px;
`;

export const RectFull = styled.rect.attrs({
  y: 20,
})`
  width: 4px;
  height: 10px;
  fill: #fff;
`;

const fillAnimationFrame = keyframes`
	0% {
		stroke-dasharray: 40 242.6;
		stroke-dashoffset: 0;
	}

	50% {
		stroke-dasharray: 141.3;
		stroke-dashoffset: 141.3;
	}

	100% {
		stroke-dasharray: 40 242.6;
		stroke-dashoffset: 282.6;
	}
`;
const fillAnimation = () =>
  css`
    ${fillAnimationFrame} 1s cubic-bezier(1,1,1,1) 0s infinite
  `;

const CIRCLE_CX = 50;
const CIRCLE_CY = 50;
const CIRCLE_R = 44;
const CIRCLE_STROKE_DASHARRAY = 242.6;
const CIRCLE_STROKE_WIDTH = '12px';

export const Circle = styled.circle.attrs({
  cx: CIRCLE_CX,
  cy: CIRCLE_CY,
  r: CIRCLE_R,
})<PathProps>`
	fill: none;
	stroke: ${({ increase, theme }) =>
    increase ? theme.colors.P2 : theme.colors.N4};
	${({ increase }) =>
    increase
      ? `stroke-dasharray: ${CIRCLE_STROKE_DASHARRAY};`
      : `stroke-width: ${CIRCLE_STROKE_WIDTH};`}};
	${fullAbsolute};
	animation: 	${({ increase }) => (increase ? fillAnimation : '')};
  stroke-width: ${CIRCLE_STROKE_WIDTH};

`;
