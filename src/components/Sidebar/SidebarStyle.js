import styled, { css } from "styled-components";

const SidebarStyle = styled.div`
  width: 61.803398875%;
  height: 100%;
  position: fixed;
  right: -100%;
  z-index: 3;
  background-color: #feb239;
  transition: all 450ms cubic-bezier(0.55, 0.055, 0.675, 0.19);

  ${props =>
    props.active &&
    css`
    right: 0;
    transition: all 350ms cubic-bezier(.04, .37, .03, .96);
  `}
}`;

export default SidebarStyle;
