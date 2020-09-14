import React, {Component} from 'react';

export default class Cell extends Component {
    constructor(props){
        super()
        this.state = {
            color: props.value
        }
    }

    colorChanger = () => {
        // const newColor = '#333'
        this.setState({
          color: '#333'
        })
      }

    render(){
        return(
        <div onClick={this.colorChanger} className="cell" style={{backgroundColor:`${this.state.color}`}}>
            {this.state.color}
        </div>
        )
    }
}