import React from 'react';
import Book from './Book';
const Shelf = props => {
  let bookshelftitle;
  if (props.heading === 'currentlyReading') {
    bookshelftitle = 'CategoryA';
  } else if (props.heading === 'wantToRead') {
    bookshelftitle = 'CategoryB';
  } else {
    bookshelftitle = 'CategoryC';
  }
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{bookshelftitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.books.map((id) => (<Book key={id} id={id} handleChange={props.handleChange}/>))}
        </ol>
      </div>
    </div>
  )
}
export default Shelf;
