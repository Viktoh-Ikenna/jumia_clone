import React from 'react';
import './home.css'
import { Category } from '../catergory/category';
import { Banner } from '../banner/banner';
import { GrCircleQuestion } from 'react-icons/gr'
import { IoReloadCircleOutline } from 'react-icons/io5'
import { SiCoronaengine } from 'react-icons/si'
import { RiShoppingBagLine, RiAwardFill, RiFocusFill } from 'react-icons/ri';
import { MdFlight } from 'react-icons/md'
import { PostsSlides } from '../PostsSlides/postsSlides';
import { CategBanner } from '../categBanner/categBanner';
import { Desc } from '../description/desc';
import { products } from '../productsever';
import {MobileHome} from '../MobileHome/mobileHome';


export const Home = () => {

    const JumiaPlatforms = () => {
        return (<>
            <div><span><RiShoppingBagLine /></span><p>Official Stores</p></div>
            <div><span style={{ backgroundColor: 'blue' }}><MdFlight /></span><p>Jumial Global</p></div>
            <div><span style={{ backgroundColor: 'yellow' }}><RiAwardFill /></span><p>Food Fest</p></div>
            <div><span style={{ backgroundColor: 'rgb(86, 68, 250)' }}><RiFocusFill /></span><p>Borrow Money</p></div>
        </>
        )
    }
    return (<div style={{width:'98%'}}>
        <div className='home'>
       
            <div className='HbannerH'>
                <Category />
                <Banner />
                <div className='tt'>
                    <div className='HhelpSection'>
                        <div className='Hhelp'>

                            <span><GrCircleQuestion /></span>
                            <div>
                                <h5>HELP CENTER</h5>
                                <p>Guide to Customer Care</p>
                            </div>
                        </div>
                        <div className='Hhelp'>

                            <span><IoReloadCircleOutline /></span>
                            <div>
                                <h5>
                                    EASY RETURN
                                    </h5>
                                <p>Quick Refund</p>
                            </div>

                        </div>
                        <div className='Hhelp'>

                            <span><SiCoronaengine /></span>
                            <div>
                                <h5>SELL ON JUMIA</h5>
                                <p>Millions of Visitors</p>
                            </div>
                        </div>
                    </div>

                    <div className='Himg'>
                        <img src='https://www.bellanaija.com/wp-content/uploads/2018/07/Finale-creative-blg-600x221.jpg' />
                    </div>
                </div>
            </div>
            <div className='JumiaPlatforms' >
                <JumiaPlatforms />
            </div>
            <PostsSlides p={products}  seeAll={{ display: 'none' }} />
            <PostsSlides p={products} color={{ backgroundColor: 'red',color:'white' }} seeAll={{ fontSize: '15px' }} />
            <CategBanner />
           <div className='Bimg' > <img src='https://halalwatchworld.news/wp-content/uploads/2020/12/jmia-1600.jpg' /></div>
            <PostsSlides p={products} color={{ backgroundColor: 'yellow' }} seeAll={{ fontSize: '15px' }} />
            <CategBanner />
            <div className='Bimg' > <img src='https://halalwatchworld.news/wp-content/uploads/2020/12/jmia-1600.jpg' /></div>
            <PostsSlides p={products} color={{ backgroundColor: 'red',color:'white' }} seeAll={{ fontSize: '15px' }} />
            <div className='Bimg' > <img src='https://halalwatchworld.news/wp-content/uploads/2020/12/jmia-1600.jpg' /></div>
            <PostsSlides p={products} color={{ backgroundColor: 'red',color:'white' }} seeAll={{ fontSize: '15px' }} />
            <div className='Bimg' > <img src='https://halalwatchworld.news/wp-content/uploads/2020/12/jmia-1600.jpg' /></div>
            <PostsSlides p={products} color={{ backgroundColor: 'red',color:'white' }} seeAll={{ fontSize: '15px' }} />
            <CategBanner />

            <div className='Bimg' > <img src='https://halalwatchworld.news/wp-content/uploads/2020/12/jmia-1600.jpg' /></div>
            <PostsSlides p={products} color={{ backgroundColor: 'red',color:'white' }} seeAll={{ fontSize: '15px' }} />

            <Desc />
        </div>
        <div className='mobile-home'>
        <MobileHome />
        </div>
    </div>)
}
