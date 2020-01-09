import React, { Component } from "react";
<<<<<<< HEAD
import { CommonStyle } from "util/style/commonStyle";
import styled from "styled-components";

const Title = styled.h1`
  ${CommonStyle.Heading}
`;
=======
import { Heading } from "util/style/commonStyle";
import { H1 } from "@blueprintjs/core";
>>>>>>> bp

export class Project extends Component {
  render() {
    return (
      <div>
<<<<<<< HEAD
        <Title id="project">Projects & Awards</Title>
=======
        <H1>Projects & Awards</H1>
>>>>>>> bp
        Unity PUBG project..
      </div>
    );
  }
}

export default Project;
