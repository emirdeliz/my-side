import styled from 'styled-components';

export const RequestAccessSuccess = styled.div`
  width: 330px;
  height: 322px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => `${theme.padding.Nm} ${theme.padding.Sm}`};
  border-radius: ${({ theme }) => theme.radius.Sm};
  background: ${({ theme }) => theme.colors.White};
`;
