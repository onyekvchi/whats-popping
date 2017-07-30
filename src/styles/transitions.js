import { css } from "styled-components";

const transitions = css`
  .fade-enter {
    opacity: 0;
    transform: translateX(-100px);
  }

  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 300ms ease-in;
    transform: translateX(0px);
  }

  .fade-appear {
    opacity: 0;
  }

  .fade-appear.example-appear-active {
    opacity: 1;
    transition: opacity 300ms ease-in;
  }

  .fade-leave {
    opacity: 0;
    transform: translateX(-100px);
  }

  .fade-leave.fade-leave-active {
    opacity: 0;
    transition: opacity 300ms ease-in;
  }
`;

export default transitions;
