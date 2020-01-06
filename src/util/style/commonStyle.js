import styled from "styled-components";
import { Device } from "util/style/standard";

const Heading = styled.h1`
  font-size: 1.3rem;
  text-align: center;
  @media ${Device.laptop} {
    font-size: 4rem;
  }
`;
export { Heading };
