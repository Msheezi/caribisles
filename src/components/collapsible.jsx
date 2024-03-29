import React from 'react'
import styled from "styled-components";

export default class Collapsible extends React.Component {
    constructor(props){
        super(props)

        this.state = {open: false}
        this.togglePanel = this.togglePanel.bind(this)
    }



    togglePanel(e){
        this.setState({open: !this.state.open})
    }

    

    render(){

        return (
        <div>
                <div onClick={(e) => this.togglePanel(e)} > <i class="fas fa-caret-right"></i> {this.props.name}</div>
            {this.state.open ? (<div>{this.props.children}</div>): null}
        </div>)

    }
}
