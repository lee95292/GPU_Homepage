import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { styled, createGlobalStyle } from "styled-components";
import { Device } from "util/style/standard";

const RootContainer = createGlobalStyle`
`;

const Root = () => {
  return (
    <BrowserRouter>
      <RootContainer></RootContainer>
      <App theme={"green"} />
    </BrowserRouter>
  );
};

export default Root;
