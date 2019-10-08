import React from "react";
import styled from "styled-components";

const Nav = styled.div`
  width: 100%;
  height: 50px;
  background-color: #fff;
  z-index: 1;
  text-align: center;
  border: 1px solid black;
  box-shadow: 2px 2px #edeaea;
  padding-top: 10px;
  position: fixed;
  top: 0;
  overflow: hidden;
`;

const MySpan = styled.span`
  vertical-align: center;
  font-family: "Lobster", cursive;
  font-size: 16pt;
`;

export const Navbar = props => {
  return (
    <Nav>
      <MySpan>CaribIsles.com</MySpan>
    </Nav>
  );
};
