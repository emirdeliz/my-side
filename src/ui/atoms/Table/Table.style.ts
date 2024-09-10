import styled from 'styled-components';

const CONTAINER_HEIGHT = '75vh';

export const Container = styled.div`
  overflow-y: auto;
  height: ${CONTAINER_HEIGHT};
  width: 100%;
`;

export const Table = styled.table`
  border-collapse: separate;
  border-spacing: 0; 
  width: 100%;
`;

export const Thead = styled.thead`
  width: 100%;
`;

export const Tbody = styled.tbody`
`;

export const Th = styled.th.attrs({ scope: 'col' })`
  background-color: ${({ theme }) => theme.colors.LightBlue};
  font-weight: ${({ theme }) => theme.fontWeight.Semibold};
  padding: ${({ theme }) => `${theme.padding.Sm} ${theme.padding.Nm}`};
  color: ${({ theme }) => theme.colors.N6};
  font-size: ${({ theme }) => theme.fontSize.Xs};
  padding: ${({ theme }) => theme.padding.Sm};
  position: sticky; 
  top: 0;
  z-index: 1; 
`;

export const Td = styled.td`
  font-size: ${({ theme }) => theme.fontSize.Xs};
  padding: ${({ theme }) => theme.padding.Sm};
`;

export const Tr = styled.tr.attrs({ scope: 'row' })`
  &:hover {
    background-color: ${({ theme }) => theme.colors.N5};
  }
`;

