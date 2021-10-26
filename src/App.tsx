import React from 'react';
import s from './App.module.css';
import NavBar from './components/navbar/NavBar'
import One from './components/sections/one/One'


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div className={s.container}>
      <One></One>
      </div>
    </div>
  );
}

export default App;
