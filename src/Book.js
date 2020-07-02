import React, { Component } from "react";
import * as BooksAPI from './BooksAPI.js';

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: [],
      title: '',
      thumbnail: 'url("")',
      shelf: '',
      id: ''
    }
  }
  componentDidMount() {
    BooksAPI.get(this.props.id).then((book) => {
      this.setState((prevState) => ({
        author: book.volumeInfo.authors,
        title: book.volumeInfo.title,
        thumbnail: 'url(' + book.volumeInfo.imageLinks.thumbnail + ')',
        shelf: '',
        id: book.volumeInfo.industryIdentifiers[0]
      }))
    })
  }

  render() {
    const { id, author, title, thumbnail, shelf } = this.state;
    return(
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: thumbnail }}></div>
          </div>
          <div className="book-title">{title}</div>
          <div className="book-authors">{author}</div>
        </div>
      </li>
    )
  }
}

export default Book;
