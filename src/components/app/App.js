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
const [cart,setCart]=useState([{
  src: ['https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/01/465236/1.jpg', 'https://ng.jumia.is/cms/8-18/jumia-choice/phones-tabletsv2.jpg', 'https://ng.jumia.is/cms/8-18/jumia-choice/phones-tabletsv2.jpg'],
  name: 'OK freezer in the market now',
  prize: '59000',
  discount: '2,000,000',
  description: 'this freezer is very trust worthy and reliable',
  id: 12121212,
  count:1
}
])

console.log(window.screen)
  return (
    <Router>
      <div className="App">
        <SideBar set={setShow} Sshow={show} />
        <NavBar set={setShow} Sshow={show} cart={cart}/>
        <div id='Top' style={{height:90}}></div>
        <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/products'>
          <ListingPage cartItems={cart} set={setCart} />
        </Route>
        <Route path='/item/:id'>
          <ItemPage set={setCart} cartItems={cart}/>
        </Route>
        <Route path='/cart'>
          <Cart cartItems={cart} set={setCart} />
        </Route>
        <Route path='*'>
          hey dude
         </Route>
         </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
