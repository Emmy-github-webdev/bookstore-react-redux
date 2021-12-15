import React from 'react';
import { useSelector } from 'react-redux';
import SingleBook from './SingleBook';
import AddBook from './AddBook';
import Message from '../Message';

const BookList = () => {
  const bookList = useSelector((state) => state.bookReducer);

  return (
    <div className="booklist-container">
      {
        bookList.length ? bookList.map((book) => (<SingleBook singleBook={book} key={book.id} />)) : <Message />
      }
      <AddBook />
    </div>
  );
};

export default BookList;
