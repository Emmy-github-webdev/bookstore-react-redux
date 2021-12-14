import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <main className="app-wrapper">
          <Routes>
            <Route path="/" element={<HomePage />} exact />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
