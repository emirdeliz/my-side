import styled from 'styled-components';
import { TableRow } from '../../Table.style';

export { TableRow };

export const Head = styled.thead``;

export const HeadColumn = styled.th`
  position: sticky;
  top: 0;
  cursor: pointer;
  white-space: nowrap;
  background-color: ${({ theme }) => theme.colors.N6};
  padding: ${({ theme }) => `${theme.padding.Sm} ${theme.padding.Nm}`};
  box-shadow: ${({ theme }) => `${theme.shadow.Sm}`};
  z-index: ${({ theme }) => `${theme.zIndex.Xs}`};
  border-bottom: 1px solid ${({ theme }) => theme.colors.N3};
`;
