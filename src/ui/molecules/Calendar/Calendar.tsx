import React, { useMemo, useState } from 'react';
import { CalendarHeader, CalendarWeekDay } from './components';
import { Flex } from '@atoms';
import { applyCorrectDateByLimitOfDaysOnMonth, WeekLabel } from '@helpers';
import { buildCalendarWeek } from './Calendar.logic';
import * as S from './Calendar.style';

export const CALENDAR_DAY_WIDTH = '36px';

export interface CalendarProps {
  value?: Date;
  minDate?: Date;
  maxDate?: Date;
  onChange?: (value: Date) => void;
}

export const Calendar = ({
  value = new Date(),
  minDate,
  maxDate,
  onChange,
}: CalendarProps) => {
  const [currentDate, setCurrentDate] = useState<Date>(value);
  const calendarDays = useMemo(() => {
    const days = buildCalendarWeek(currentDate);

    return days.map((week, index) => {
      return (
        <Flex.Row key={index} wFull justifySpaceBetween>
          <CalendarWeekDay
            values={week}
            selectedDate={value}
            currentDate={currentDate}
            minDate={minDate}
            maxDate={maxDate}
            onClick={(v) => {
              const newDate = new Date(currentDate);
              newDate.setDate(Number(v));
              onChange && onChange(newDate);
            }}
          />
        </Flex.Row>
      );
    });
  }, [currentDate, value, minDate, maxDate, onChange]);

  const weekLabel = useMemo(() => {
    return Object.values(WeekLabel).map((label) => label[0]);
  }, []);

  const changeMonth = (monthBase: number) => {
    const newDate = applyCorrectDateByLimitOfDaysOnMonth(currentDate, {
      month: monthBase,
    });
    setCurrentDate(newDate);
  };

  return (
    <S.Calendar>
      <CalendarHeader onChangeMonth={(m) => changeMonth(m)}>
        {`${currentDate.getMonth()} ${currentDate.getFullYear()}`}
      </CalendarHeader>
      <CalendarWeekDay values={weekLabel} />
      {calendarDays}
    </S.Calendar>
  );
};
