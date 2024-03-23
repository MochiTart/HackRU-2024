import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage' 
import LoginPage from './components/LoginPage' 
import SignUpPage from './components/SignUpPage' 
import MyProfilePage from './components/MyProfilePage' 
import Navbar from './components/Navbar' 

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/profile" element={<MyProfilePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

