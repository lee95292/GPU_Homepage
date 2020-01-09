import React, { Component } from "react";
import { CommonStyle } from "util/style/commonStyle";
import styled from "styled-components";

const Title = styled.h1`
  ${CommonStyle.Heading}
`;

export class Project extends Component {
  render() {
    return (
      <div>
        <Title id="project">Projects & Awards</Title>
        Unity PUBG project..
      </div>
    );
  }
}

export default Project;
