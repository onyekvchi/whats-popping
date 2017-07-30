import styled, { css } from "styled-components";

const EventList = styled.div`
  position: absolute;
  left: 0;
  transform: translateX(-600px);
  width: 100%;
  height: 100%;
  opacity: 0;
  will-change: opacity, transform;
  transition: transform 150ms cubic-bezier(0.55, 0.055, 0.675, 0.19),
    opacity 150ms ease-in-out;

  ${props =>
    props.active &&
    css`
      opacity: 1;
      transform: translateX(0);
      transition: transform 300ms cubic-bezier(.04, .37, .03, .96), opacity 300ms ease-in-out;
      transition-delay: 150ms;
    `};
`;

export default EventList;
