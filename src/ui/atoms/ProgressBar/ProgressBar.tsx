import React from 'react';
import * as S from './ProgressBar.style';

export interface ProgressBarProps {
  duration?: number 
}

export const ProgressBar = (props: ProgressBarProps) => {
  return (
    <S.Container>
      <S.ProgressBar {...props} />
    </S.Container>
  );
};
