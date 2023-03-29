import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;

    background-color: #F7F7F7;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    font-family: Open-Sans, Helvetica, Sans-Serif;

    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
  
`;
 
export default GlobalStyle;