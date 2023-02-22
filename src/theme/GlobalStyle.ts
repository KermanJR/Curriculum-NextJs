import { createGlobalStyle } from "styled-components";

//Reset CSS
const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html{
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
  }

  body{
    display: flex;
    flex: 1;
    flex-direction: column;
  }

  #__next{
    width: 100%;
    padding: none;
    oveflow: hidden;
    display: flex;
    flex-direction column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-content: flex-start;
  }
`

export default GlobalStyle;
