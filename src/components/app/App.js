import React from 'react';
import './App.css';
import NavBar from '../navBar/navBar';
import Footer from '../footer/footer';
import { Home } from '../homePage/home';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
