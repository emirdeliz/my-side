import React, { ReactNode } from 'react';
import { Flex, Dot, DotProps, Icon, Title } from '@atoms';
import * as S from './StepProgressBar.style';

interface StepProgressBarItemProps extends DotProps {
  title?: ReactNode;
  checked?: boolean;
}
export interface StepProgressBarProps {
  steps: Array<StepProgressBarItemProps>;
  currentIndex?: number;
  outlined?: boolean;
}

const renderDot = (
  key: number,
  { title, checked: checkedFromParm }: StepProgressBarItemProps,
  currentIndex?: number,
  outlined?: boolean
) => {
  const isCurrent = key === currentIndex;
  const checked = checkedFromParm ?? (currentIndex || 0) > key;
  return (
    <S.Item key={key}>
      <S.Dot>
        <Dot
          xss
          data-testid={`${key}-step-dot`}
          outlined={outlined}
          sm={isCurrent && !outlined}
          p3={!isCurrent}
          white={isCurrent}
        >
          {outlined && <Dot xss p3={!isCurrent} white={isCurrent} />}
        </Dot>
      </S.Dot>
      {title && (
        <Flex.Row
          alignCenter
          justifyCenter
          ml1
          data-testid={`${key}-step-progress`}
        >
          <Title noWrap p3={!isCurrent} white={isCurrent}>
            {title}
          </Title>
          {checked && (
            <S.Icon>
              <Icon.Check xs p3={!isCurrent} white={isCurrent} />
            </S.Icon>
          )}
        </Flex.Row>
      )}
    </S.Item>
  );
};

const DotDelimiter = () => (
  <S.Item>
    <S.Dot>
      <Dot xss p3 />
    </S.Dot>
  </S.Item>
);

export const StepProgressBar = ({
  steps,
  currentIndex,
  outlined,
}: StepProgressBarProps) => {
  return (
    <S.Container style={{ height: steps.length * 70 }}>
      <S.DotContainer>
        <DotDelimiter />
        {steps.map((step, index) =>
          renderDot(index, step, currentIndex, outlined)
        )}
        <DotDelimiter />
      </S.DotContainer>
    </S.Container>
  );
};
