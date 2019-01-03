import React from 'react';

function LoadProjects(props) {

    const { isLoading, onClick } = props;
    return (
        isLoading ?
        <button onClick={onClick}>Load More</button> 
        : <p>Loading...</p>
    )
}

export default LoadProjects;