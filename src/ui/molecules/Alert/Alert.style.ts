import styled from 'styled-components';

export const Alert = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.N6};
  color: ${({ theme }) => theme.colors.P2};
  border-radius: ${({ theme }) => theme.radius.Sm};
  padding: ${({ theme }) => theme.padding.Nm};
`;
