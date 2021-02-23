import React from 'react';
import  Header from './components/header/Header';
import  Launch from './Launch/Launch';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Header/>
        <Launch/>
      </header>
    </div>
  );
}

export default App;
