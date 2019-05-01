import React, { Component } from 'react';
import Search from './search/search';
import BookListApp from './listBooks/listBooks';
import './app.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      query: "",
      printType: "",
      filter: "",
      error: "",
      results: {}
    };
    this.callbacks = {
      queryChanged: this.queryChanged,
      typeChanged: this.typeChanged,
      filterChanged: this.filterChanged,
      renderList: this.renderList,
      handleError: this.handleError
    }
  }

  queryChanged = (query) => {
    this.setState({
     query
    })
  }

  typeChanged = (printType) => {
    this.setState({
      printType
    });
  }

  filterChanged = (filter) => {
    this.setState({
      filter
    })
  }

  renderList = (results) => {
    this.setState({
      results
    })
  }

  handleError = (error) => {
    this.setState({
      error
    })
  }

  render() {
 
    const {query, printType, filter, error} = this.state

    return (
      <main className='App'>
        <h1>Google Book Search</h1>
        <Search 
          callbacks={this.callbacks} 
          query = {query}
          printType = {printType}
          filter = {filter}
          error = {error}
        />
        {(this.state.results.items) && <BookListApp booklist = {this.state.results}/>}
      </main>
    );
  }
}

export default App;