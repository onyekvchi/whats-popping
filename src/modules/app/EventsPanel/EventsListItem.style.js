import styled from "styled-components";

const EventsListItemStyle = styled.div`
  margin-bottom: 64px;
  display: block;
  @media (max-width: 450px) {
    margin-bottom: 54px;
  }
`;

const Title = styled.h1`
  font-family: ${props => props.theme.serif};
  font-size: 3rem;
  line-height: 1.4;
  @media (max-width: 450px) {
    font-size: 2.5rem;
    line-height: 1.25;
  }
`;

const Location = styled.div`
  margin-top: 10px;
  line-height: 1.5;
`;

const Detail = styled.div`
  padding-left: 24px;
  position: relative;
  margin-top: 10px;
  line-height: 1.5;
`;

const Icon = styled.div`
  width: 16px;
  height: 16px;
  position: absolute;
  top: 3px;
  left: 0;
  svg {
    height: 100%;
    width: 100%;
  }
`;

const PriceWrap = styled.div`
  ${Detail} {
    display: inline-block;
    margin-right: 24px;
  }
`;

export {
  EventsListItemStyle,
  Title,
  Location,
  Detail,
  Icon,
  PriceWrap
};
