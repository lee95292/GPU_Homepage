import React, { Component } from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import { Home, Articles } from "./page";
import Menu from "component/Menu";
export class App extends Component {
  render() {
    return (
      <div>
        <Menu theme={this.props.theme} />
        <Route exact path="/" component={Home} />
        <Route exact path="/articles" component={Articles} />
      </div>
    );
  }
}

export default App;
