import { connect } from 'react-redux';
import React from 'react';

const mapStateToProps = state => {
    return { articles: state.articles };
};

const ConnectedList = ({ articles }) => (
    <ul>
        {
            articles.map(item => {
                return <li key={item.id}>{item.payload}</li>
            })
        }
    </ul>
);
const List = connect(mapStateToProps)(ConnectedList);
export default List;