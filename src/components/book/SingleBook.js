import React from 'react';
import { Progress } from 'antd';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/Books';
import './singleBook.css';

const SingleBook = (props) => {
  const dispatch = useDispatch();
  const { singleBook } = props;
  const {
    id, title, category,
  } = singleBook;

  const percent = (Math.random() * 100).toFixed(0);

  return (
    <div className="single-book-container">
      <div className="single-book">
        <div className="text">
          <span className="single-book-category">{category}</span>
          <h2>{title}</h2>
          <span className="single-book-author">author</span>
        </div>

        <div className="single-book-options">
          <ul>
            <li className="comments">Comments</li>
            {' '}
            |
            {' '}
            <li onClick={() => dispatch(removeBook(id))} aria-hidden="true" className="remove">Remove</li>
            {' '}
            |
            {' '}
            <li className="edit">Edit</li>
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
      </div>
    </div>

  );
};
SingleBook.propTypes = {
  singleBook: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default SingleBook;
