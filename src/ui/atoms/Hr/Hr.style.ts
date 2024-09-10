import styled from 'styled-components';
import { HrProps } from './Hr';

export const Hr = styled.hr<HrProps>`
  display: block;
  unicode-bidi: unset;
  margin-block-start: unset;
  margin-block-end: unset;
  margin-inline-start: unset;
  margin-inline-end: unset;
  overflow: hidden;
  border-style: none;
  border-width: unset;

  height: ${({ vertical }) => (vertical ? '50%' : '1px')};
  width: ${({ vertical }) => (vertical ? '1px' : '100%')};
  margin: ${({ theme }) => theme.margin.Nm} 0;
  background-color: ${({ theme }) => theme.colors.N4};
`;
