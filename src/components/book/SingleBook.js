import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/Books';

const SingleBook = (props) => {
  const dispatch = useDispatch();
  const { singleBook } = props;
  const {
    id, action, title, author, completed, chapter,
  } = singleBook;

  return (
    <div className="bookContainer">
      <div className="book-info-list">
        <div className="book-info">
          <span className="book-action">{action}</span>
          <h3 className="book-title">{title}</h3>
          <span className="book-author">{author}</span>
        </div>
        <div className="action">
          <span><button type="button">Comments</button></span>
          <span><button type="button" onClick={() => dispatch(removeBook(id))} aria-hidden="true">Remove</button></span>
          <span><button type="button">Edit</button></span>
        </div>
      </div>
      <div className="action-progress">
        <span className="book-completed">
          {completed}
          %
        </span>
        <span className="book-text">completed</span>
      </div>
      <div className="book-progress">
        <span className="book-current-chapter">Current Chapter</span>
        <span className="book-chapter">{chapter}</span>
      </div>
    </div>
  );
};

export default SingleBook;
