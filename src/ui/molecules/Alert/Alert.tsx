import React, { memo, ReactNode } from 'react';
import { Icon, IconProps, Title } from '../../atoms';
import * as S from './Alert.style';

interface AlertBaseProps {
  children: ReactNode;
}

export interface AlertProps extends AlertBaseProps {
  before?: ReactNode;
}

const AlertComponent = memo(({ before, children }: AlertProps) => {
  return (
    <S.Alert>
      {before}
      <Title ml3 p2 fs2>
        {children}
      </Title>
    </S.Alert>
  );
});

export const Alert = (props: AlertProps) => <AlertComponent {...props} />;
Alert.Info = memo(({ children }: AlertBaseProps & IconProps) => (
  <AlertComponent before={<Icon.InfoCircle p2 nm />}>{children}</AlertComponent>
));
