import React, { Component } from "react";
import styled from "styled-components";
import { Device } from "util/style/standard";
import { CommonStyle } from "util/style/commonStyle";

const TopBar = styled.ul`
  display: flex;
  justify-content: left;
  margin: 0 0 0 0;
  padding-left: 28rem;
  @media ${Device.tablet} {
    padding-left: 3rem;
  }
`;

const TopBarItem = styled.li`
  ${CommonStyle.MenuLink}
  list-style: none;
  padding: 1rem 2rem 1rem 1rem;
  font-size: 1.4rem;
  font-weight: 600;
`;

export class SubMenu extends Component {
  render() {
    return (
      <div>
        <TopBar>
          <TopBarItem>
            <a href="#about">About</a>
          </TopBarItem>
          <TopBarItem>
            <a href="#project">Project</a>
          </TopBarItem>
          <TopBarItem>
            <a href="#contact">Contact</a>
          </TopBarItem>
        </TopBar>
      </div>
    );
  }
}

export default SubMenu;
