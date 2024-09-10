import React, { ReactNode, useState } from 'react';
import { Button } from '../../atoms';
import { ModeDropDownView } from './ModeDropDownView';
import * as S from './YearSelect.style';

export interface YearSelectProps {
  children?: ReactNode;
  startDate: Date;
  finishDate?: Date;
  onClick: (date: number) => void;
  showDropDown?: boolean;
}

const yearsEnabled = (startDate: Date, finishDate?: Date) => {
  const startYear = new Date(startDate).getFullYear();
  const endYear = finishDate
    ? finishDate.getFullYear()
    : new Date().getFullYear();

  let result = [];

  if (startYear >= endYear) {
    return [endYear];
  } else {
    for (let year = startYear; year <= endYear; year++) {
      result.push(year);
    }
    return result;
  }
};

export const YearSelect: React.FC<YearSelectProps> = ({
  startDate,
  finishDate,
  onClick,
  showDropDown = false,
}) => {
  const [selectedDate, setSelectedDate] = useState(new Date().getFullYear());

  const dateRange = yearsEnabled(startDate, finishDate);

  const handleClick = (date: number) => {
    onClick(date);
    setSelectedDate(date);
  };

  return showDropDown ? (
    <ModeDropDownView
      selectedDate={selectedDate}
      setSelectedDate={setSelectedDate}
      dateRange={dateRange}
      onClick={handleClick}
    />
  ) : (
    <S.Container>
      {dateRange.map((date) => (
        <S.ButtonContainer key={date}>
          <Button
            light={selectedDate !== date}
            outlined={selectedDate === date}
            onClick={() => handleClick(date)}
            dataTestId={`${date}`}
          >
            {date}
          </Button>
        </S.ButtonContainer>
      ))}
    </S.Container>
  );
};

export default YearSelect;
