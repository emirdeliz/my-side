import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  html, body, body > div, main {
    margin: 0;
    padding: 0;
		width: 100%;
  }

  html, body, #__next, main {
    height: 100%;
  }

  b {
    font-weight: bold;
  }
`;

export default Global;
