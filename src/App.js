import { useState, useEffect } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './mocks'
import './App.css';
import DetailPage from './pages/Detail';
import HomePage from './pages/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage /> } />
        <Route path="/:id" element={<DetailPage />} />
      </Routes>
    </div>
  );

}

export default App;
