import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const items = [
      {
        title: 'React',
        url: 'https://reactjs.org/',
        author: 'Jordan Walke',
        objectID: 0,
        points: 4,
        num_comments: 25
      },
      {
        title: 'Redux',
        url: 'https://redux.js.org/',
        author: 'Dan Abramov',
        objectID: 1,
        points: 5,
        num_comments: 12
      }
    ];
    let count = 0;

    return (
      <div className="App">
        {
          items.map((item) => {
            return (
              <div key={item.objectID}>
                <h2>Blog Post #{++count}</h2>
                <span><a href={item.url}>{item.title}</a></span><br />
                <span>{item.author}</span><br />
                <span>{item.points}</span><br />
                <span>{item.num_comments}</span><br />
              </div>
            )} 
          )
        }
      </div>
    );
  }
}

export default App;
