import React from "react";
import styled from "styled-components";

const SidebarContainer = styled.div`
margin-top: 10px;
width: 20%;
border 0.5px solid black;
height: 80vh;
margin-left: 0px;
border-radius: 3px;
position: fixed;
top: 65px;
left: 0;

`;

export const Sidebar = props => {
  return (
    <SidebarContainer>
      <div>This is the sidebar</div>
    </SidebarContainer>
  );
};
