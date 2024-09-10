import {
  FontSizeProps,
  LineHeightProps,
  MarginProps,
  PaddingProps,
} from '@theme';
import { memo } from 'react';
import * as S from './Markdown.style';

export interface MarkdownProps
  extends LineHeightProps,
    FontSizeProps,
    MarginProps,
    PaddingProps {
  children?: string;
}

const markdownParser = (text?: string) => {
  const toHTML = (text || '')
    .replace(/^### (.*$)/gim, '<h3>$1</h3>') // h3 tag
    .replace(/^## (.*$)/gim, '<h2>$1</h2>') // h2 tag
    .replace(/^# (.*$)/gim, '<h1>$1</h1>') // h1 tag
    .replace(/\*\*(.*)\*\*/gim, '<b>$1</b>') // bold text
    .replace(/\*(.*)\*/gim, '<i>$1</i>'); // italic text
  return toHTML.trim(); // using trim method to remove whitespace
};

export const Markdown = memo(({ children, ...props }: MarkdownProps) => {
  return (
    <S.Markdown {...props}>
      <S.P
        {...props}
        dangerouslySetInnerHTML={{ __html: markdownParser(children) }}
      />
    </S.Markdown>
  );
});
