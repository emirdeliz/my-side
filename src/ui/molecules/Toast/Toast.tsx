import React, { memo, ReactNode } from 'react';
import { AppThemeOptions } from '@theme';
import { Flex, Link, ProgressBar, Title } from '@atoms';
import {
  Context as ToastContext,
  Provider as ToastProvider,
} from './context/ToastContext';
import { useToast } from './hooks/useToast';
import * as S from './Toast.style';

export const TOAST_DEFAULT_DISMISS_SECONDS = 7;

export interface ToastProps {
  dismissTime?: number;
  topRight?: boolean;
  topLeft?: boolean;
  bottomLeft?: boolean;
  topOffset?: number;
}

export interface ToastItemProps extends AppThemeOptions {
  title?: string;
  message?: string;
  id?: string;
  icon?: ReactNode;
}

export const Toast = memo(
  ({ topRight, topLeft, bottomLeft, topOffset }: ToastProps) => {
    const { toastList, removeToast } = useToast();
    const props = { topRight, topLeft, bottomLeft, topOffset };

    return (
      <S.Container {...props}>
        {toastList.map(({ title, message, ...toast }) => (
          <Flex mb2 key={toast.id}>
            <S.Toast {...toast} data-testid="toast">
              <S.Close>
                <Link.Icon
                  close
                  white
                  xs
                  onClick={() => removeToast(toast.id)}
                />
              </S.Close>
              {toast.icon}
              <Flex>
                {title && <Title fs2>{title}</Title>}
                {message && <Title fs1>{message}</Title>}
              </Flex>
              <S.ProgressBar>
                <ProgressBar duration={TOAST_DEFAULT_DISMISS_SECONDS} />
              </S.ProgressBar>
            </S.Toast>
          </Flex>
        ))}
      </S.Container>
    );
  }
);

export { ToastContext, ToastProvider, useToast };
