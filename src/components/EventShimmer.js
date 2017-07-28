import React from "react";
import styled from "styled-components";

const EventShimmer = ({ event }) => {
  const height = 32;
  const largeHeight = 64;
  const spacing = 12;
  const largeSpacing = 24;
  return (
    <Shimmer>
      <ShimmerBackground>
        <ShimmerMask top="0" height={largeHeight} width="120px" />
        <ShimmerMask top={largeHeight} height={largeSpacing} width="100%" />
        <ShimmerMask
          top={largeHeight + largeSpacing}
          height={height}
          width="42px"
        />
        <ShimmerMask
          top={largeHeight + largeSpacing + height}
          height={spacing}
        />
        <ShimmerMask
          top={largeHeight + largeSpacing + height + spacing}
          height={height}
          width="200px"
        />
        <ShimmerMask
          top={largeHeight + largeSpacing + height + spacing}
          height={height}
          width="200px"
        />
        <ShimmerMask
          top={largeHeight + largeSpacing + height * 2 + spacing}
          height={spacing}
        />
        <ShimmerMask
          top={largeHeight + largeSpacing + height * 2 + spacing * 2}
          height={height}
          width="75%"
        />
        <ShimmerMask
          top={largeHeight + largeSpacing + height * 3 + spacing * 2}
          height={spacing}
        />
        <ShimmerMask
          top={largeHeight + largeSpacing + height * 3 + spacing * 3}
          height={height}
          width="85%"
        />
        <ShimmerMask
          top={largeHeight + largeSpacing + height * 4 + spacing * 3}
          height={spacing}
        />
      </ShimmerBackground>
    </Shimmer>
  );
};

const Shimmer = styled.div`
  height: ${props => props.height || "300px"};
  margin-top: 60px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
`;

const ShimmerBackground = styled.div`
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: placeHolderShimmer;
  animation-timing-function: linear;
  background: #f6f7f8;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.04) 10%,
    rgba(0, 0, 0, 0.08) 30%,
    rgba(0, 0, 0, 0.04) 50%
  );
  background-size: 490px 120px;
  height: 252px;
  position: relative;

  @keyframes placeHolderShimmer {
    0% {
      background-position: -500px 0;
    }
    100% {
      background-position: 500px 0;
    }
  }
`;

const ShimmerMask = styled.div`
  background-color: white;
  position: absolute;
  top: ${props => props.top + "px"};
  right: ${props => props.right || 0};
  height: ${props => props.height}px;
  width: ${props => props.width || "100%"};
`;

export default EventShimmer;
