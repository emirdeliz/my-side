import styled from 'styled-components';

interface RadioProps {
  checked?: boolean;
  clickable?: boolean;
}

const RADIO_WIDTH = '20px';

export const Radio = styled.div<RadioProps>`
  position: relative;
  width: ${RADIO_WIDTH};
  padding: ${({ theme }) => theme.padding.Sm};
  border: solid 1px ${({ theme }) => theme.colors.P1};
  border-radius: ${({ theme }) => theme.radius.Nm};
  ${({ theme, clickable, checked }) => `
    opacity: ${clickable ? 1 : theme.opacity.Disable};
    cursor: ${clickable ? 'pointer' : 'not-allowed'};
    background-color: ${checked ? theme.colors.P1 : 'transparent'};
  `};

  &:before {
    content: ' ';
    transition: transform 0.2s linear;
    padding: 7px;
    background-color: ${({ theme }) => theme.colors.DarkGreen};
    border-radius: ${({ theme }) => theme.radius.Nm};
    position: absolute;
    top: 1px;

    ${({ checked }) => {
      // return checked ? 'left: 1px' : 'right: 1px';
      return checked
        ? `transform: translateX(${parseFloat(RADIO_WIDTH) - 7}px);`
        : 'transform: translateX(-7px)';
    }}
  }
`;
