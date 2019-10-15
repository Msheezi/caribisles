import React from "react";
import styled from "styled-components";

const Nav = styled.div`
  width: 100%;
  height: 50px;
  background-color: transparent;
  z-index: 1;
  text-align: center;
  // border: 1px solid black;
  // box-shadow: 1px 1px #454343;
  padding-top: 10px;
  position: fixed;
  top: 0;
  overflow: hidden;
`;

const MySpan = styled.span`
  vertical-align: center;
  font-family: "Lobster", cursive;
  font-size: 25pt;
  color: white;
  letter-spacing: 3px;
  text-shadow: -1px -1px 0 #000,
		1px -1px 0 #000,
		-1px 1px 0 #000,
		1px 1px 0 #000;
`;






export const Navbar = props => {
  return (
    <Nav>
      <MySpan>CaribIsles.com</MySpan>
        
    </Nav>
  );
};
