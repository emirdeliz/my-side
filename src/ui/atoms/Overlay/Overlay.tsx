import React, { ReactNode } from 'react';
import { ZIndex } from '@theme';
import { createPortal } from 'react-dom';
import * as S from './Overlay.style';

export interface OverlayProps {
  children?: ReactNode;
  visible?: boolean;
  maxWidth?: string;
  maxHeight?: string;
  zIndex?: ZIndex;
  onClick?: () => void;
}

export const Overlay = ({ children, visible, ...props }: OverlayProps) => {
  return visible && globalThis.document?.body
    ? createPortal(<S.Overlay {...props}>{children}</S.Overlay>, globalThis.document?.body)
    : null;
};
