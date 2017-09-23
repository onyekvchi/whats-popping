import styled, { css, keyframes } from "styled-components";

const sidewaysAnimation = keyframes`
  0%, 100% {
    transform: translateX(0)
  }
  50% {
    transform: translateX(-15%);
  }
`;

const Side = styled.div`
  position: relative;
  float: left;
  height: 100%;

  ${props =>
    props.float === "left" &&
    css`
    background-color: ${props => props.theme.background};
    width: ${100 - 61.803398875}%;
    position: relative;
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 25px;
    border-right: 5px solid black;
    overflow: hidden;
    &:after {
      content: '';
      position: absolute;
      z-index: 1;
      left: 0;
      top: 0;
      height: 100%;
      width: 120%;
      opacity: 1;
      z-index: -1;
      background-repeat: no-repeat;
      background-size: cover;
      background-image: url('${props => props.theme.pattern}');
      background-position: center;
      animation-name: ${sidewaysAnimation};
      animation-duration: 75s;
      animation-iteration-count: infinite;
      animation-timing-function: linear; 
    }
    @media (max-width: 768px) {
      display: none;
    }
  `};

  ${props =>
    props.float === "right" &&
    css`
    width: 61.803398875%;
    background-color: white;
    overflow-x: hidden;
    @media (max-width: 768px) {
      width: 100%;
    }
  `};
`;

export default Side;
