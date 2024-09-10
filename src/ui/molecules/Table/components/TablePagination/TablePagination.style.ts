import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  img {
    width: 28px;
    height: 28px;
    cursor: pointer;
  }
`;

export const PaginationItemsContainer = styled.div`
  display: flex;
  align-items: center;
  margin: ${({ theme }) => theme.margin.Nm};
`;

type IPaginationItem = {
  selected?: boolean;
  isActive?: boolean;
};

export const PaginationItem = styled.div<IPaginationItem>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 28px;
  width: 28px;
  border-radius: 50%;
  font-size: ${({ theme }) => theme.fontSize.Xs};
  margin-left: ${({ theme }) => theme.margin.Sm};
  margin-right: ${({ theme }) => theme.margin.Sm};
  cursor: pointer;
  ${({ selected, theme }) =>
    selected && `background-color: ${theme.colors.N4};`}
  ${({ isActive, theme }) => isActive && `color: ${theme.colors.White};`}
  ${({ isActive, theme }) =>
    isActive && `background-color: ${theme.colors.LightGrey};`}

  &:hover {
    background-color: ${({ theme }) => theme.colors.N4};
    ${({ isActive, theme }) =>
      isActive && `background-color: ${theme.colors.LightGrey};`}
  }
`;
