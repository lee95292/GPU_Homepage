import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const MenuContainer = styled.ol`
  display: flex;
`;

const MenuItem = styled.li`
  liststyle: none;
  font-size: 1.3rem;
  padding: 3px 10px 3px 10px;
  @include;
`;

const Menu = () => {
  const activeStyle = {
    fontSize: "1.4rem"
  };
  return (
    <div>
      <MenuContainer>
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
    </div>
  );
};

export default Menu;
