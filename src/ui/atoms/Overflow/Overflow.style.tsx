import { fullAbsolute } from '@theme';
import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  flex: 1;
  width: 100%;
`;

export const Overflow = styled.div`
  ${fullAbsolute};
  overflow: auto;
`;
