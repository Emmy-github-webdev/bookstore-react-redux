const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/u2Ww6EYkIzuEuHlDMxd6';

export const getBooks = async () => {
  const booksData = await fetch(`${URL}/books`);
  const data = await booksData.json();
  return data;
};

export const newBook = async (data) => {
  await fetch(`${URL}/books`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};

export const deleteBook = async (id) => {
  await fetch(`${URL}/books/${id}`, {
    method: 'DELETE',
  });
};
