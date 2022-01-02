import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}

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

// console.log(reset[0]);

// /* http://meyerweb.com/eric/tools/css/reset/
//    v5.0.1 | 20191019
//    License: none (public domain)
// */

// html, body, div, span, applet, object, iframe,
// h1, h2, h3, h4, h5, h6, p, blockquote, pre,
// a, abbr, acronym, address, big, cite, code,
// del, dfn, em, img, ins, kbd, q, s, samp,
// small, strike, strong, sub, sup, tt, var,
// b, u, i, center,
// dl, dt, dd, menu, ol, ul, li,
// fieldset, form, label, legend,
// table, caption, tbody, tfoot, thead, tr, th, td,
// article, aside, canvas, details, embed,
// figure, figcaption, footer, header, hgroup,
// main, menu, nav, output, ruby, section, summary,
// time, mark, audio, video {
//   margin: 0;
//   padding: 0;
//   border: 0;
//   font-size: 100%;
//   font: inherit;
//   vertical-align: baseline;
// }
// /* HTML5 display-role reset for older browsers */
// article, aside, details, figcaption, figure,
// footer, header, hgroup, main, menu, nav, section {
//   display: block;
// }
// /* HTML5 hidden-attribute fix for newer browsers */
// *[hidden] {
//     display: none;
// }
// body {
//   line-height: 1;
// }
// menu, ol, ul {
//   list-style: none;
// }
// blockquote, q {
//   quotes: none;
// }
// blockquote:before, blockquote:after,
// q:before, q:after {
//   content: '';
//   content: none;
// }
// table {
//   border-collapse: collapse;
//   border-spacing: 0;
// }
