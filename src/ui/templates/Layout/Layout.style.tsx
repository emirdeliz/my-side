import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.padding.Sm};
`;

export const Content = styled.div`
  padding: ${({ theme }) => theme.padding.Sm};
  flex: 1;
`;

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.N6};
`;

export const LayoutContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
