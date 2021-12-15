import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../../redux/books/books';
import {
  FormContainer,
  AddBookInput,
  CategoryInput,
  FormWrapper,
  Headings,
  Button,
} from './AddBookElements';

const AddBook = () => {
  const dispatch = useDispatch();

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      id: uuidv4(),
      title: e.target.title.value,
      author: e.target.author.value,

    };

    dispatch(addBook(newBook));
    e.target.title.value = '';
    e.target.author.value = '';
  };

  return (
    <FormWrapper id="add-books">
      <Headings>ADD NEW BOOK</Headings>
      <FormContainer onSubmit={submitBookToStore}>
        <AddBookInput placeholder="Book title" name="title" />
        <AddBookInput placeholder="Book author" name="author" />
        <CategoryInput placeholder="Under construction" />
        <Button type="submit">ADD BOOK</Button>
      </FormContainer>
    </FormWrapper>
  );
};

export default AddBook;