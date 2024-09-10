import styled from "styled-components";

const HEADER_HEIGHT = '85px';
const CONTENT_PADDING = '15px';

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${HEADER_HEIGHT};
  border-bottom: solid 1px ${({ theme }) => theme.colors.N4};
  padding: ${({ theme }) => theme.padding.Xs};
`;

export const Content = styled.div`
  padding: ${CONTENT_PADDING};
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
