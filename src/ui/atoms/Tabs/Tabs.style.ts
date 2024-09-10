import { Colors } from '@theme';
import styled from 'styled-components';

export const Tab = styled.button<{ active?: boolean }>`
  display: flex;
  align-items: center;
  background-color: inherit;
  border: none;
  margin: 0;
  text-decoration: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: fit-content;
  height: 40px;
  padding: ${({ theme }) => theme.padding.Sm} ${({ theme }) => theme.padding.Md};
  border-bottom: 2px solid
    ${({ active }) => (active ? Colors.P1 : Colors.White)};
  cursor: pointer;
`;

export const TabName = styled.p<{ selected?: boolean }>`
  padding-left: 8px;
  font-size: ${({ theme }) => theme.fontSize.Xs};
  line-height: 21px;
  letter-spacing: 0em;
  color: ${({ selected }) => (selected ? Colors.P1 : Colors.N1)};
`;
