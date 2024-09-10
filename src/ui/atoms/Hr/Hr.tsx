import * as S from './Hr.style';

export interface HrProps {
	vertical?: boolean;
}

export const Hr = (props: HrProps) => {
	return <S.Hr {...props}></S.Hr>;
};