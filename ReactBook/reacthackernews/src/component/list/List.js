import React from 'react';

function List(props) {
    const { SearchResults } = props;
    return (
        SearchResults !== null ?
        SearchResults.map((item) => 
            <div key={item.objectID} className="Search">
                <table>
                    <thead>
                        <tr>
                            <td><strong>Blog ID:</strong> {item.objectID}</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Title:</td>
                            <td><a href={item.url}>{item.title}</a></td>
                        </tr>
                        <tr>
                            <td>Author:</td>
                            <td>{item.author}</td>
                        </tr>
                        <tr>
                            <td>Points:</td>
                            <td>{item.points}</td>
                        </tr>
                        <tr>
                            <td>Comments: </td>
                            <td>{item.num_comments}</td>
                        </tr>
                    </tbody>
                </table>
                <br />
            </div>
        )
        : null
    )
}

export default List;