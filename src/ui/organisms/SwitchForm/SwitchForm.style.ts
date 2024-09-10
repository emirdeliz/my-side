import styled from 'styled-components';
import { centerVerticalAbsolute } from '@theme';
import { Input as InputStyle } from '../../atoms/Input/Input.style';
import { Switch as SwitchStyle } from '../../molecules/Switch/Switch.style';

export const SwitchInput = styled.div`
  position: relative;
  padding-right: ${({ theme }) => theme.margin.XXXLg};

  ${SwitchStyle} {
    ${centerVerticalAbsolute};
    right: 0;
  }

  ${InputStyle} {
    padding: 0;
  }
`;
