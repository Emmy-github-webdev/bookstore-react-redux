import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import { Input, message } from 'antd';
import { addBook } from '../../redux/books/Books';
import './addBook.css';

const AddBook = () => {
  const dispatch = useDispatch();
  const [newBook, setNewBook] = useState({ title: '' });
  const addBookNameHandler = (e) => {
    setNewBook({ ...newBook, title: e.target.value });
  };

  const submitHandler = () => {
    const { title } = newBook;

    if (title.length) {
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
      <h2>Add New Book</h2>
      <div className="book-inner-info">
        <Input placeholder="Add Book" onChange={addBookNameHandler} value={newBook.title} className="book-name" />
        <Input placeholder="Category" className="category-name" />
        <button className="submitButton" type="button" onClick={submitHandler}><span>ADD BOOK</span></button>

      </div>
    </div>
  );
};
export default AddBook;
