import { Button, Fade, Flex, Link, Overlay } from '@atoms';
import { ZIndex } from '@theme';
import React, { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import * as S from './Modal.style';

export interface ModalProps {
  children?: ReactNode;
  visible?: boolean;
  confirm?: boolean;
  confirmButtonLabel?: ReactNode;
  overlay?: boolean;
  height?: string;
  maxWidth?: string;
  maxHeight?: string;
  transparent?: boolean;
  ignorePadding?: boolean;
  ignoreRadius?: boolean;
  headerLeftIcon?: ReactNode;
  zIndex?: ZIndex;
  enableButton?: boolean;
  onClose?: () => void;
  onConfirm?: () => void;
}

export const Modal = ({
  children,
  visible,
  confirm,
  confirmButtonLabel = 'Confirmar',
  overlay,
  transparent,
  headerLeftIcon,
  enableButton = true,
  onClose,
  onConfirm,
  ...props
}: ModalProps) => {
  if (!visible) {
    return null;
  }

  const content =globalThis.document?.body ? createPortal(
    <S.Modal {...props} transparent={transparent}>
      <Fade>
        <S.Content {...props} confirm={confirm}>
          {headerLeftIcon && (
            <S.HeaderLeftIcon>{headerLeftIcon}</S.HeaderLeftIcon>
          )}
          {onClose && (
            <S.Close>
              <Link.Icon
                sm
                close
                black={!transparent}
                white={transparent}
                data-testid="icon-close-modal"
                onClick={onClose}
              />
            </S.Close>
          )}
          {children}
        </S.Content>
        {confirm && (
          <S.ButtonContainer>
            <Flex alignCenter>
              <Button nm onClick={onConfirm} clickable={enableButton}>
                {confirmButtonLabel}
              </Button>
            </Flex>
          </S.ButtonContainer>
        )}
      </Fade>
    </S.Modal>,
    globalThis.document?.body
  ) : null;

  return overlay ? <Overlay visible>{content}</Overlay> : content;
};

Modal.Overlay = (props: ModalProps) => <Modal {...props} overlay />;

Modal.Confirm = (props: ModalProps) => <Modal {...props} confirm />;
