import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.N4};
  padding: ${({ theme }) => `${theme.padding.Nm} ${theme.padding.Lg}`};
  flex: 1;
  height: 100%;
  overflow-y: auto;
`;
