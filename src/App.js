import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./navbar";
import { Sidebar } from "./leftbar";
import styled from 'styled-components'

const MainContent = styled.div`
background: transparent;
width: 100%;
height: 100%;
`

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    <MainContent>

      <Navbar></Navbar>
      <Sidebar></Sidebar>

    </MainContent>

    
   
  )
}

export default App;
