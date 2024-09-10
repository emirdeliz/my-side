import {
  centerAbsolute,
  topLeftAbsolute,
  topRightAbsolute,
} from '@theme';
import styled, { DefaultTheme, css } from 'styled-components';
import { ModalProps } from './Modal';

const ContainerModifier = {
  maxWidth: (maxHeight: string) => css`
    max-width: ${maxHeight};
  `,
  maxHeight: (maxHeight: string) => css`
    max-height: ${maxHeight};
  `,
  transparent: (theme: DefaultTheme) => css`
    box-shadow: ${theme.shadow.Nm};
    background-color: ${theme.colors.White};
  `,
  ignorePadding: (theme: DefaultTheme, confirm?: boolean) => css`
    padding: ${() => {
      return confirm ? `${theme.padding.XLg} ${theme.padding.XLg} 0` : theme.padding.XLg;
    }}
  ;`,
  ignoreRadius: () => css`
    border-radius: 0;
  `,
  height: (height: string) => css`
    height: ${height};
  `,
};

export const Modal = styled.div<ModalProps>`
  max-width: ${({ maxWidth }) => maxWidth || '100%'};
  max-height: ${({ maxHeight }) => maxHeight || '100%'};
  height: ${({ height }) => height || 'auto'};
  z-index: ${({ theme, zIndex }) => zIndex || theme.zIndex.Sm};
  border-radius: ${({ theme }) => theme.radius.Nm};
  ${({ transparent, theme }) => !transparent && ContainerModifier.transparent(theme)}
  ${({ ignoreRadius }) => ignoreRadius && ContainerModifier.ignoreRadius()}
  ${centerAbsolute};
`;

export const Content = styled.div<ModalProps>`
  ${({
    theme,
    ignorePadding,
    maxWidth,
    maxHeight,
    height,
    confirm
  }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    ${!ignorePadding && ContainerModifier.ignorePadding(theme, confirm)}
    ${maxWidth && ContainerModifier.maxWidth(maxWidth)}
    ${maxHeight && ContainerModifier.maxHeight(maxHeight)}
    ${height && ContainerModifier.height(height)}
  `}
`;

export const ButtonContainer =  styled.div`
  padding: ${({ theme }) => `${theme.padding.Sm} ${theme.padding.XLg} ${theme.padding.Lg}`};
`;

export const Close = styled.div`
  ${topRightAbsolute};
  z-index: ${({ theme }) => theme.zIndex.Sm};
`;

export const HeaderLeftIcon = styled.div`
  ${topLeftAbsolute};
`;
