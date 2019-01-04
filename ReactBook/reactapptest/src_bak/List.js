import React from 'react';
import Button from './Button';

function List({blogList, searchItem, isSearched, onDismiss}) {
    return (
        <div className="table">
        {
            blogList
            .map((item) => 
              <div key={item.objectID} className="table-row">
                <span>Blog Post #</span>
                <span><a href={item.url}>{item.title}</a></span><br />
                <span>{item.author}</span><br />
                <span>{item.points}</span><br />
                <span>{item.num_comments}</span><br />
               {/*} <button onClick={() => onDismiss(item.objectID)}>Delete Blog</button> */}
               <Button onClick={() => onDismiss(item.objectID)} text="Delete Me" className="button-inline" />
              </div>
          )
        }
        </div>
    )
}

export default List;