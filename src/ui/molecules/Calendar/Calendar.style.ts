import styled from 'styled-components';

const CALENDAR_WIDTH = '310px';

const CALENDAR_HEIGHT = '305px';

export const Calendar = styled.div`
  width: ${CALENDAR_WIDTH};
  height: ${CALENDAR_HEIGHT};
  border-radius: ${({ theme }) => theme.radius.Sm};
  box-shadow: ${({ theme }) => theme.shadow.Nm};
  background-color: ${({ theme }) => theme.colors.White};
  padding: ${({ theme }) => theme.padding.Sm};
`;
