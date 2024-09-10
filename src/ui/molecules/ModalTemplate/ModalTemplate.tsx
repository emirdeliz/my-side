import React, { MouseEvent, ReactNode } from 'react';
import { Button, Flex, Title } from '@atoms';
import * as S from './ModalTemplate.style';

export interface ModalTemplateProps {
  title: string;
  subTitle: string;
  allowButton: boolean;
  labelButton: string;
  children: ReactNode;
  onClickButton: (value: unknown) => void;
}

export const ModalTemplate = ({
  title,
  subTitle,
  children,
  allowButton,
  labelButton,
  onClickButton,
}: ModalTemplateProps) => {
  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    if (allowButton) {
      onClickButton(e);
    }
  };
  return (
    <S.Body onSubmit={(e) => e.preventDefault()}>
      <Title center lh4 mb2>
        {title}
      </Title>
      <Title center fs1 mb2>
        {subTitle}
      </Title>
      {children}
      <Flex mt2>
        <Button wFull mt2 clickable={allowButton} onClick={handleSubmit}>
          {labelButton}
        </Button>
      </Flex>
    </S.Body>
  );
};
