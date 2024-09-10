import { createGlobalStyle } from 'styled-components';

const BODY_MIN_WIDTH = '300px';

const Global = createGlobalStyle`
  html, body, body > div, main {
    margin: 0;
    padding: 0;
		width: 100%;
  }

  body {
    min-width: ${BODY_MIN_WIDTH};
  }

  b {
    font-weight: bold;
  }
`;

export default Global;
