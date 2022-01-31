import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
    ul,li, a{
      list-style: none;
      text-decoration: none;
    }
  }
  html{
    font-size: 62.5%;
  }
  body{
    font-size: 1.6rem;
  }
`;

export default GlobalStyle;
