import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {
  BookCardWrapper,
  BookSectionOne,
  BookCategory,
  BookContainer,
  BookTitle,
  BookAuthor,
  BookCommandsWrapper,
  Comments,
  BookRemove,
  BookEdit,
  BookSectionTwo,
  CircleCenter,
  CompletedWrapper,
  CompletedPerc,
  CompletedText,
  BookSectionThree,
  BookChapter,
  BookLesson,
  UpdateProgress,
  BookLineDivider,
} from './singleBookStyles';
import { removeBook } from '../../redux/books/books';

const SingleBook = ({ title, author }) => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  const removeBookFromStore = (e) => {
    const listItem = e.target.parentNode.parentNode;
    const bookId = listItem.getAttribute('data-id');
    const book = _.find(books, { id: bookId });

    dispatch(removeBook(book));
  };

  return (
    <BookContainer>
      <BookCardWrapper>
        <BookSectionOne>
          <BookCategory>Prayer Book</BookCategory>
          <BookTitle>{title}</BookTitle>
          <BookAuthor>{author}</BookAuthor>
          <BookCommandsWrapper>
            <Comments>Comments</Comments>
            <BookRemove onClick={removeBookFromStore}>Remove</BookRemove>
            <BookEdit>Edit</BookEdit>
          </BookCommandsWrapper>
        </BookSectionOne>
        <BookSectionTwo>
          <CircleCenter />
          <CompletedWrapper>
            <CompletedPerc>8%</CompletedPerc>
            <CompletedText>Completed</CompletedText>
          </CompletedWrapper>
        </BookSectionTwo>
        <BookLineDivider />
        <BookSectionThree>
          <BookChapter>Current Chapter</BookChapter>
          <BookLesson>Chapter3: ALessonLearned </BookLesson>
          <UpdateProgress>Update progress</UpdateProgress>
        </BookSectionThree>
      </BookCardWrapper>
    </BookContainer>
  );
};

BookCard.propTypes = {
  title: PropTypes.node.isRequired,
  author: PropTypes.node.isRequired,
};

export default SingleBook;