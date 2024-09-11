import styled from 'styled-components';
import { centerVerticalAbsolute, fullHorizontalAbsolute } from '@theme';

const DROPDOWN_HEIGHT = '27px';
const DROPDOWN_MIN_WIDTH = '150px';

export const Container = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  min-width: ${DROPDOWN_MIN_WIDTH};
  height: ${DROPDOWN_HEIGHT};
  border-radius: ${({ theme }) => theme.radius.Xs};
  background-color: ${({ theme }) => theme.colors.N5};
  padding: ${({ theme }) => `${theme.padding.Xs} ${theme.padding.Sm}`};
  padding-right: ${({ theme }) => theme.padding.Nm};
  border: solid 1px ${({ theme }) => theme.colors.N3};
`;

export const IconArrow = styled.div`
  ${centerVerticalAbsolute};
  right: 5px;
`;

export const IconSearch = styled(IconArrow)`
  ${centerVerticalAbsolute};
`;

const DROPDOWN_MENU_MAX_HEIGHT = '250px';

const DROPDOWN_MENU_POSITION = '43px';

interface MenuProps {
  menuTop?: boolean;
}

export const Menu = styled.div<MenuProps>`
  ${fullHorizontalAbsolute};
  right: 1px;
  left: 1px;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  overflow-y: auto;
  max-height: ${DROPDOWN_MENU_MAX_HEIGHT};
  z-index: ${({ theme }) => theme.zIndex.Lg};
  border-radius: ${({ theme }) => theme.radius.Xs};
  box-shadow: ${({ theme }) => theme.shadow.Sm};
  background-color: ${({ theme }) => theme.colors.N5};
  padding: ${({ theme }) => theme.padding.Sm};
  ${({ menuTop }) =>
    menuTop
      ? `bottom: ${DROPDOWN_MENU_POSITION}`
      : `top: ${DROPDOWN_MENU_POSITION}`};
`;

export const Filter = styled.div`
  position: relative;
  padding-right: ${({ theme }) => theme.padding.Nm};
  margin-bottom: ${({ theme }) => theme.margin.Sm};
  border: solid 1px ${({ theme }) => theme.colors.N3};
  border-radius: ${({ theme }) => theme.radius.Xs};
  background-color: ${({ theme }) => theme.colors.N5};

  input {
    border: 0;
  }
`;

export const MenuItem = styled.a`
  display: flex;
  flex: 1;
  align-items: center;
  cursor: pointer;
  line-height: ${({ theme }) => theme.lineHeight.Sm};
  font-size: ${({ theme }) => theme.fontSize.Xs};
  padding: ${({ theme }) => `${theme.padding.Sm} ${theme.padding.Sm}`};
  border-radius: ${({ theme }) => theme.radius.Xs};
  color: ${({ theme }) => theme.colors.N3};
`;

export const ReadOnly = styled.div`
  display: flex;
  align-items: center;
  line-height: ${({ theme }) => theme.lineHeight.Sm};
`;
