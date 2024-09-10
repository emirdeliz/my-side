import { Input as InputStyle } from '../../atoms/Input/Input.style';
import { Title as TitleStyle } from '../../atoms/Title/Title.style';
import { TitleProps } from '@atoms';
import { fullTopRightAbsolute } from '@theme';
import styled from 'styled-components';

export const InputFormLabel = styled.div`
  position: relative;
  padding-right: ${({ theme }) => theme.margin.XXXLg};

  ${InputStyle} {
    padding: 0;
  }
`;

export const LabelInfo = styled(TitleStyle)<TitleProps>`
  ${fullTopRightAbsolute};
  top: 20px;
`;
