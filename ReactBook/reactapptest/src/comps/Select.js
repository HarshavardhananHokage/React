import React, { Component } from 'react'

class Select extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         value: "apple"
      }

      this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event) {
        event.preventDefault();

        this.setState({
            value: event.target.value
        })
    }
    
  render() {
    return (
      <div>
        <select value={this.state.value} onClick={this.handleClick}>
            <option value="apple">Apple</option>
            <option value="orange">Orange</option>
            <option value="pomegranate">Pomegranate</option>
            <option value="pineapple">Pineapple</option>
        </select>
        <p>{this.state.value}</p>
      </div>
    )
  }
}

export default Select
