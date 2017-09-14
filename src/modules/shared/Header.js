import styled from 'styled-components';
import { Link } from "react-router-dom";

export const HeaderLink = styled(Link)`color: white;`;

const Header = styled.div`
  padding: 20px 0;
  background: black;
  position: fixed;
  z-index: 9;
  left: 0;
  top: 0;
  width: 100%;
`;

export default Header;