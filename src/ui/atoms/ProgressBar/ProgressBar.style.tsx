import styled, { keyframes } from 'styled-components';
import { ProgressBarProps } from '..';

const PROGRESS_BAR_HEIGHT = '5px';

const ProgressBarAnimation = keyframes`
  0% {
    transform: scaleX(1);
  }
  100% {
    transform: scaleX(0);
  }
`;

export const ProgressBar = styled.div<ProgressBarProps>`
  opacity: 1;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 0.7;
  transform-origin: left;
  height: ${PROGRESS_BAR_HEIGHT};
  background-color: ${({ theme}) => theme.colors.White};

  animation-name: ${ProgressBarAnimation};
  animation-duration: ${({ duration }) => duration || 3}s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  animation-delay: 1s;
  animation-play-state: running;
`;

export const Container = styled.div`
  width: 100%;
  min-width: 200px;
  height: ${PROGRESS_BAR_HEIGHT};
  position: relative;
`;
