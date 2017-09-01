import React from "react";
import Container from "./../../styles/Container";
import FadeIn from "./../../styles/FadeIn";
import Side from "./../../styles/Side";
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
