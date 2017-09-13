import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: ${props => (props.size === "sm" ? "550px;" : props.size === "md" ? "650px" : "1040px")};
  padding: ${props => props.size === "sm" && "0 45px"};
  margin: ${props => (props.float === "left" ? "0 auto 0 45px" : "0 auto")};

  @media (max-width: 1000px) {
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    padding: 0 30px;
    margin: ${props => props.float === "left" && "0 auto"};
  }
  @media (max-width: 450px) {
    padding: 0 20px;
  }
`;

export default Container;
