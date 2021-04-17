import React from 'react';
import './navBar.css';
import {BiSearchAlt2,BiChevronDown,BiCart,BiHelpCircle,BiUser} from 'react-icons/bi';

const NavBar = () => {
    return (
        <div className='navBar'>
            <div className='Logo'> <img src='https://getcake.com/wp-content/uploads/2017/03/Jumia-logo.png'/>
            </div>
            <div className='input'><span><BiSearchAlt2 /></span><input type='text' placeholder='Search products, brands, and categories' /></div>
            <div className='Search'>Search</div>
            <div className='Login'><span><BiUser /></span>Login<span><BiChevronDown /></span></div>
            <div className='help'><span><BiHelpCircle /></span>Help<span><BiChevronDown /></span></div>
            <div className='Cart'><span><BiCart /></span>Cart</div>
           
        </div>
    )
}

export default NavBar
