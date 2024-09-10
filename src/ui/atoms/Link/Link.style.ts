import { getFontSize } from '@theme';
import styled from 'styled-components';
import { Title } from '../Title/Title.style';
import { LinkProps } from './Link';

export const Link = styled(Title).attrs({
  as: 'a',
})<LinkProps>`
  display: flex;
  align-items: center;
  color: ${(props) =>
    props.error ? props.theme.colors.Red : props.theme.colors.P2};
  font-size: ${({ fs0, fs1, fs2, fs3, fs4, fs5, fs6, theme }) => {
    const hasFontSize = !fs0 && !fs1 && !fs2 && !fs3 && !fs4 && !fs5 && !fs6;
    return getFontSize(
      !hasFontSize
        ? { fs0, fs1, fs2, fs3, fs4, fs5, fs6, theme }
        : { fs1: true, theme }
    );
  }};
  cursor: pointer;

  ${({ noUnderline }) => (noUnderline ? `text-decoration: none;` : ``)}
`;
