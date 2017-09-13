import styled, { css } from "styled-components";

const Table = styled.table`
  width: 100%;
`;

export const Th = styled.th`
  padding: 18px 25px;
  text-align: left;
  color: #999;
  font-weight: bold;
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
`;

export const Td = styled.td`
  padding: 18px 25px;
  text-align: left;
  vertical-align: middle;
  color: #222;
  ${props => props.sm && css`padding: 10px 20px;`};
`;

export const Tr = styled.tr`
  font-size: 1.4rem;
  tbody & {
    transition: background-color 300ms;
    border-radius: 3px;
    &:nth-child(even) {
      background-color: #f8f8f8;
    }
    &:hover {
      background-color: #f0f0f0;
      cursor: pointer;
    }
  }

  thead & {
    border-bottom: 2px solid #e4e4e4;
  }
`;

export default Table;
