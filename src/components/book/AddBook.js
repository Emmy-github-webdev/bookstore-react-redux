import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import { Input, message } from 'antd';

import { addBook } from '../../redux/books/Books';

const AddBook = () => {
  const dispatch = useDispatch();
  const [newBook, setNewBook] = useState({ title: '', author: '' });
  // const { Option } = Select;

  const addBookNameHandler = (e) => {
    setNewBook({ ...newBook, title: e.target.value });
  };

  const authorHanlder = (e) => {
    setNewBook({ ...newBook, author: e.target.value });
  };

  const submitHandler = () => {
    const { title, author } = newBook;

    if (title.length && author.length) {
      const randomPercent = (Math.random() * 100).toFixed(0);
      const newBook = {
        id: uuid(),
        title,
        author,
        percent: randomPercent,

      };

      dispatch(addBook(newBook));
      message.success(`New book added: ${title} `);
      setNewBook({ author: '', title: '' });
    } else {
      message.warning('Try again: Check inputs');
    }
  };

  return (
    <div className="addBook-container">
      <div className="book-inner-info">

        <Input placeholder="Add Book" onChange={addBookNameHandler} value={newBook.title} className="book-name" />
        <Input placeholder="Author" onChange={authorHanlder} value={newBook.author} className="book-author" />
        <button className="submitButton" type="button" onClick={submitHandler}><span>ADD BOOK</span></button>

      </div>
    </div>
  );
};
export default AddBook;
