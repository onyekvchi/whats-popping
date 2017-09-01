import styled, { keyframes } from "styled-components";

const Shimmer = styled.div`
  height: ${props => props.height || "300px"};
  margin-top: ${props => props.marginTop};
`;

const ShimmerAnimation = keyframes`
  0% {
    background-position: -500px 0;
  }
  100% {
    background-position: 500px 0;
  }
`;

const ShimmerBackground = styled.div`
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: ${ShimmerAnimation};
  animation-timing-function: linear;
  background: #f6f7f8;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.04) 10%,
    rgba(0, 0, 0, 0.08) 30%,
    rgba(0, 0, 0, 0.04) 50%
  );
  background-size: 490px 120px;
  height: ${props => props.height || "252px"};
  position: relative;
`;

const ShimmerMask = styled.div`
  background-color: white;
  position: absolute;
  top: ${props => props.top + "px"};
  right: ${props => props.right || 0};
  height: ${props => props.height}px;
  width: ${props => props.width || "100%"};
  left: ${props => props.left};
`;

export { Shimmer, ShimmerBackground, ShimmerMask };
