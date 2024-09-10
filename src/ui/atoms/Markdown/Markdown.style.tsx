import styled from 'styled-components';
import { buildMargin, buildPadding, getFontSize, getLineHeight } from '@theme';
import { MarkdownProps } from './Markdown';

export const Markdown = styled.div`
  ${buildMargin()}
  ${buildPadding()}
`;

export const P = styled.span<MarkdownProps>`
  font-size: ${(props) => getFontSize(props)};
  line-height: ${(props) => getLineHeight(props)};
`;
