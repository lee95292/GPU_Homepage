import React, { Component } from "react";
import { CommonStyle } from "util/style/commonStyle";
import styled from "styled-components";

const Title = styled.h1`
  ${CommonStyle.Heading}
`;

export class About extends Component {
  render() {
    return (
      <div>
        <Title>About GPU..</Title>
        GPU : Game Programming in University is..
<<<<<<< HEAD
        <img src="#" />
=======
        <br /> <img src="#" />
>>>>>>> bp
      </div>
    );
  }
}

export default About;
