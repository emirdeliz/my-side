import { ReactNode, useMemo } from 'react';
import { Flex, Radio, RadioProps } from '@atoms';
import * as S from './RadioForm.style';

interface RadioOption {
  label?: ReactNode;
  value: string | number;
  clickable?: boolean;
}

export interface RadioFormProps extends Omit<RadioProps, 'onChange'> {
  options?: Array<RadioOption>;
  value?: string | number;
  directionRow?: boolean;
  onChange?: (value: string | number) => void;
}

export const RadioForm = ({
  value,
  options,
  directionRow,
  onChange,
  ...props
}: RadioFormProps) => {
  const radioOptions = useMemo(() => {
    return options?.map(({ value: optValue, label, clickable }, index) => {
      const isLast = index === options.length - 1;
      const isChecked = optValue === value;
      return (
        <S.RadioFormOption
          key={optValue}
          last={isLast}
          row={directionRow}
          clickable={clickable}
          onClick={() => clickable !== false && onChange && onChange(optValue)}
        >
          <Radio
            id={`radio-form-option-${optValue}`}
            checked={isChecked}
            clickable={clickable}
            onChange={() => onChange && onChange(optValue)}
          />
          <S.RadioFormLabel>{label || optValue}</S.RadioFormLabel>
        </S.RadioFormOption>
      );
    });
  }, [directionRow, options, value, onChange]);

  return (
    <Flex col={!directionRow} row={directionRow} pb1 pt1>
      {radioOptions}
    </Flex>
  );
};
