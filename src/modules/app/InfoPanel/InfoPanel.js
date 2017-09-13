import React from "react";
import Container from "./../../shared/Container";
import FadeIn from "./../../shared/FadeIn";
import Side from "./../../shared/Side";
import { Title, Wrap, Divider, Copy } from "./InfoPanel.style.js";

const InfoPanel = () => {
  return (
    <Side float="left">
      <FadeIn>
        <Wrap>
          <Container size="sm">
            <Title>
              What‘s<br />Popping?
            </Title>
            <Divider />
            <Copy>
              All the events worth looking out for this weekend in Lagos.
            </Copy>
          </Container>
        </Wrap>
      </FadeIn>
    </Side>
  );
};

export default InfoPanel;
