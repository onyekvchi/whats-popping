import styled, { css } from "styled-components";

const Input = styled.input`
  box-sizing: border-box;
  font-size: 14px;
  padding: 15px;
  border-radius: 3px;
  border: none;
  box-shadow: inset 0 0 0 1px #ddd;
  width: 100%;
  outline: none;
  transition: all 200ms;
  margin-bottom: 15px;
  font-family: "Futura";
  font-weight: normal;
  ${props =>
    props.error &&
    css`
      box-shadow: inset 0 0 0 1px red;
  `};

  ${props =>
    props.sm &&
    css`
      display: inline-block;
      width: ${props => props.width || "auto"};
      padding: 10px 15px;
      font-size: 1.4rem;
      
  `};

  &:focus {
    box-shadow: inset 0 0 0 1px black;
    ${props => props.error && css`box-shadow: inset 0 0 0 1px red; `};
  }
`;

export default Input;
