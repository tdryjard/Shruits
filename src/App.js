import React from 'react';
import logo from './logo.svg';
import Home from './components/home/Home';
import Sidebar from './components/sidebar/Sidebar';
import Navbar from './components/navbar/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Home />
    </div>
  );
}

export default App;
