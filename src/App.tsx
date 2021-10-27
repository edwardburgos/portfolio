import React from 'react';
import s from './App.module.css';
import NavBar from './components/navbar/NavBar'
import One from './components/sections/one/One'
import Two from './components/sections/two/Two'
import Three from './components/sections/three/Three'

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div className={s.container}>
      <One />
      <Two />
      <Three />
      </div>
    </div>
  );
}

export default App;
