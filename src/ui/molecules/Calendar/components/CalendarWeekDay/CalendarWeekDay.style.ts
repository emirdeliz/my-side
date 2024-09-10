import styled from 'styled-components';
import { centerAbsolute, disableElement } from '../../../../system/theme';
import { Title } from '../../../../atoms/Title/Title.style';

const CALENDAR_DAY_WIDTH = '36px';

interface CalendarWeekDayProps {
  clickable?: boolean;
  selected?: boolean;
}

const CALENDAR_WEEK_DAY_SELECTED_SIZE = '30px';

export const CalendarWeekDay = styled.div<CalendarWeekDayProps>`
  display: flex;
  flex: 1;
  justify-content: center;
  position: relative;
  width: ${CALENDAR_DAY_WIDTH};
  padding: ${({ theme }) => theme.padding.Sm};
  ${({ clickable }) => (!clickable ? disableElement : 'cursor: pointer')};

  ${Title} {
    cursor: ${({ clickable }) => (clickable ? 'pointer' : 'default')};
    z-index: ${({ theme }) => theme.zIndex.Xs};
  }

  &:before {
    content: '  ';
    transition: opacity 0.3s linear;
    ${centerAbsolute}
    border-radius: ${({ theme }) => theme.radius.Nm};
    background-color: ${({ theme }) => theme.colors.DarkGreen};
    width: ${CALENDAR_WEEK_DAY_SELECTED_SIZE};
    height: ${CALENDAR_WEEK_DAY_SELECTED_SIZE};
    opacity: ${({ selected }) => (selected ? 1 : 0)};
  }
`;
