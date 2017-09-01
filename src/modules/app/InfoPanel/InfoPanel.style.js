import styled from "styled-components";

const Wrap = styled.div`
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

const Title = styled.h1`
  font-size: 5rem;
  font-family: ${props => props.theme.serif};
  line-height: 1.2;
  @media (max-width: 1000px) {
    font-size: 3rem;
  }
`;

const Divider = styled.div`
  height: 4px;
  width: 50px;
  background-color: ${props => props.theme.background};
  margin: 36px auto;
`;

const Copy = styled.p`
  max-width: 30rem;
  font-size: 1.6rem;
  margin: 0 auto;
`;

export { Wrap, Title, Divider, Copy };
