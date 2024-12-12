import { createGlobalStyle } from 'styled-components';
import colors from './colors';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    background: ${colors.darkBg};
    color: ${colors.white};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  button {
    font-family: 'Inter', sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    line-height: 1.2;
  }
`;

export default GlobalStyles; 