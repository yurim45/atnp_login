import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@800&display=swap');
    
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    a {
      text-decoration: none;
      color: inherit;
    }
    ol, ul, li {
      list-style: none;
    }
    a {
      &:link,
      &:visited,
      &:hover,
      &:active {
        color: inherit;
        text-decoration: inherit;
      }
    }

    input,
    select,
    button {
      -webkit-appearance: none;
      background: none;
      border: none;
      font-size: inherit;
      color: inherit;
      &:focus {
        outline: none;
      }
      &:disabled {
        cursor: not-allowed;
      }
    }
    a, button {
      cursor: pointer;
    }
    pre {
      white-space: pre-line;
    }
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
`;

export default GlobalStyle;
