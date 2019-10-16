import React from "react";
import styled from "styled-components";

const Nav = styled.div`
  width: 100%;
  height: 150px;
  background-color: transparent;
  z-index: 1;
  text-align: center;
 
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

const SubTitle = styled.span`
font-family: "Lobster", cursive;
font-size: 14pt;
color: white;
letter-spacing: 3px;
text-shadow: -1px -1px 0 #000,
1px -1px 0 #000,
-1px 1px 0 #000,
1px 1px 0 #000;
margin-top: -5px;
`

const NavButtons = styled.div`
// height: 75px;
background: transparent;
display: flex;
text-decoration: none;
width: 100vw;
overflow: hidden;
justify-content: center;
align-content: center;
`

const ButtonNav = styled.div`

padding: 5px;
border-left: 1px solid black;
border-right: 1px solid black;
vertical-align: center;
text-align: center;
&:hover {
  background-color: #F7F8FA;
  color: #1890ff;

}

`



export const Navbar = props => {
  return (
    <Nav>
      <MySpan>CaribIsles.com
        <br/>
      </MySpan>
      <SubTitle>Your Carribbean Reservations Resource</SubTitle>

      
        <br/>
      <NavButtons>
        
        <ButtonNav>Specials</ButtonNav>
        <ButtonNav>About CaribIsles</ButtonNav>
        <ButtonNav>Contact Us</ButtonNav>
        

      </NavButtons>
    </Nav>
  );
};
