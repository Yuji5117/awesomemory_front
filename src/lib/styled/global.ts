import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html,
  body {
    background: #fff;
    font-size: 10px;
  }

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }
`;
