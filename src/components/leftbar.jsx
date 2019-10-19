import React from "react";
import styled from "styled-components";
import Collapsible from './collapsible'
import {islands, resorts} from './store'

const SidebarContainer = styled.div`
margin-top: 10px;
width: 15%;
border 0.5px solid black;
height: 60vh;
margin-left: 10px;
border-radius: 3px;
// position: fixed;
// top: 165px;
// left: 0px;
// right: 10px;
padding: 5px;
overflow-y: auto;


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
const SidebarText = styled.div`
font-family: "Lobster", cursive;
  font-size: 14pt;
  color: white;
  letter-spacing: 3px;
  margin: 2px 5px;
  cursor: pointer;
  text-shadow: -1px -1px 0 #000,
		1px -1px 0 #000,
		-1px 1px 0 #000,
    1px 1px 0 #000;
    margin-left: 10px;
`

const TitleTest = styled.div`
font-family: "Lobster", cursive;
  font-size: 16pt;
   letter-spacing: 3px;
  margin: 2px 5px;
  text-decoration: underline;
`



export const Sidebar = props => {

  let islandsArray = Object.keys(islands).map(id=> islands[id])
  let resortsArray = Object.keys(resorts).map(id => resorts[id])
  let details = islandsArray.map(island => (
    <Collapsible 
        name={island.name}> 
        <ul>
          {resortsArray.map(resort => (
            resort.islandId === island.id ? <li key={resort.id}>{resort.name}</li> : ""
            ))}
        </ul>
            </Collapsible>
    
  ))
   
  return (

    <SidebarContainer>
          <TitleTest>The Islands</TitleTest>
        <SidebarText>
           {details}
           
        </SidebarText>
    </SidebarContainer>
  );
};
