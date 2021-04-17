import React from 'react';
import './category.css'
import {MdDesktopMac,MdPhoneAndroid,MdDriveEta} from 'react-icons/md';
import {RiHome8Line,RiTShirt2Line,RiGhostLine} from 'react-icons/ri'
import {CgGym,CgMoreO} from 'react-icons/cg';
import {GiGamepad,GiShinyApple,GiLipstick,GiPocketRadio} from 'react-icons/gi';

export const Category = () => {
    return (
        <div className='categories'>
            <div><a href='#'><span><GiShinyApple/></span>Supermarket</a></div>
            <div><a href='#'><span><GiLipstick/></span>health & Beauty</a></div>
            <div><a href='#'><span><RiHome8Line /></span>Home & Office</a></div>
            <div><a href='#'><span><MdPhoneAndroid /></span>Phons & Tablet</a></div>
            <div><a href='#'><span><MdDesktopMac/></span>Computing</a></div>
            <div><a href='#'><span><GiPocketRadio /></span>Electronics</a></div>
            <div><a href='#'><span><RiTShirt2Line /></span>Fashion</a></div>
            <div><a href='#'><span><RiGhostLine /></span>Baby Products</a></div>
            <div><a href='#'><span><GiGamepad/></span>Gaming</a></div>
            <div><a href='#'><span><CgGym/></span>sporting Goods</a></div>
            <div><a href='#'><span><MdDriveEta /></span>Automobile</a></div>
            <div><a href='#'><span><CgMoreO /></span>Other categories</a></div>
        </div>
    )
}
