import React from "react";
import { Shimmer, ShimmerBackground, ShimmerMask } from "../../shared/Shimmer";

const EventShimmer = ({ event }) => {
  const height = 32;
  const largeHeight = 64;
  const spacing = 12;
  const largeSpacing = 24;
  return (
    <Shimmer borderBottom marginTop="60px">
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

export default EventShimmer;
