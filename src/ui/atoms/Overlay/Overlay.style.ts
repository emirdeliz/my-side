import styled from 'styled-components';
import { fullHorizontalAbsolute, fullVerticalAbsolute } from '@theme';
import { OverlayProps } from '..';

export const Overlay = styled.div<OverlayProps>`
  ${fullVerticalAbsolute};
  ${fullHorizontalAbsolute};
  z-index: ${({ theme, zIndex }) => zIndex || theme.zIndex.Xs};
  opacity: ${({ theme }) => theme.opacity.Overlay};
  background-color: ${({ theme }) => theme.colors.Black};
`;
