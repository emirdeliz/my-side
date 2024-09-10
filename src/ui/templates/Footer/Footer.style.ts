import styled from 'styled-components';

const FOOTER_HEIGHT = '200px';

export const Footer = styled.div`
  background-color: ${({ theme }) => theme.colors.N3};
  padding: ${({ theme }) => theme.padding.Nm};
  width: 100%;
`;
