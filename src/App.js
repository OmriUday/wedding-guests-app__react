import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import AllGuestsPage from './pages/AllGuestsPage';
import NewGuestPage from './pages/NewGuestPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/all-guests" element={<AllGuestsPage />} />
        <Route path="/new-guest" element={<NewGuestPage />} />
      </Routes>
    </>
  );
};

export default App;