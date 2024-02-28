import { css, Global } from "@emotion/react";

const resetCSS = css`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  menu,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
    -webkit-appearance: none;
    -webkit-border-radius: 0;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  section {
    display: block;
  }
  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
    display: none;
  }
  body {
    line-height: 1;
  }
  menu,
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;

const customStyles = css`
  @font-face {
    font-family: "SUIT-Regular";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Regular.woff2")
      format("woff2");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  :root {
    font-family: "SUIT-Regular", sans-serif;
    -ms-overflow-style: none;
    ::-webkit-scrollbar {
      display: none;
    }
  }
  li {
    list-style: none;
  }
  button {
    font-family: "SUIT-Regular", sans-serif;
    cursor: pointer;
    color: black;
    padding: 0;
    border: 0;
    background-color: transparent;
  }

  img {
    vertical-align: top;
  }

  a {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }

  input {
    color: black;
    border: 0;
    box-sizing: border-box;
    font-family: "SUIT-Regular";
    resize: none;
    &:focus {
      outline: none;
    }
  }
  #root {
    width: 90%;
    max-width: 80rem;
    min-height: 100%;
    height: 100%;
    margin: 0 auto;
    background-color: #fff;
    /* position: relative; */
  }
  .a11y-hidden {
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
  }
`;

const GlobalStyles: React.FC = () => (
  <Global styles={[resetCSS, customStyles]} />
);

export default GlobalStyles;
