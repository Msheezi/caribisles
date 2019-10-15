import React from "react";
import styled from "styled-components";
import Collapsible from './collapsible'
import {islands, resorts} from './store'

const SidebarContainer = styled.div`
margin-top: 10px;
width: 15%;
border 0.5px solid black;
height: 80vh;
margin-left: 0px;
border-radius: 3px;
position: fixed;
top: 65px;
left: 0;
margin-left: 5px;
`;

const Accordian = styled.div`
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
  transition: 0.4s;
`
const Panel = styled.div`

  padding: 0 18px;
  background-color: white;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;

`
const SidebarText = styled.span`
font-family: "Lobster", cursive;
  font-size: 18pt;
  color: white;
  letter-spacing: 3px;
  text-shadow: -1px -1px 0 #000,
		1px -1px 0 #000,
		-1px 1px 0 #000,
    1px 1px 0 #000;
    margin-left: 10px;
`



export const Sidebar = props => {

  let islandsArray = Object.keys(islands).map(id=> islands[id])
  // let islandsTitle = Object.keys
  let resortsArray = Object.keys(resorts).map(id => resorts[id])
  let details = islandsArray.map(island => (
    <div>
        <SidebarText key={island.id}>{island.name}</SidebarText>
        <ul>
          {resortsArray.map(resort => (
            resort.islandId === island.id ? <li key={resort.id}>{resort.name}</li> : ""
          ))}
        </ul>
    </div>
  ))

  // let details =  resortsArray.map(resort=> (
  //   <div> 
  //     <h3>{}</h3>
  //   </div>
  // ))

  return (

    <SidebarContainer>
        {/* <div>Islands</div> */}
          <Collapsible>
            {details}
            {/* <p style={{ color: "black" }}>Resort 1</p>
            <p style={{ color: "black" }}>Resort 2</p>
               */}
            
          </Collapsible>

    </SidebarContainer>
  );
};
