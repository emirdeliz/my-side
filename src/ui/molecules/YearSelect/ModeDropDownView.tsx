import { Button } from '@atoms';
import { useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { getMargin, MarginProps } from '@theme';

interface ModeDropDownViewProps {
  selectedDate: number;
  setSelectedDate: (value: number) => void;
  dateRange: number[];
  onClick: (value: number) => void;
}

export const ModeDropDownView = ({
  dateRange,
  selectedDate,
  setSelectedDate,
  onClick,
}: ModeDropDownViewProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const refYears = useRef<HTMLDivElement | null>(null);

  const handleClick = (year: number) => {
    setIsOpen(false);
    setSelectedDate(year);
    onClick(year);
  };

  return (
    <Wrapper>
      <ButtonContainer>
        <Button.Outlined
          onClick={() => setIsOpen(!isOpen)}
          dataTestId="year-filter"
        >
          {selectedDate}
        </Button.Outlined>
      </ButtonContainer>

      {isOpen && (
        <DropDownContainer ref={refYears} mt6 ml1>
          {dateRange.map((year) => (
            <ButtonContainer key={year}>
              <Button
                outlined={selectedDate !== year}
                onClick={() => handleClick(year)}
                dataTestId={`${year}`}
              >
                {year}
              </Button>
            </ButtonContainer>
          ))}
        </DropDownContainer>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

export const Container = styled.div`
  max-width: 256px;
  display: flex;
  flex-wrap: wrap;
`;

const ButtonContainer = styled.div`
  width: 120px;
  margin: ${({ theme }) => theme.margin.Xs};
`;

interface DropDownContainerProps extends MarginProps {}

const DropDownContainer = styled.div<DropDownContainerProps>`
  ${(props) => css`
    ${getMargin(props)}

    background-color: ${props.theme.colors.White};
    position: absolute;
    z-index: 1000;

    border-radius: ${props.theme.radius.Xs};
    box-shadow: ${props.theme.shadow.Nm};
    max-width: 256px;

    display: flex;
    flex-wrap: wrap;
  `}
`;
