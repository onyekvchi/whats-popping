import React from "react";

import Container from "../Container";
import FadeIn from "../FadeIn";
import Side from "../Side";
import { LeftTitle, LeftWrap, LeftDivider, LeftCopy } from "./LeftStyles";

const Left = () => {
  return (
    <Side float="left">
      <FadeIn>
        <LeftWrap>
          <Container size="sm">
            <LeftTitle>
              What‘s<br />Popping?
            </LeftTitle>
            <LeftDivider />
            <LeftCopy>
              All the events worth looking out for this weekend in Lagos.
            </LeftCopy>
          </Container>
        </LeftWrap>
      </FadeIn>
    </Side>
  );
};

export default Left;
