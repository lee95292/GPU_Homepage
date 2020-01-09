import React from "react";
import {
  Alignment,
  Button,
  Classes,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
  Popover,
  Position
} from "@blueprintjs/core";
import SubMenu from "./SubMenu";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Device } from "util/style/standard";
const navBar = {
  height: "5rem",
  padding: "3rem 3rem 3rem 2rem"
};
const navGroup = {
  height: "100%",
  width: "100%"
};

const buttonStyle = {
  fontSize: "2rem",
  margin: "1rem 1rem 1rem 1rem"
};

export class Menu extends React.Component {
  render() {
    return (
      <div>
        <Navbar style={navBar}>
          <NavbarGroup align={Alignment.LEFT} style={navGroup}>
            <NavbarHeading>GPU</NavbarHeading>
            <NavbarDivider />
            <NavLink exact to="/" isActive={this.activatedLink}>
              <Popover
                content={<SubMenu>...</SubMenu>}
                position={Position.BOTTOM_RIGHT}
              >
                <Button
                  className={Classes.MINIMAL}
                  icon="home"
                  text="Home"
                  style={buttonStyle}
                />
              </Popover>
            </NavLink>
            <NavLink exact to="articles" isActive={this.activatedLink}>
              <Button
                className={Classes.MINIMAL}
                icon="document"
                text="Article"
                large={true}
                style={buttonStyle}
              />
            </NavLink>
          </NavbarGroup>
        </Navbar>
      </div>
    );
  }
}
export default Menu;
