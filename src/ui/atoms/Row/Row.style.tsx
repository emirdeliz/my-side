import styled from 'styled-components';
import { buildMargin, buildPadding } from '@theme';
import { Col } from '../Col/Col.style';

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  
  ${buildMargin()}
  ${buildPadding()}

  ${Col} {
    padding-right: ${({ theme }) => theme.padding.Sm};
    padding-left: ${({ theme }) => theme.padding.Sm};
    margin: ${({ theme }) => theme.margin.Xs} 0;
  }
`;
