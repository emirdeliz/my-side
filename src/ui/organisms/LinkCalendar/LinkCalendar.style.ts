import { centerVerticalAbsolute } from '@theme';
import styled from 'styled-components';

const LINK_CALENDAR_WIDTH = '110px';
export const LinkCalendar = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: ${LINK_CALENDAR_WIDTH};
`;

const CALENDAR_RIGHT = '-225px';
export const Calendar = styled.div`
  ${centerVerticalAbsolute};
  right: ${CALENDAR_RIGHT};
  z-index: ${({ theme }) => theme.zIndex.Xs};
`;
