import styled, { keyframes } from 'styled-components';
import { SkeletonProps } from '@atoms';

const animation = keyframes`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0; 
  }
`;

export const Skeleton = styled.div<SkeletonProps>`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  border-radius: ${({ rounded }) => (rounded ? '100%' : '')};
  animation-duration: 1.2s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: ${animation};
  animation-timing-function: linear;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.N5} 10%,
    ${({ theme }) => theme.colors.N3} 18%,
    ${({ theme }) => theme.colors.N5} 33%
  );
  background-size: 800px 100%;
  position: relative;
`;
