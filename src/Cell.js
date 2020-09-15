import React, { Component } from 'react'

export default class Cell extends Component{
    constructor(props){
        super()
        this.state = {
            color: props.value
        }
    }
    // equivalent as above
    // state = {
    //     color: this.props.value
    // }

    changeColor = () => {
        this.setState({
            color: '#333'
        })
    }
    render(){
        debugger
        return (
            <div 
            className = "cell" 
            style = {{backgroundColor: this.state.color}} 
            onClick={this.changeColor}>
            </div>
        )
    }
}

