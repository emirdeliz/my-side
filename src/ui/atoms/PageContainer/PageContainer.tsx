import React, { ReactNode } from 'react';
import * as S from './PageContainer.style';

interface PageContainerProps {
	children: ReactNode;
}

export const PageContainer = ({ children }: PageContainerProps) => {
	return (
		<S.Container>{children}</S.Container>
	);
};