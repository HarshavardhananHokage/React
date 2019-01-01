import React, { Component } from 'react';
import './App.css';
import items from './items';
import Search from './Search';
import List from './List';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blogList: items,
      searchItem: ''
    }

    this.onDismiss = this.onDismiss.bind(this);
    this.onChangeSearchKey = this.onChangeSearchKey.bind(this);
  }

  onDismiss(itemId) {
    //console.log("Item id: " +itemId);
    let updatedList = this.state.blogList.filter(item => item.objectID !== itemId);
    this.setState({
      blogList: updatedList
    })
  }

  onChangeSearchKey(event) {
    this.setState({searchItem: event.target.value});
  }

  isSearched(searchTerm) {
    return function(item) {
      console.log("Search: " +item.title.toLowerCase().includes(searchTerm));
      return item.title.toLowerCase().includes(searchTerm.toLowerCase());
    }
  }

  render() {
    let { searchItem, blogList } = this.state;
    return (
      <div className="page">
        <div className="interactions">
          <Search searchItem={searchItem} onChange={this.onChangeSearchKey}>
            <label htmlFor="search">Search item: </label>
          </Search>
        </div>
          <List blogList = {blogList} searchItem={searchItem} isSearched={this.isSearched} onDismiss={this.onDismiss}/>
      </div>
    );
  }
}

export default App;
