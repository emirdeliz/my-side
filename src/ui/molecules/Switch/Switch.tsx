import { useMemo } from 'react';
import * as S from './Switch.style';

export interface SwitchProps {
  selected?: boolean;
  id?: string | number;
	onChange?: (selected: boolean) => void;
}

export const Switch = ({ selected, onChange, ...props }: SwitchProps) => {
	const id = useMemo(() => String(props.id), [props.id]);
  return (
    <S.Switch
      role='switch'
			id={id}
      aria-checked={selected}
			onClick={() => onChange && onChange(!selected)}
    >
      <S.Slider selected={selected}>
        <S.Circle selected={selected} />
      </S.Slider>
    </S.Switch>
  );
};
