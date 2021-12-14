import React from 'react';

const SingleBook = (props) => {
  const { singleBook } = props;

  return (
    <div className="bookContainer">
      <div className="book-info-list">
        <div className="book-info">
          <span className="book-action">{singleBook.action}</span>
          <h3 className="book-title">{singleBook.title}</h3>
          <span className="book-author">{singleBook.author}</span>
        </div>
        <div className="action">
          <span><button type="button">Comments</button></span>
          <span><button type="button">Remove</button></span>
          <span><button type="button">Edit</button></span>
        </div>
      </div>
      <div className="action-progress">
        <span className="book-completed">
          {singleBook.completed}
          %
        </span>
        <span className="book-text">completed</span>
      </div>
      <div className="book-progress">
        <span className="book-current-chapter">Current Chapter</span>
        <span className="book-chapter">{singleBook.chapter}</span>
      </div>
    </div>
  );
};

export default SingleBook;
