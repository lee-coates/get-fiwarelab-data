import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Use <code>src/App.tsx</code> to query the Fiware Lab Orion API.
        </p>
        <h2>
          Time to Explore!
        </h2>
      </header>
    </div>
  );
}

export default App;
