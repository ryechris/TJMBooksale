import React from 'react';
import { Link } from 'react-router-dom';
import Shelf from './Shelf';
const ListShelves = props => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>Trevor Johnson Ministries BOOKSALE</h1>
      </div>
    {Object.keys(props.shelves).map((obj) => (
      <Shelf key={obj} heading={obj} books={props.shelves[obj]} handleChange={props.handleChange}/>
    ))}
      <div className="open-search">
        <Link to='/search'>Add a book</Link>
      </div>
    </div>
  )
}
export default ListShelves;
