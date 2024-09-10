import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: solid 1px ${({ theme }) => theme.colors.N4};
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
`;

export const LayoutContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  position: relative;
`;
