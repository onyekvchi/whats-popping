import styled, { css } from "styled-components";

const Side = styled.div`
  position: relative;
  float: left;
  height: 100%;

  ${props =>
    props.float === "left" &&
    css`
    background-color: #f06669;
    width: ${100 - 61.803398875}%;
    position: relative;
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 25px;
    &:after {
      content: '';
      position: absolute;
      z-index: 1;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      opacity: 1;
      z-index: -1;
      background-size: cover;
      background-image: url('https://preview.ibb.co/cKPtH5/WHATSPOPPING_PATTERN_1.png');
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
