import React from 'react';
import logo from './logo.svg';
import './App.css';
import SpeedTyping from './components/SpeedTyping';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <div className="bg-gray-500 grid justify-items-center items-center min-h-screen w-full">

      <div className="w-full  max-w-2xl mx-auto text-white">
        <ThemeToggle />
        <div className="bg-purple-900">
          <SpeedTyping />
        </div>

      </div>
    </div>
  );
}

export default App;
