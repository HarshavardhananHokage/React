import React from 'react';

function Search({ searchItem, onChange, onSubmit, children }) {
    return (
        <form className="inputform" onSubmit={onSubmit}>
            {children}
            <input type="text" name="search" value={searchItem} onChange={onChange}/>
            <button type="submit">{children}</button>
        </form>
    )
}

export default Search;