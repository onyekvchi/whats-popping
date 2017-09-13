import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "center")};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "space-between"};
  height: ${({ height }) => height};
  width: ${props => props.width};
`;

export default Flex;