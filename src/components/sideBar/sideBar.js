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
import {Link} from 'react-router-dom'

export const SideBar = ({set,Sshow}) => {
    
    return (<div style={{width:'100%'}}>
      {Sshow && <div className='sideBar'>
            <div className='sideBarH'>
                <div className='SideLOGO' ><span onClick={()=>set(!Sshow)}><ImCross/></span><img src='https://getcake.com/wp-content/uploads/2017/03/Jumia-logo.png' /> </div>
                <div className='chat'><span><RiChatPollLine /></span>Live Help </div>
                <div className='Saccount'>
                <div className='hSide'><p>my jumia account</p> <a className='aa'>></a></div>
                <div className='covering'>
                    <Link to='/categ' onClick={()=>set(!Sshow)}  className=''><span><GoPackage /></span>Oders </Link>
                    <Link to='/categ' onClick={()=>set(!Sshow)} className=''><span><MdRateReview/></span>Pending reviews</Link>
                    <Link to='/categ' onClick={()=>set(!Sshow)} className=''><span><RiCoupon5Line /></span>Jumia coupon</Link>
                    <Link to='/categ' onClick={()=>set(!Sshow)} className=''><span><BiHeart/></span>Saved Items </Link>
                    </div>
                </div>
                <div className='categgg'>
                <div className='hSide'><p>our categories</p> <a className='aa'>see all</a></div>
                <div className='covering'>
                    <Link to='/categ' onClick={()=>set(!Sshow)} className=''><span><GiShinyApple/></span>SuperMarket </Link>
                    <Link to='/categ' onClick={()=>set(!Sshow)} className=''><span><GiLipstick/></span>Health & beauty</Link>
                    <Link to='/categ' onClick={()=>set(!Sshow)} className=''><span><RiHome8Line /></span>Home & Office</Link>
                    <Link to='/categ' onClick={()=>set(!Sshow)} className=''><span><MdPhoneAndroid /></span> Phone& Tablet </Link>
                    <Link to='/categ' onClick={()=>set(!Sshow)} className=''><span><MdDesktopMac/></span>Computing </Link>
                    <Link to='/categ' onClick={()=>set(!Sshow)} className=''><span><GiPocketRadio /></span>Electronic</Link>
                    <Link to='/categ' onClick={()=>set(!Sshow)} className=''><span><RiTShirt2Line /></span>Womans's Fashion</Link>
                    <Link to='/categ' onClick={()=>set(!Sshow)} className=''><span><RiTShirt2Line /></span>Men's Fashion</Link>
                    <Link to='/categ' onClick={()=>set(!Sshow)} className=''><span><RiGhostLine /></span>baby Products</Link>
                    <Link to='/categ' onClick={()=>set(!Sshow)} className=''><span><GiGamepad/></span>Gaming</Link>
                    <Link to='/categ' onClick={()=>set(!Sshow)} className=''><span><CgGym/></span>Sporting Goods</Link>
                    <Link to='/categ' onClick={()=>set(!Sshow)} className=''><span><MdDriveEta /></span>autoMobile</Link>
                    </div>
                </div>
                <div className='services'>
                <div className='hSide'><p>our services</p> <a className='aa'>see all</a></div>
                <div className='covering'>
                    <Link to='/categ' onClick={()=>set(!Sshow)} className=''><span><MdStars /></span>pay airtime & bills </Link>
                    <Link to='/categ' onClick={()=>set(!Sshow)} className=''><span><MdStars /></span>Pay electricy bills</Link>
                    <Link to='/categ' onClick={()=>set(!Sshow)} className=''><span><MdStars /></span>pay internet bills</Link>
                    <Link to='/categ' onClick={()=>set(!Sshow)} className=''><span><MdStars /></span>buy data </Link>
                    <Link to='/categ' onClick={()=>set(!Sshow)} className=''><span><MdStars /></span>jumia food </Link>
               </div>
                </div>

                <div className='Ssss'>sell on jumia </div>
                <div className='Ssss'>contact us</div>
                <div className='Ssss'>help center</div>
            </div>
        </div>}
        </div>
    )
}
