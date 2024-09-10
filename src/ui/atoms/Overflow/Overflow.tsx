import { Flex } from '@atoms';
import React, { ReactNode } from 'react';
import * as S from './Overflow.style';

export interface OverflowProps {
  children: ReactNode;
}

export const Overflow = ({ children }: OverflowProps) => {
  return (
    <Flex wFull hFull>
      <S.Container>
        <S.Overflow>{children}</S.Overflow>
      </S.Container>
    </Flex>
  );
};
