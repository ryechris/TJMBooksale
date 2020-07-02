import React, { Component } from "react";
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI.js';
import Book from './Book';

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      searchResults: []
    }
  }

  onChange = (q) => {
    this.setState((prevState) => ({
      query: q
    }))
    BooksAPI.search(q).then((stuff) => {
      const addedbooks = []
      console.log('stuff.error, ', stuff.error);
      console.log('stuff.items', stuff.items)
      if (stuff.error === "empty query") {
        return this.setState((prevState) => ({
          searchResults: []
        }))
      }
      stuff.forEach((item) => {
        addedbooks.push(item.id);
      })
      this.setState((prevState) => ({
        searchResults: addedbooks
      }))
      console.log('addedbooks: ' + addedbooks)
      console.log('search results: ', this.state.searchResults);
    }).catch((er) => {
      console.log('error is... ', er)
      this.setState((prevState) => ({
        searchResults: []
      }))
    });
  }

  render() {
    const { searchResults, query } = this.state;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            to='/'
            className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={(evt) => this.onChange(evt.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {searchResults.map((id) => (
              <Book key={id} id={id} handleChange={this.props.handleChange}/>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchPage;
