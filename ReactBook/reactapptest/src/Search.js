import React from 'react';

function Search({ searchItem, onChange, children }) {
    return (
        <form className="inputform">
            {children}
            <input type="text" name="search" value={searchItem} onChange={onChange}/>
        </form>
    )
}

export default Search;