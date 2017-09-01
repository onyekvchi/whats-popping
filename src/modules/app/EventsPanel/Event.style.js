import styled, { css } from "styled-components";

const EventStyle = styled.div`
  padding-top: 45px;
  padding-bottom: 45px;
  position: relative;
  height: 100%;
  overflow: scroll;

  position: absolute;
  left: 0;
  // transform: translateX(600px);
  top: 0;
  width: 100%;
  height: 100%;
  // opacity: 0;
  // will-change: opacity, transform;
  // transition: transform 150ms cubic-bezier(0.55, 0.055, 0.675, 0.19),
  //   opacity 150ms ease-in-out;

  @media (max-width: 450px) {
    padding-top: 30px;
    padding-bottom: 60px;
  }

  ${props =>
    props.active &&
    css`
      opacity: 1;
      transform: translateX(0);
      transition: transform 300ms cubic-bezier(.23, 1.05, .38, .99), opacity 300ms ease-in-out;;
      transition-delay: 150ms;
    `};
`;

export default EventStyle;
