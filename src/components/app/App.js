import React ,{useRef}from 'react';
import './App.css';
import NavBar from '../navBar/navBar';
import Footer from '../footer/footer';
import { Home } from '../homePage/home';

function App() {
  const top = useRef();
  return (
    <div className="App">
    <div id='Top'></div>
      <NavBar />
      <Home />
      <Footer  />
    </div>
  );
}

export default App;
