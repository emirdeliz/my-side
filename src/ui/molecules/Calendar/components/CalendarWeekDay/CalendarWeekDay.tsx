import React, { memo, useMemo } from 'react';
import { Flex, Title } from '@atoms';
import * as S from './CalendarWeekDay.style';
import { checkDisabledCurrentDay } from '../../Calendar.logic';

interface CalendarWeekDayProps {
  minDate?: Date;
  maxDate?: Date;
  selectedDate?: Date;
  currentDate?: Date;
  values: Array<string | number>;
  onClick?: (value: string | number) => void;
}

export const CalendarWeekDay = memo(
  ({
    values,
    selectedDate,
    currentDate,
    minDate,
    maxDate,
    onClick,
  }: CalendarWeekDayProps) => {
    const isSelectedMonthAndYear = useMemo(() => {
      return (
        currentDate?.getMonth() === selectedDate?.getMonth() &&
        currentDate?.getFullYear() === selectedDate?.getFullYear()
      );
    }, [currentDate, selectedDate]);

    const isDisabledDay = (day: number | string) => {
      return (
        currentDate &&
        checkDisabledCurrentDay(
          new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            Number(day)
          ),
          minDate,
          maxDate
        )
      );
    };

    return (
      <Flex.Row wFull>
        {values.map((day, index) => {
          const isSelected =
            day === selectedDate?.getDate() && isSelectedMonthAndYear;
          const disabledDay = !!day && isDisabledDay(day);

          return (
            <S.CalendarWeekDay
              data-testid={`calendar-week-day-${day}`}
              key={index}
              selected={isSelected}
              clickable={!!onClick && !disabledDay && !!day}
              onClick={(e) => {
                e.stopPropagation();
                if (!disabledDay) {
                  onClick && onClick(day);
                }
              }}
            >
              <Title fs1 uppercase white={isSelected} n2={!onClick}>
                {day}
              </Title>
            </S.CalendarWeekDay>
          );
        })}
      </Flex.Row>
    );
  }
);
