import styled, { keyframes, css } from "styled-components";

const fadeInKeyframes = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
`;

const fadeInUpKeyframes = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 15%, 0);
  }
  to {
    opacity: 1;
    transform: none;
  }
`;

const FadeIn = styled.div`
  animation-name: ${props =>
    props.direction === "up" ? fadeInUpKeyframes : fadeInKeyframes};
  animation-duration: ${props => props.duration || "300ms"};
  animation-fill-mode: forwards;
  ${props =>
    props.delay &&
    css`
      animation-delay: props.delay
  `};
`;

export default FadeIn;
