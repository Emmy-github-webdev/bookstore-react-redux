import React from 'react';
import { useSelector } from 'react-redux';
import SingleBook from './SingleBook';
import AddBook from './AddBook';
import Message from '../Message';

const BooksList = () => {
  const bookList = useSelector((state) => state.booksReducer);

  return (
    <>
      <div className="booklistContainer">

        {bookList.length
          ? bookList.map((book) => (<SingleBook singleBook={book} key={book.id} />))
          : <Message />}

        <AddBook />

      </div>

    </>

  );
};
export default BooksList;
