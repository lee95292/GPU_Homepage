import React from "react";
import styled from "styled-components";
import About from "./About";
import Project from "./Project";

const HomeContainer = styled.div`
  position: absolute;
`;
const TopBar = styled.ul`
  background-color: #00cec9;
  border-radius: 10px;

  display: flex;
  justify-content: left;
  margin: 0 0 0 0;
`;

const TopBarItem = styled.li`
  list-style: none;
  padding: 1rem 2rem 1rem 1rem;
`;
const Home = () => {
  return (
    <div>
      <TopBar>
        <TopBarItem>About</TopBarItem>
        <TopBarItem>Activities</TopBarItem>
        <TopBarItem>contact</TopBarItem>
      </TopBar>
      <hr />
      <About />
      <hr />
      <Project />
    </div>
  );
};

export default Home;
