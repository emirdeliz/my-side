import React, { memo, useCallback, useMemo } from 'react';
import { Flex, Link, Title } from '@atoms';
import { getMonthByIndex } from '@helpers';

interface CalendarHeaderProps {
  children: string;
  onChangeMonth: (month: number) => void;
}

export const CalendarHeader = memo(
  ({ children, onChangeMonth }: CalendarHeaderProps) => {
    const [currentMonth, currentYear] = useMemo(() => {
      const [month, year] = children.split(' ');
      return [Number(month), Number(year)];
    }, [children]);

    const getCurrentMonth = useCallback(() => {
      return getMonthByIndex(currentMonth)?.label;
    }, [currentMonth]);

    return (
      <Flex.Row alignCenter justifySpaceBetween mb2 mt2 pl1 pr1 role="menubar">
        <Link.Icon
          leftOpen
          sm
          onClick={() => onChangeMonth(currentMonth - 1)}
          role="menuitem"
          dataTestId="link-prev-calendar"
        />
        <Title fs2 capitalize fw3 role="title">
          {getCurrentMonth()} {currentYear}
        </Title>
        <Link.Icon
          rightOpen
          sm
          onClick={() => onChangeMonth(currentMonth + 1)}
          role="menuitem"
          dataTestId="link-next-calendar"
        />
      </Flex.Row>
    );
  }
);
