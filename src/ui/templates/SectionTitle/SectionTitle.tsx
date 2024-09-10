import { Title } from '@atoms';
import { ReactNode } from 'react';

interface SectionTitleProps {
  children: ReactNode;
}

export const SectionTitle = ({ children }: SectionTitleProps) => {
  return (
    <Title mb3 fs6 lh6 semibold>
      {children}
    </Title>
  );
};
