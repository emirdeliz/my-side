import styled from 'styled-components';

interface RadioFormProps {
  last?: boolean;
  clickable?: boolean;
  row?: boolean;
}

export const RadioFormOption = styled.div<RadioFormProps>`
  display: flex;
  flex-direction: row;
  white-space: nowrap;
  cursor: pointer;
  margin-bottom: ${({ theme, last }) => !last ? theme.margin.Sm : 0};
  ${({ theme, clickable }) => `
    opacity: ${clickable !== false ? 1 : theme.opacity.Disable};
    cursor: ${clickable !== false ? 'pointer': 'not-allowed'};
  `};

  ${({ theme, row }) => row ? `
    margin-right: ${theme.margin.XLg};

    &:last-child {
      margin-right: 0;
    }
  ` : ``};
`;

export const RadioFormLabel = styled.span`
  font-size: ${({ theme }) => theme.fontSize.Sm};
  margin-left: ${({ theme }) => theme.margin.Sm};
  line-height: ${({ theme }) => theme.lineHeight.Nm};
`;