import styled from "styled-components";

const HeaderLink = styled.a`
  font-weight: 600;
  font-size: 1.2rem;
  text-transform: uppercase;
  margin-right: 30px;
  display: inline-block;
  padding: 15px 0px 17px 0px;
  color: ${props => (props.active ? "black" : "rgba(0, 0, 0, 0.4)")};
  cursor: pointer;
  transition: all 300ms;
  position: relative;
  will-change: width;

  &:after {
    position: absolute;
    height: 3px;
    width: ${props => (props.active ? "100%" : 0)};
    bottom: 0;
    left: 0;
    background-color: black;
    transition: width 300ms;
    content: '';
  }

  &:last-child {
    margin-right: 0;
  }
  @media screen and (max-width: 450px) {
    margin-right: 20px;
  }
`;

export default HeaderLink;
