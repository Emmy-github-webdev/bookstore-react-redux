import React from 'react';
import { Progress } from 'antd';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/Books';

const SingleBook = (props) => {
  const dispatch = useDispatch();
  const { singleBook } = props;
  const {
    id, genre, title, author, percent, chapter,
  } = singleBook;

  return (
    <div className="single-book-container">
      <div className="single-book">
        <div className="text">

          <span className="single-book-action">{genre}</span>
          <h2>{title}</h2>
          <span className="single-book-author">{author}</span>

        </div>

        <div className="single-book-options">
          <ul>
            <li>Comments</li>
            <li onClick={() => dispatch(removeBook(id))} aria-hidden="true">Remove</li>
            <li>Edit</li>
          </ul>
        </div>
      </div>

      <div className="right-container">

        <div className="percent">
          <Progress type="circle" percent={percent} showInfo={false} strokeColor="#379cf6" className="percent-range" />
          <div className="percent-inner">
            <span className="percent-info">
              {percent}
              %
            </span>
            <span className="completed">Completed</span>
          </div>
        </div>

        <div className="singlebook-Current-chapter">
          <span className="currentChapter">CURRENT CHAPTER</span>
          <span className="numberChapter">{chapter}</span>
          <button className="updateButton" type="button"><span>UPDATE PROGRESS</span></button>
        </div>
      </div>
    </div>

  );
};
SingleBook.propTypes = {
  singleBook: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default SingleBook;
