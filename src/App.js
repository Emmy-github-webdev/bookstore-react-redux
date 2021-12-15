import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import BookList from './components/book/BookList';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <main className="app-wrapper">
          <Routes>
            <Route path="/" element={<BookList />} exact />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
