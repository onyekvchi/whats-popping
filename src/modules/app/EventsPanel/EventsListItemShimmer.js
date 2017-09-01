import React from "react";
import { Shimmer, ShimmerBackground, ShimmerMask } from "./../../styles/Shimmer";

const EventItemShimmer = () => {
  const spacing = 8;
  const height = 18;
  const largeHeight = 24;

  return (
    <Shimmer height="144px">
      <ShimmerBackground height={`${largeHeight + spacing * 2 + height * 2}px`}>
        <ShimmerMask height={largeHeight} width="200px" />
        <ShimmerMask height={spacing} top={largeHeight} />
        <ShimmerMask height={height} width="42px" top={largeHeight + spacing} />
        <ShimmerMask height={spacing} top={largeHeight + spacing + height} />
        <ShimmerMask
          height={height}
          width="8px"
          top={largeHeight + spacing * 2 + height}
          left="48px"
        />
        <ShimmerMask
          height={height}
          width="390px"
          top={largeHeight + spacing * 2 + height}
          left="106px"
        />
      </ShimmerBackground>
    </Shimmer>
  );
};

export default EventItemShimmer;
