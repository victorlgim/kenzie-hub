import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    box-sizing: border-box;
  }

  body {
    overflow-x: hidden;
  }

  li {
    list-style-type: none;
  }

  button {
    cursor: pointer;
  }

  button:hover {
    filter: brightness(0.9);
  }

 body {
    background-color: #121214;
 }


`;

export default GlobalStyle;
