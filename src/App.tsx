import React from 'react';
import s from './App.module.css';
import NavBar from './components/navbar/NavBar'
import One from './components/sections/one/One'
import Two from './components/sections/two/Two'
import Three from './components/sections/three/Three'
import Four from './components/sections/four/Four'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar></NavBar>
        <div className={s.container}>
          <One />
          <Two />
          <Three />
          <Four />
        </div>
      </div>
    </Router>
  );
}

export default App;

