import React, { Component } from 'react';

export default class Cell extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.value
    }
  }

  setColorOnClick =() => {
    this.setState({
      color: '#333'
    })
    this.render()
  }
  
  render() {
    return (
      <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.setColorOnClick}>
      </div>
    )
  }
}