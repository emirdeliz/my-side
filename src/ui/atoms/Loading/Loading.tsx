import React from 'react';
import { ThemeConsumer } from 'styled-components';
import { Overlay } from '..';
import {
  Context as LoadingContext,
  Provider as LoadingProvider,
} from './context/LoadingContext';
import { useLoading } from './hooks/useLoading';
import * as S from './Loading.style';

export interface LoadingProps {
  circle?: boolean;
  center?: boolean;
  global?: boolean;
}

export const Loading = ({ circle, global, center }: LoadingProps) => {
  const { hasLoadingActive } = useLoading();
  return (
    <S.Container center={center || global}>
      {circle && (
        <S.SvgCircle>
          <S.Circle />
          <S.Circle increase />
        </S.SvgCircle>
      )}
      {global && hasLoadingActive && (
        <>
          <ThemeConsumer>
            {(theme) => <Overlay visible zIndex={theme.zIndex.Nm} />}
          </ThemeConsumer>
          <Loading.GlobalSimple />
        </>
      )}
    </S.Container>
  );
};

Loading.Global = (props: LoadingProps) => <Loading {...props} global />;

Loading.Circle = (props: LoadingProps) => <Loading {...props} circle />;

Loading.GlobalSimple = () => (
  <S.SvgFull>
    {[20, 30, 40].map((item, index) => {
      return (
        <S.RectFull x={item} key={item}>
          <animateTransform
            attributeType="xml"
            attributeName="transform"
            type="translate"
            values="0 0; 0 20; 0 0"
            begin={`0.${index * 2}s`}
            dur="0.6s"
            repeatCount="indefinite"
          />
        </S.RectFull>
      );
    })}
  </S.SvgFull>
);

export { LoadingContext, LoadingProvider, useLoading };
