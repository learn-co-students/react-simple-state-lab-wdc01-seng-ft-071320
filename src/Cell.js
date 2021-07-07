import React, { Component } from 'react'

 class Cell extends Component {
    constructor(props) {
        super()
            this.state = {
                color: props.value

            }
 }

 clickListener = () => {
     const newColor = '#333'
     
     this.setState ({
         color: newColor
        })
 }


    render() {
        return (
            <div className='cell' onClick={this.clickListener} style={{backgroundColor: this.state.color}} >
            </div>
        )
    }
}

export default Cell
