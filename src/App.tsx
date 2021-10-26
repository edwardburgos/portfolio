import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar/NavBar'
import One from './components/sections/one/One'
import Container from '@mui/material/Container'


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Container>
      <One></One>
      </Container>
    </div>
  );
}

export default App;
