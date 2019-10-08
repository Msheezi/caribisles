import React from "react";
import styled from "styled-components";
import Collapsible from './collapsible'

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

const islands = {
  0: {name: "St.Kits", id: 0},
  1: { name: "Barbados", id: 1},
  2: { name: "St.Lucia", id: 2}
}

const resorts = {
  0: { name: "First Resort", islandId: 0} ,
  1: { name: "Second Resort", islandId: 0 } ,
  2: { name: "Third Resort", islandId: 1 } ,
  3: { name: "Fourth Resort", islandId: 1 } ,
  4: { name: "Fifth Resort", islandId: 2 } 
}



export const Sidebar = props => {

  let islandsArray = Object.keys(islands).map(id=> islands[id])
  // let islandsTitle = Object.keys
  let resortsArray = Object.keys(resorts).map(id => resorts[id])
  let details = islandsArray.map(island => (
    <div>
        <h3>{island.name}</h3>
        <ul>
          {resortsArray.map(resort => (
            resort.islandId === island.id ? <li>{resort.name}</li> : ""
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
