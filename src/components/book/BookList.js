import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SingleBook from './SingleBook';
import AddBook from './AddBook';
import Message from '../Message';
import { loadBooks } from '../../redux/books/Books';

const BooksList = () => {
  const bookList = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBooks());
  }, []);
  return (
    <>
      <div className="booklistContainer">

        {bookList.length
          ? bookList.map((book) => (<SingleBook singleBook={book} key={book.id || book.item_id} />))
          : <Message />}

        <AddBook />

      </div>

    </>

  );
};
export default BooksList;
