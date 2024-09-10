import styled from 'styled-components';

export const duration = 300;

export const Fade = styled.div`
  transition: opacity ${duration}ms ease-in-out;
  opacity: 0;
  width: 100%;
  height: 100%;
`;
