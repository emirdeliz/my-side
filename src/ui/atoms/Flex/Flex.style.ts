import styled from 'styled-components';
import { buildMargin, buildPadding } from '@theme';
import { FlexProps } from './Flex';

const getAlign = (
  center?: boolean,
  end?: boolean,
  spaceBetween?: boolean,
  spaceAround?: boolean,
  initial?: boolean,
  alignBaseline?: boolean
) => {
  switch (true) {
    case center:
      return 'center';
    case spaceBetween:
      return 'space-between';
    case spaceAround:
      return 'space-around';
    case end:
      return 'flex-end';
    case alignBaseline:
      return 'baseline';
    case initial:
      return 'initial';
    default:
      return 'flex-start';
  }
};

export const Container = styled.div<FlexProps & { flexWrap: number }>`
  display: flex;
  flex-wrap: ${({ flexWrap }) => (flexWrap ? 'wrap' : 'inherit')};
  flex-direction: ${({ row }) => (row ? 'row' : 'column')};
  justify-content: ${({
    justifyCenter,
    justifyEnd,
    justifySpaceBetween,
    justifySpaceAround,
    justifyInitial,
  }) => {
    return getAlign(
      justifyCenter,
      justifyEnd,
      justifySpaceBetween,
      justifySpaceAround,
      justifyInitial
    );
  }};
  align-items: ${({
    alignCenter,
    alignEnd,
    alignSpaceBetween,
    alignSpaceAround,
    alignBaseline,
    alignInitial,
  }) => {
    return getAlign(
      alignCenter,
      alignEnd,
      alignSpaceBetween,
      alignSpaceAround,
      alignInitial,
      alignBaseline
    );
  }};
  ${buildMargin()}
  ${buildPadding()}
  ${({ hFull, wFull }) => `
		${wFull ? 'width: 100%' : ''};
		${hFull ? 'height: 100%' : ''};
	`}
`;
