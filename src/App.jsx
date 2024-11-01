// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import BlankScreen from './components/BlankScreen';

function App() {
  return (
    <Router>
      <div className="flex justify-center p-4 space-x-4">
        <Link to="/" className="text-blue-500">Home</Link>
        <Link to="/blank" className="text-blue-500">Màn Hình Trống</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blank" element={<BlankScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
