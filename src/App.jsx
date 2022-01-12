import React, { useState, useRef, useEffect  }  from 'react';
import SignUp from './views/SignUp.jsx';
import Login from './views/Login.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './views/HomePage.jsx';
import Game from './vanillaJSinvaders/Game.jsx';

export default function App() {
  return (
    <div className='App'>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

