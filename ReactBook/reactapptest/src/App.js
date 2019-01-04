import React, { Component } from 'react'
//import Clock from './comps/Clock';
//import Warning from './comps/Warning';;
//import Select from './comps/Select';
import MultipleInputs from './comps/MultipleInputs';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: null
    }


  }

  render() {
    return (
      <div>
        <MultipleInputs />
      </div>
    )
  }
}

export default App;