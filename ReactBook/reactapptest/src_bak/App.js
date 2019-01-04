import React, { Component } from 'react';
import './App.css';

import List from './List';
import Search from './Search';
import Button from './Button';

const DEFAULT_SEARCH_TERM = 'redux';
const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const QUERY_PARAM = 'query=';
const PAGE_PARAM = 'page=';

class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: DEFAULT_SEARCH_TERM,
      result: null,
      page: 0
    }

    this.onSearchResult = this.onSearchResult.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
    this.onChangeSearchKey = this.onChangeSearchKey.bind(this);
    this.fetchDataFromHacker = this.fetchDataFromHacker.bind(this);
  }

  onSearchResult(searchResult) {
    const { hits } = searchResult;
    const old_hits = this.state.result !== null ? this.state.result.hits : [];
    let updatedList = [...old_hits, ...hits];

    searchResult = {...searchResult, hits: updatedList};
    
    this.setState({
      result: searchResult
    });
    //console.log(this.state.result);
  };

  onSearchSubmit(event) {
    event.preventDefault();
    const { searchTerm } = this.state;
    this.fetchDataFromHacker(searchTerm);
  }

  fetchDataFromHacker(searchTerm, page = 0) {
    const url = `${PATH_BASE}${PATH_SEARCH}?${QUERY_PARAM}${searchTerm}&${PAGE_PARAM}${page}`
    console.log(url);
    fetch(url)
      .then(response => response.json())
      .then(result => this.onSearchResult(result))
      .catch(error => error);
  }

  onChangeSearchKey(event) {
    this.setState({searchTerm: event.target.value});
  }

  onDismiss(itemId) {
    let updatedHitsList = this.state.result.hits.filter(item => item.objectID !== itemId);
    //console.log(updatedHitsList);
    this.setState({
      result: { ...this.state.result, hits: updatedHitsList }
    })
  }

  componentDidMount() {
    const searchTerm = this.state.searchTerm;
    this.fetchDataFromHacker(searchTerm);
  }

  render() {
    const { searchTerm, result } = this.state;
    const page = (result && result.page) || 0;
    return (
      <div className="page">
        <div className="interactions">
          <Search searchItem={searchTerm} onChange={this.onChangeSearchKey} onSubmit={this.onSearchSubmit}>
            <label htmlFor="search">Search</label>
          </Search>
          {
            result ? 
              <List blogList = {result.hits} 
                    searchItem={searchTerm} 
                    isSearched={this.isSearched} 
                    onDismiss={this.onDismiss}/>
              : <h1>Loading...</h1>
          }
          <Button onClick={() => this.fetchDataFromHacker(searchTerm, page + 1)} text="More Articles"/>
        </div>
      </div>
    )
  }
}

export default App;