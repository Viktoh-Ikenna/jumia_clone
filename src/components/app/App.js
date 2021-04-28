import React, { useState } from 'react';
import './App.css';
import NavBar from '../navBar/navBar';
import Footer from '../footer/footer';
import { Home } from '../homePage/home';
import { SideBar } from '../sideBar/sideBar';
import { ListingPage } from '../listingPage/listingPage';
import { ItemPage } from '../MobileItemPage/ItemPage';
import { Cart } from '../Mcart/cart';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, useParams, useLocation
} from "react-router-dom";
import { Account } from '../userAccount/account';

function App() {
  const [show, setShow] = useState(false);
  window.onscroll = () => {
    if (document.documentElement.scrollTop > 41 && document.documentElement.scrollTop < 4100) {
      document.querySelector('#scrollTOP').style.position = 'fixed';
      document.querySelector('#scrollTOP').style.top = '90%';
    } else {
      document.querySelector('#scrollTOP').style.position = '';
      document.querySelector('#scrollTOP').style.top = '';
    }
  }
  const [cart, setCart] = useState([
  ])

  return (
    <Router>
      <div className="App">
        <Route path='/account/:the'>
          <Account />
        </Route>
        <SideBar set={setShow} Sshow={show} />
        <NavBar set={setShow} Sshow={show} cart={cart} />
        <div id='Top' style={{ height: 90 ,width:50}}></div>
        <Switch>

          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/products'>
            <ListingPage cartItems={cart} set={setCart} />
          </Route>
          <Route path='/item/:id'>
            <ItemPage set={setCart} cartItems={cart} />
          </Route>
          <Route path='/cart'>
            <Cart cartItems={cart} set={setCart} />
          </Route>
          <Route path='*'>
            sorry bhur page now available yet
         </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
