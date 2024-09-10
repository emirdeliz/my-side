import { getThemeColor } from '@theme';
import styled, { DefaultTheme } from 'styled-components';
import { DotProps } from './Dot';

export const DotXss = '3px';

export const DotXs = '5px';

export const DotSm = '8px';

export const DotNm = '16px';

const getSize = ({
  xss,
  xs,
  sm,
  theme,
}: DotProps & { theme: DefaultTheme }) => {
  switch (true) {
    case xss:
      return [DotXss, DotXss];
    case xs:
      return [DotXs, DotXs];
    case sm:
      return [DotSm, DotSm];
    default:
      return [DotNm, DotNm];
  }
};

export const Dot = styled.div<DotProps>`
  border-radius: 50%;
  display: flex;
  ${({ outlined, ...props }) => {
    const color = getThemeColor(props);
    return outlined
      ? `
			border: solid 1px ${color};
		`
      : `
			background-color: ${color};
		`;
  }};

  padding: ${(props) => getSize(props).join(' ')};
`;
