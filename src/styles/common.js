import { css } from "styled-components";

const common = css`
  a {
    color: inherit;
    text-decoration: none;
  }

  html {
    font-size: 62.5%;
    overflow-y: hidden;
    background-color: #eb6369;
    @media screen and (max-width: 450px) {
        font-size: 58%;
    }
  }

  html,
  body,
  #root {
    height: 100%;
  }

  .app {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    font-family: "SofiaWeb";
    font-size: 1.6rem;
    line-height: 1.5;
    font-weight: 400;
    overflow: hidden;
    color: black;
  }
`;

export default common;
