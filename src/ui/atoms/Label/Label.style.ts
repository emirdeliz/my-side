import styled from 'styled-components';
import { getFontSize, getThemeColor } from '@theme';
import { LabelProps } from './Label';

export const Label = styled.label<LabelProps>`
  color: ${(props) => getThemeColor(props)};
  line-height: ${({ theme }) => theme.lineHeight.Sm};
  font-size: ${(props) => getFontSize(props)};
  font-weight: ${({ theme, fw3 }) => {
    const { fontWeight } = theme;
    return fw3 ? fontWeight.Semibold : fontWeight.Regular;
  }};
`;
