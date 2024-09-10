import styled from 'styled-components';

export const ErrorMessageStyle = styled.p`
  position: relative;
  margin-botttom: 10px;
  max-width: 80%;
  font-size: ${({ theme }) => theme.fontSize.Xs};
  color: ${({ theme }) => theme.colors.Red};
`;
