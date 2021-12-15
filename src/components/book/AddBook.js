import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import { Input, message } from 'antd';
import { addBook } from '../../redux/books/Books';

const AddBook = () => {
  const dispatch = useDispatch();
  const [newBook, setNewBook] = useState({ title: ''});
  // const { Option } = Select;

  const addBookNameHandler = (e) => {
    setNewBook({ ...newBook, title: e.target.value });
  };

  const submitHandler = () => {
    const { title} = newBook;

    if (title.length) {
      const randomPercent = (Math.random() * 100).toFixed(0);
      const newBook = {
        item_id: uuid(),
        title,
        category: 'Fiction',
      };

      dispatch(addBook(newBook));
      message.success('New book added');
      setNewBook({ title: '' });
    } else {
      message.warning('Try again: the fileds cannot be empty');
    }
  };

  return (
    <div className="addBook-container">
      <div className="book-inner-info">

        <Input placeholder="Add Book" onChange={addBookNameHandler} value={newBook.title} className="book-name" />
        <button className="submitButton" type="button" onClick={submitHandler}><span>ADD BOOK</span></button>

      </div>
    </div>
  );
};
export default AddBook;
