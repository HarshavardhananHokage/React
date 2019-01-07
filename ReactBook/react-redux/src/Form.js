import { connect } from 'react-redux';
import React, { Component } from 'react';
import uuidv1 from 'uuid';
import { addArticle } from './actions/index';


class ConnectedForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        let title = this.state.title;
        let uuid = uuidv1();
        this.setState({
            title: ""
        });
        this.props.addArticles({payload: title, id: uuid})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" id="title" onChange={this.handleChange} /><br />
                <button type="submit">Add Article</button>
            </form>
        )
    }
}

const matchDispatchToProps = (dispatch) => {
    return { addArticles: article => dispatch(addArticle(article)) };
}

const Form  = connect(null, matchDispatchToProps)(ConnectedForm);

export default Form;