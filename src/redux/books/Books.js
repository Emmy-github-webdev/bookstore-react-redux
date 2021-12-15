const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOK = 'bookStore/books/GET_BOOK';
import {getBooks, newBook, deleteBook} from './Api';

const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const loadBook = (payload) => ({
  type: GET_BOOK,
  payload,
});

export const loadBooks = () => (dispatch) => {
  getBooks().then((books) => {
    Object.keys(books).forEach((ID) => {
      const booksId = {};
      booksId.id = ID;
      booksId.title = books[ID][0].title;
      booksId.category = books[ID][0].category;
      dispatch(loadBook(booksId));
    });
  });
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      newBook(action.payload)
      return [...state, action.payload];

    case REMOVE_BOOK:
      deleteBook(action.payload)
      return state.filter((book) => book.id !== action.payload);
    case GET_BOOK:
      return [...state, action.payload];
  
    default:
      return state;
  }
};
export default reducer;
