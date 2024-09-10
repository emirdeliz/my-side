import React from 'react';
import * as S from './Skeleton.style';

export interface SkeletonProps {
  rounded?: boolean;
  width: string;
  height: string;
}

export const Skeleton = (props: SkeletonProps) => {
  return <S.Skeleton data-testid="skeleton" {...props} />;
};

Skeleton.Rounded = (props: SkeletonProps) => <Skeleton {...props} rounded />;
