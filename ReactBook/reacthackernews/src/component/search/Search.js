import React from 'react';

function Search(props) {
    const { onSubmit, onChange, searchValue } = props;
    return (
        <div className="Search">
            <form onSubmit={onSubmit}>
                <input type="text" value={searchValue} onChange={onChange}/>
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default Search;