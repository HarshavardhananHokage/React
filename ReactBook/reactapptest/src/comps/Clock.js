import React from 'react'

class Clock extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            date: new Date()
        }
    }

    componentDidMount() {
        //this.timer = setInterval(() => this.setState({ date: new Date() }), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    returnTimeString() {
        this.timer = setInterval(() => this.setState({ date: new Date() }), 1000);   
    }
    render() {
        return (
            <div>
                <h1 onClick={() => this.returnTimeString()}>{this.state.date.toLocaleTimeString()}</h1>
            </div>
        )
    }
}

export default Clock;