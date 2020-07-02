import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import ListShelves from './ListShelves';
import SearchPage from './SearchPage';
import * as BooksAPI from './BooksAPI.js';

// const availablebooks = ["0875525938", "9780882703305", "0840741650"];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentlyReading: [],
    }
  }

  getBooks = () => {
    this.setState((prevState) => ({
      currentlyReading: BooksAPI.getAll(),
    }))
  }

  componentDidMount() {
    this.getBooks();
  }

  handleChange = (book, shelf) => {
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ListShelves shelves={this.state} handleChange={this.handleChange}/>
        )}/>
        <Route exact path='/search' render={() => (
          <SearchPage handleChange={this.handleChange}/>
        )}/>
      </div>
    )
  }
}

export default App;
