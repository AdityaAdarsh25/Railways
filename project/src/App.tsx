import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Food from './pages/Food';
import Cancellation from './pages/Cancellation';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/food" element={<Food />} />
              <Route path="/cancellation" element={<Cancellation />} />
            </Routes>
          </Layout>
        } />
      </Routes>
    </Router>
  );
}

export default App;