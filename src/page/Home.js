import React from "react";
import styled from "styled-components";
import About from "./About";
import Project from "./Project";

const HomeContainer = styled.div`
  position: absolute;
`;

const Home = () => {
  return (
    <div>
      <hr />
      <About />
      <hr />
      <Project />
    </div>
  );
};

export default Home;
