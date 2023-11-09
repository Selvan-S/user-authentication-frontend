import { useState } from 'react';
import './App.css'
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Home from './pages/Home';
import { Route, Routes, HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </HashRouter>
  );
}

export default App
