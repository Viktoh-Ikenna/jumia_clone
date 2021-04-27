import React from 'react';
import './sideBar.css'
import {MdDesktopMac,MdPhoneAndroid,MdDriveEta,MdStars} from 'react-icons/md';
import {RiHome8Line,RiTShirt2Line,RiGhostLine,RiChatPollLine,RiCoupon5Line} from 'react-icons/ri'
import {CgGym,CgMoreO} from 'react-icons/cg';
import {GiGamepad,GiShinyApple,GiLipstick,GiPocketRadio} from 'react-icons/gi';
import {GoPackage } from 'react-icons/go';
import {MdRateReview} from 'react-icons/md';
import {BiHeart} from 'react-icons/bi'
import {ImCross} from 'react-icons/im'

export const SideBar = ({set,Sshow}) => {
    
    return (<div style={{width:'100%'}}>
      {Sshow && <div className='sideBar'>
            <div className='sideBarH'>
                <div className='SideLOGO' ><span onClick={()=>set(!Sshow)}><ImCross/></span><img src='https://getcake.com/wp-content/uploads/2017/03/Jumia-logo.png' /> </div>
                <div className='chat'><span><RiChatPollLine /></span>Live Help </div>
                <div className='Saccount'>
                <div className='hSide'><p>my jumia account</p> <a>></a></div>
                
                    <div className=''><span><GoPackage /></span>Oders </div>
                    <div className=''><span><MdRateReview/></span>Pending reviews</div>
                    <div className=''><span><RiCoupon5Line /></span>Jumia coupon</div>
                    <div className=''><span><BiHeart/></span>Saved Items </div>
                </div>
                <div className='categgg'>
                <div className='hSide'><p>our categories</p> <a>see all</a></div>
                    <div className=''><span><GiShinyApple/></span>SuperMarket </div>
                    <div className=''><span><GiLipstick/></span>Health & beauty</div>
                    <div className=''><span><RiHome8Line /></span>Home & Office</div>
                    <div className=''><span><MdPhoneAndroid /></span> Phone& Tablet </div>
                    <div className=''><span><MdDesktopMac/></span>Computing </div>
                    <div className=''><span><GiPocketRadio /></span>Electronic</div>
                    <div className=''><span><RiTShirt2Line /></span>Womans's Fashion</div>
                    <div className=''><span><RiTShirt2Line /></span>Men's Fashion</div>
                    <div className=''><span><RiGhostLine /></span>baby Products</div>
                    <div className=''><span><GiGamepad/></span>Gaming</div>
                    <div className=''><span><CgGym/></span>Sporting Goods</div>
                    <div className=''><span><MdDriveEta /></span>autoMobile</div>
                </div>
                <div className='services'>
                <div className='hSide'><p>our services</p> <a>see all</a></div>
                
                    <div className=''><span><MdStars /></span>pay airtime & bills </div>
                    <div className=''><span><MdStars /></span>Pay electricy bills</div>
                    <div className=''><span><MdStars /></span>pay internet bills</div>
                    <div className=''><span><MdStars /></span>buy data </div>
                    <div className=''><span><MdStars /></span>jumia food </div>
                </div>

                <div className='Ssss'>sell on jumia </div>
                <div className='Ssss'>contact us</div>
                <div className='Ssss'>help center</div>
            </div>
        </div>}
        </div>
    )
}
