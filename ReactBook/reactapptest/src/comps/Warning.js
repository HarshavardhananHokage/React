import React, { Component } from 'react'

class Warning extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showWarning: true
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            showWarning: !this.state.showWarning
        })
    }

    render() {
        return (
            <div>
                <ShowWarning showWarning={this.state.showWarning}/>
                <button onClick={this.handleClick}>{ this.state.showWarning ? 'Hide' : 'Show' }</button>
            </div>
        )
    }
}

function ShowWarning(props) {

    if(!props.showWarning) {
        return null;
    }
    return (
        <div>
            <p>This is a warning</p>
        </div>
    )
}

export default Warning
