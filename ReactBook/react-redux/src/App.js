import React from 'react'
//import Clock from './comps/Clock';
//import Warning from './comps/Warning';;
//import Select from './comps/Select';
import List from './List';
import Form from './Form';

const App = () => (
  <div>
    <div>
      <h2>List of Articles</h2>
      <List />
      <h3>Add a new article</h3>
      <Form />
    </div>
  </div>
);

export default App;