import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Device } from "util/style/standard";
import SubMenu from "./SubMenu";
import { CommonStyle } from "util/style/commonStyle";
const MenuContainer = styled.ol`
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.2);
  // background-color: #00b894;
  margin: 0 0 0 0;
  width: 100%;
  padding-left: 0;
`;

const MenuItem = styled.li`
  font-size: 1.2rem;
  padding: 0.5rem 0.7rem 1rem 0.7rem;
  ${CommonStyle.MenuLink}
  &:nth-child(1) {
    flex: 7;
  }
  &:nth-child(2) {
    flex: 4;
  }
  &:nth-child(3) {
    flex: 12;
  }
  @media ${Device.tablet} {
    font-size: 4rem;
    padding: 3rem 1rem 3rem 1rem;
  }
`;

const Menu = () => {
  const activeStyle = {
    color: "black"
  };

  return (
    <div>
      <MenuContainer>
        <MenuItem>Logo</MenuItem>
        <MenuItem>
          <NavLink exact to="/" activeStyle={activeStyle}>
            Home
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink exact to="articles" activeStyle={activeStyle}>
            Articles
          </NavLink>
        </MenuItem>
      </MenuContainer>
      <SubMenu />
    </div>
  );
};

export default Menu;
