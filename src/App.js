import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Books from './redux/books/Books';
import Categories from './redux/categories/Categories';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main className="app-wrapper">
          <Routes>
            <Route path="/" element={<HomePage />} exact />
            <Route path="/books" element={<Books />} exact />
            <Route path="/categories" element={<Categories />} exact />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
