import styled from 'styled-components';
import { TableRow } from '../../Table.style';

export { TableRow };

export const Body = styled.tbody`
  ${TableRow} {
    width: 100%;

    &:nth-child(odd) {
      background-color: ${({ theme }) => theme.colors.N5};
    }
  }
`;

export const BodyColumn = styled.td`
  padding: ${({ theme }) => `${theme.padding.Sm} ${theme.padding.Nm}`};
  vertical-align: middle;
`;
