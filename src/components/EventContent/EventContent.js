import styled from "styled-components";

const EventTitle = styled.h1`
  font-family: 'TiemposWeb';
  font-size: 3.6rem;
  line-height: 1.4;
  margin-top: 45px;
  margin-bottom: 20px;
`;

const EventSubTitle = styled.h2`
  font-family: "TiemposWeb";
  font-size: 2.4rem;
  line-height: 1.1;
  margin-bottom: 15px;
  color: black;
`;

const EventDetail = styled.div`
  margin-top: 15px;
  padding-left: 32px;
  position: relative;
`;

const EventIcon = styled.div`
  width: 20px;
  height: 20px;
  max-height: 20px;
  position: absolute;
  top: 40%;
  transform: translateY(-50%);
  left: 0;

  svg {
    height: 100%;
    width: 100%;
  }
`;

const EventDivider = styled.div`
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  margin: 30px 0;
`;

const EventDescription = styled.div`line-height: 1.6;`;

export {
  EventTitle,
  EventSubTitle,
  EventDetail,
  EventIcon,
  EventDivider,
  EventDescription
};
