import React, { Component } from 'react'

class MultipleInputs extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: 'Drake',
            age: 24,
            job: 'Ninja'
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event) {
        event.preventDefault();
        let prop = event.target.name;
        this.setState({
            [prop]: event.target.value
        })
    }

    render() {
        const { name, age, job } = this.state;
        return (
            <div>
                <form>
                    <input type="text" name="name" value={name} onChange={this.handleClick} /><br />
                    <input type="text" name="age" value={age} onChange={this.handleClick} /><br />
                    <input type="text" name="job" value={job} onChange={this.handleClick} />
                </form>
            </div>
        )
    }
}

export default MultipleInputs;