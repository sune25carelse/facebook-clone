import React from 'react';
import './App.css';
import Header from './Components/Header';
import Feed from './Components/Feed';
import Sidebar from './Components/Sidebar';
import Widget from './Components/Widget';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        
        <Sidebar />
        <Feed />
        <Widget />
      </div>
    </div>
  );
}

export default App;

// username-fbclient
//password-click generate passwrd