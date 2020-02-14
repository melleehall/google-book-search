import React, { Component } from 'react';
import './App.css';

import Filters from '../src/Filters/Filters';
import FilterableList from '../src/FilterableList/FilterableList';

export default class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        searchTerm: '',
        printType: 'all',
        filter: 'partial',
        books: [],
      };
  }

  updateSearchTerm = (term) => {
    this.setState({
      searchTerm: term
    })
  }

  setSelectedPrintType = (selected) => {
    this.setState({
      printType: selected
    });
    console.log(this.state.printType);
  }

  setSelectedBookType = (selected) => {
    this.setState({
      filter: selected
    });
    console.log(this.state.filter);
  }

  handleNewBooklist = (books) => {
    console.log('handleNewBooklist ran')
    this.setState({
      books
    })
  }

  render () {
    return (
      <div>
        <header>
          <h1>Google Book Search</h1>
        </header>
        <Filters 
          searchTerm={this.state.searchTerm}
          handleUpdate={term => this.updateSearchTerm(term)}
          printType={this.state.printType}
          filter={this.state.filter}
          newBooklist={books => this.handleNewBooklist(books)}
          changePrintTypeHandler={selected => this.setSelectedPrintType(selected)}
          changeBookTypeHandler={selected => this.setSelectedBookType(selected)}
        />
        <FilterableList 
          books={this.state.books}
        />
      </div>
    )
  }
}