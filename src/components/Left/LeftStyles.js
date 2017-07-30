import styled from "styled-components";

const LeftWrap = styled.div`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  z-index: 4;
  padding: 75px 15px;
  margin: 0 auto;
  background-color: black;
  color: white;
  border: 3px solid white;
  text-align: center;
  max-width: 100%;
`;

const LeftTitle = styled.h1`
  font-size: 5rem;
  font-family: "TiemposWeb";
  line-height: 1.2;
  @media screen and (max-width: 1000px) {
    font-size: 3rem;
  }
`;

const LeftDivider = styled.div`
  height: 3px;
  width: 50px;
  background-color: white;
  margin: 36px auto;
`;

const LeftCopy = styled.p`
  max-width: 30rem;
  font-size: 1.6rem;
  margin: 0 auto;
`;

export { LeftWrap, LeftTitle, LeftDivider, LeftCopy };
