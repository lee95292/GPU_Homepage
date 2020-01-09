import styled from "styled-components";
import { Device } from "util/style/standard";
<<<<<<< HEAD
=======

>>>>>>> bp
export const CommonStyle = {
  Heading: `
  font-size: 1.3rem;
  text-align: center;
  @media ${Device.tablet} {
    font-size: 4rem;
  }
  `,
  MenuLink: `
  list-style: none;
  font-weight: 600;
  a {
    text-decoration: none;
  }
  a:visited {
    color: black;
  }
  a:hover {
    color: black;
  }
  a:link {
    color: black;
  }
  `
};
