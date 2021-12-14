import React, { useState } from 'react';
import SingleBook from './SingleBook';
import AddBook from './AddBook';

const BookList = () => {
  const [data] = useState([
    {
      id: 1,
      action: 'action',
      title: 'JavaScript for beginners',
      author: 'John Doe',
      completed: '64',
      chapter: 'Chapter 17',
    },
    {
      id: 2,
      action: 'action',
      title: 'ReactJS for beginners',
      author: 'Jane Doe',
      completed: '8',
      chapter: 'Chapter 1',
    },
    {
      id: 3,
      action: 'action',
      title: 'HTML & CSS for beginners',
      author: 'Dominic Joe',
      completed: '0',
      chapter: 'Introduction',
    },
  ]);

  return (
    <div>
      {data.map((book) => (
        <SingleBook singleBook={book} key={book.id} />
      ))}
      ;
      <AddBook />
    </div>
  );
};

export default BookList;
