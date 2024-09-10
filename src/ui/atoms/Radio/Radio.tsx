import { FocusEvent, ReactNode } from 'react';
import * as S from './Radio.style';

export interface RadioProps {
  id?: string;
  dataTestId?: string;
  clickable?: boolean;
  checked?: boolean;
  children?: ReactNode;
  onChange?: (value: boolean) => void;
  onBlur?: (e: FocusEvent<HTMLDivElement>) => void;
}

export const Radio = ({
  dataTestId = 'input-atom-radio',
  clickable = true,
  checked,
  children,
  onChange,
  ...props
}: RadioProps) => {
  return (
    <S.Radio
      {...props}
      role="radio"
      clickable={clickable}
      checked={checked}
      data-testid={dataTestId}
      onClick={(e) => {
        e.stopPropagation();
        if (clickable && onChange) {
          onChange(!checked);
        }
      }}
    />
  );
};
