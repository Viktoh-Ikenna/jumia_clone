import React, { useState } from 'react';
import './navBar.css';
import { BiSearchAlt2, BiChevronDown, BiCart, BiHelpCircle, BiUser, BiHeart, BiMenu } from 'react-icons/bi';
import { FaShippingFast } from 'react-icons/fa'
const NavBar = () => {
    const [show, setShow] = useState({ cart: false, log: false });
    const [nav, setScroll] = useState();

    window.onscroll = () => {
        if (document.documentElement.scrollTop > 40) {
            setScroll({ position: 'fixed',width:'100%' });
        } else {
            setScroll({});
        }
        if (document.documentElement.scrollTop > 41 && document.documentElement.scrollTop < 4100) {
            document.querySelector('#scrollTOP').style.position = 'fixed';
            document.querySelector('#scrollTOP').style.top = '90%';
        } else {
            document.querySelector('#scrollTOP').style.position = '';
            document.querySelector('#scrollTOP').style.top = '';
        }
    }
    return (
        <div className='navBar' style={nav} >
            <div className='desktopNav'>
                <div className='Logo'> <img src='https://getcake.com/wp-content/uploads/2017/03/Jumia-logo.png' />
                </div>
                <div className='input'><span><BiSearchAlt2 /></span><input type='text' placeholder='Search products, brands, and categories' /></div>
                <div className='Search'>Search</div>
                <div className='Login' onClick={() => {
                    setShow({ cart: false, log: !show.log })
                }}><span><BiUser /></span>Login<span><BiChevronDown /></span>
                </div>
                <div className='help' onClick={() => {
                    setShow({ cart: !show.cart, log: false })
                }}><span><BiHelpCircle /></span>Help<span><BiChevronDown /></span></div>
                <div className='Cart'><span><BiCart /></span>Cart</div>
                {show.log === true && <section className='LoginSub'>
                    <div className='log'>LOGIN</div>
                    <div className='create'><span></span>Create an Account</div>
                    <div className=''><span><BiUser /></span>account</div>
                    <div className=''><span><FaShippingFast /></span>orders</div>
                    <div className=''><span><BiHeart /></span>save Items</div>
                </section>}

                {show.cart === true && <section className='CartSub'>
                    <div className=''>help center</div>
                    <div className=''>place and track order</div>
                    <div className=''>order cancellation</div>
                    <div className=''>return and refund</div>
                    <div className=''>payment & jumia account</div>
                    <div className='LiveH'>live Help</div>

                </section>}
            </div>
          { <div className='mobileNav'>
                <div className='MMholder' >
                    <div className='Micon'><BiMenu /></div>
                    <div className='MLogo'> <img src='https://getcake.com/wp-content/uploads/2017/03/Jumia-logo.png' /></div>
                    <div className='Micon'><BiUser /></div>
                    <div className='Micon'><BiCart /></div>
                </div>
                <div className='MMinput'>
                    <div className='input'><span><BiSearchAlt2 /></span><input type='text' placeholder='Search products, brands, and categories' /></div>
                </div>

            </div>}
        </div>
    )
}

export default NavBar
