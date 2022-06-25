import React  from 'react';
import './App.css';
import Header from './components/Header';
import Services from './components/Services';
import Menu from './components/Menu';
import Works from './components/Works';
import Contacts from './components/Contacts';



function App() {
  return (
    <div className="App">
      <Menu/>
      <Header/>
      <Services/>
      <Works />
      <Contacts />
    </div>
  );
}

export default App;
