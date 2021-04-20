import React,{useState} from 'react';
import './footer.css';
import { BsFillEnvelopeFill } from 'react-icons/bs';
import {FaFacebookF,FaTwitter,FaYoutube,FaInstagram} from 'react-icons/fa';
import {IoIosArrowDropup} from 'react-icons/io';

const Footer = () => {
  
    return (<>
        <div className='desktop'>
        <div id='scrollTOP' onClick={()=>document.querySelector('#Top').scrollIntoView({behavior:'smooth'})}><IoIosArrowDropup/></div>
        <div className="newsLetter">
            <div className='Nlogo'>
                <img src='https://eg.jumia.is/cms/sandbox/019/xiaomi/sis/lg-jumia.png' /></div>
            <div className='Nsubscribe'>
                <p>NEW TO JUMIA?</p>
                <text>Subscribe to our newsletter to get updates on our latest offers!</text>
                <div className='Nform' >
                    <div className='Ninput'><span><BsFillEnvelopeFill /></span><input type='text' placeholder='Enter E-mail Address' /></div>
                    <div className='Nbtn'>MALE</div><div className='Nbtn'>FEMALE</div>
                </div>
            </div>
            <div className='Napp'></div>
        </div>
        <div className='footer'>
            <div className='render'>
                <div><p>LET US HELP YOU</p>
                    <a href=''>Help CenterHow to shop on Jumia?</a>
                    <a href=''>Delivery options and timelines</a>
                    <a href=''>How to return a product on Jumia?t</a>
                    <a href=''>Corporate and bulk purchases</a>
                    <a href=''>Report a Product</a></div>
                <div><p>ABOUT JUMIA</p>
                    <a href=''>About us</a>
                    <a href=''>Jumia careers</a>
                    <a href=''>Jumia Express</a>
                    <a href=''>Terms and Conditions</a>
                    <a href=''>Privacy policy</a>
                    <a href=''>Jumia Prime</a>
                    <a href=''>Stay Safe</a>
                    <a href=''>Jumia Global</a></div>
                <div><p>MAKE MONEY WITH JUMIA</p>
                <a href=''>Sell on Jumia</a>
                    <a href=''>Become a Sales Consultant</a>
                    <a href=''>Become a Jumia Vendor Service Provider</a>
                    <a href=''>Become a Logistics Service Partner</a>
                    <a href=''>Join the Jumia DA Academyt</a>
                    <a href=''>Join the Jumia KOL Program</a></div>
                <div><p>JUMIA INTERNATIONAL</p>
                <a href=''>Algeria</a>
                    <a href=''>Egypt</a>
                    <a href=''>Ghana</a>
                    <a href=''>Ivory Coast</a>
                    <a href=''>Kenya</a>
                    <a href=''>Morocco</a>
                </div>
            </div>

            <div className='icon'>
                <div className='join'>
                    <p>Join us</p>
                    <div>
                        <div><FaFacebookF /></div>
                        <div><FaTwitter /></div>
                        <div><FaYoutube /></div>
                        <div><FaInstagram/></div>
                        <div><FaTwitter /></div>
                        <div><FaFacebookF /></div>
                    </div>
                </div>

                <div className='delivery'>
                    <p>PAYMENT METHODS & DELIVERY PARTNERS</p>
                    <div>
                        <div><img src='http://cdn.onlinewebfonts.com/svg/download_569025.png' /></div>
                        <div><img src='https://ng.jumia.is/cms/8-18/jumia-pay/jumia-pay-black.png' /></div>
                        <div><img src='https://cdn1.iconfinder.com/data/icons/e-commerce-291/100/e_-commerce_-_outlined_cod-512.png' /></div>
                        <div><img src='https://cdn1.iconfinder.com/data/icons/picons-social/57/social_mastercard-512.png' /></div>
                        <div><img src='https://www.pngkey.com/png/detail/340-3406247_cashflowdebtmanagement-mcash-malaysia.png' /></div>
                        <div><img src='https://e7.pngegg.com/pngimages/35/475/png-clipart-interswitch-logo-jpeg-online-shopping-malls-nigeria-company-text.png' /></div>
                        <div><img src='https://www.kindpng.com/picc/m/214-2146346_dhl-logo-black-and-white-hd-png-download.png' /></div>
                        <div><img src='https://www.nicepng.com/png/detail/223-2235788_hbo-max-logo-max-prime-logo-png.png' /></div>
                    </div>
                </div>

            </div>
            <div className='otherService'>
                <div><img src='' /></div>
                <div><img src='' /></div>
                <div><img src='' /></div>
                <div><img src='' /></div>
            </div>
        </div>
        </div>
        <div className='mobileFoot'>
               <div className='MbTop'> back to top</div>
               <hr />
               <div className='FootContent'>
               <div>help center</div>
               <div>contact us</div>
               <div> terms & condition</div>
               <div>become a seller</div>
               <div>report a product</div>
               </div>
               <hr />
               <div className='c'>All rights reserved</div>


            </div>
    </>
    )
}

export default Footer;
