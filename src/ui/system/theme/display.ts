import { DefaultTheme } from 'styled-components';

export enum Display {
	Block = 'block',
	InlineBlock = 'inline-block',
	Inline = 'inline',
	Flex = 'flex',
	Initial = 'initial'
}

export interface DisplayProps {
  block?: boolean;
  inlineBlock?: boolean;
  inline?: boolean;
  flex?: boolean;
  initial?: boolean;
}

export const getDisplay = ({
  block,
  inlineBlock,
  inline,
  flex,
  initial,
  theme,
}: DisplayProps & {
  theme: DefaultTheme;
}) => {
  switch (true) {
    case block:
      return theme.display.Block;
    case inlineBlock:
      return theme.display.InlineBlock;
    case inline:
      return theme.display.Inline;
    case flex:
      return theme.display.Flex;
    case initial:
      return theme.display.Initial;
    default:
      return theme.display.InlineBlock;
  }
};
