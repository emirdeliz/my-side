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
    margin: ${({ theme }) => theme.margin.Nm} 0;

    &:first-child {
      padding-left: 0;
    }

    &:last-child {
      padding-right: 0;
    }

    @media only screen and (max-width: 425px) {
      padding-right: 0;
      padding-left: 0;
    }
  }
`;
