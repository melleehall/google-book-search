import React, { Component } from 'react';
import './App.css';

import Filters from '../src/Filters/Filters';
import FilterableList from '../src/FilterableList/FilterableList';

export default class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        searchTerm: 'Mockingbird',
        printType: 'all',
        filter: 'paid-ebooks',
        books: [],
      };
  }

  componentDidMount() {
    const url = this.generateURL();
    console.log(this.state.theURL);
    fetch(url)
    .then(res => {
      if(!res.ok) {
        throw new Error('Something went wrong')
      }
      return res;
    })
      .then(response => response.json())
      .then(data => {
        const books = data['items']
        this.setState({
          books
        })
      })
      .catch(err => {
        this.setState({
          error: err.message
        })
      })
  }


  generateURL= () => {
    const endpoint = 'https://www.googleapis.com/books/v1/volumes/?key=';
    const key1 = 'AIzaSyC72GJGPn4Oxjuw1iq-';
    const key2 ='uUqSF-k01TjiigQ';
    const fullURL = `${endpoint}${key1}${key2}&q=${this.state.searchTerm}&&printType=${this.state.printType}&filter=${this.state.filter}`
    return fullURL
  }

  updateSearchTerm = (term) => {
    this.setState({
      searchTerm: term
    })
    console.log(this.state.searchTerm);
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

  render () {
    return (
      <div>
        <header>
          <h1>Google Book Search</h1>
        </header>
        <Filters 
          searchTerm={this.state.searchTerm}
          handleUpdate={term => this.updateSearchTerm(term)}
          handleSubmit={term => this.generateURL(term)}
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