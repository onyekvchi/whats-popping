import styled from "styled-components";

export const LoginTitle = styled.h1`
  text-align: center;
  font-size: 2.4rem;
  font-family: "TiemposWeb";
  margin-bottom: 30px;
  margin-top: 120px;
`;

export const Input = styled.input`
  appearance: none;
  padding: 15px 20px 12px;
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  display: block;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 3px;
  font-size: 1.4rem;
  margin-bottom: 8px;
  outline: none;
  transition: all 300ms;
  font-family: "SofiaWeb";
  &:focus {
    border-color: rgba(0, 0, 0, 0.7);
  }
`;

export const Error = styled.div`
  padding: 15px;
  font-size: 1.4rem;
  background-color: #FDF3F4;
  color: #CD1919;
  border: 1px solid #FFA8A8;
  border-radius: 3px;
  margin: 8px auto;
  max-width: 300px;
  text-align: center;
  transition: all 300ms;
  &:empty {
    opacity: 0;
    height: 0;
    pointer-events: none;
    padding: 0;
  }
`

export const Button = styled.button`
  appearance: none;
  padding: 15px 20px 12px;
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  display: block;
  border: none;
  border-radius: 3px;
  font-size: 1.4rem;
  margin-bottom: 8px;
  outline: none;
  transition: all 300ms;
  font-family: "SofiaWeb";
  text-align: center;
  background: #007acc;
  background: #121212;
  color: white;
  &:disabled {
    opacity: 0.4;
  }
`;
