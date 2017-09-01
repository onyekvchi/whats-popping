import styled from "styled-components";

const EventsHeaderStyle = styled.div`
  background-color: white;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 3;
  border-bottom: 1px solid rgba(0, 0, 0, 0.04);
  font-size: 1.4rem;
`;

const EventsHeaderLinkWrapper = styled.div`
  overflow-x: scroll;
  white-space: nowrap;
`;

export { EventsHeaderStyle, EventsHeaderLinkWrapper };
