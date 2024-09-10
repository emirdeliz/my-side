import styled from 'styled-components';
import { centerHorizontalAbsolute, fullVerticalAbsolute } from '@theme';

export const Container = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

interface DotProps {
  isCurrent?: boolean;
}

export const Dot = styled.div<DotProps>`
  display: flex;
  flex: 25px 0 0;
  justify-content: center;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  line-height: ${({ theme }) => theme.lineHeight.Sm};
  margin-bottom: ${({ theme }) => theme.margin.Lg};
  margin-top: ${({ theme }) => theme.margin.Lg};

  &:last-child,
  &:first-child {
    margin-top: 0;
    margin-bottom: 0;
  }
`;

export const DotContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  right: 0;
  ${centerHorizontalAbsolute};

  &:before {
    ${fullVerticalAbsolute};
    left: 12px;
    z-index: -1;
    border-right: solid 1px ${({ theme }) => theme.colors.P3};
    content: '';
  }
`;

export const Icon = styled.div`
  margin-left: ${({ theme }) => theme.margin.Sm};
`;
