import { Title } from '@atoms';
import { ReactNode } from 'react';

interface SectionSubTitleProps {
  children: ReactNode;
}

export const SectionSubTitle = ({ children }: SectionSubTitleProps) => {
  return (
    <Title fs2 mb3>
      {children}
    </Title>
  );
};
