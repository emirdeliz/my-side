import { disableElement } from '@theme';
import styled from 'styled-components';

export const Table = styled.table`
  text-align: left;
  position: relative;
  border-collapse: collapse;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.White};
`;

interface TableRowProps {
  clickable?: boolean;
}

export const TableRow = styled.tr<TableRowProps>`
  ${({ clickable }) =>
    clickable
      ? `
    * {
      cursor: pointer;
    }
  `
      : ``}
`;

interface ContainerProps {
  disabled?: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  max-height: 100%;
  flex: 1;
  overflow: auto;
  ${({ disabled }) => (disabled ? disableElement : ``)};
`;
