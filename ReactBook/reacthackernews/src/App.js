import React, { Component } from 'react';
import './App.css';
import List from './component/list/List';
import Search from './component/search/Search';
import LoadProjects from './component/load/LoadProjects';

import * as api from './api/api'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      searchValue: '',
      results: null,
      page: -1,
      isLoading: false
    }

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onSubmitSearchTerm = this.onSubmitSearchTerm.bind(this);
    this.fetchSearchResultFromHN = this.fetchSearchResultFromHN.bind(this);
  }

  onSubmitSearchTerm(event) {
    event.preventDefault();
    this.setState({
      searchTerm: this.state.searchValue,
      results: null,
      page: -1
    }, this.fetchSearchResultFromHN)
    
  }

  onSearchTextChange(event) {
    this.setState({
      searchValue: event.target.value
    })
  }
  
  onClickLoadMore() {

  }

  fetchSearchResultFromHN() {
    const { searchTerm, page } = this.state;
    this.setState({
      isLoading: false
    })
    console.log("Hacker News API called with query " +this.state.searchTerm);
    // api.hackerNewsOnQuery(this.state.searchTerm).then((data) => this.setState({
    //   results: data.hits,
    //   page: data.page
    // }));
    api.hackerNewsOnQueryPage(searchTerm, page + 1).then((data) => this.paginateSearchResults(data));
  }

  paginateSearchResults(data) {
    if(this.state.results === null) {
      this.setState({
        results: data.hits,
        page: data.page,
        isLoading: Boolean(!this.results)
      })
    } else {
      this.setState({
        results: [...this.state.results, ...data.hits],
        page: data.page,
        isLoading: true
      })
    }
    
  }

  render() {
    const { searchValue, results, isLoading } = this.state;
    return (
      <div className="App">
        <h2>Hacker News Search</h2>
        <Search 
          onSubmit={this.onSubmitSearchTerm} 
          onChange={this.onSearchTextChange} 
          searchValue={searchValue} />
        <List SearchResults={results}/>
        {
          results == null ? null : <LoadProjects onClick={this.fetchSearchResultFromHN} isLoading={isLoading}/>
        }
        
      </div>
    )
  }
}

export default App;