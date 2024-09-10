import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ButtonContainer = styled.div`
  width: 100px;
  display: inline-block;
  margin: ${({ theme }) => theme.margin.Xs};
`;
