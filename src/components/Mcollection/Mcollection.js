import React from 'react';
import './Mcollection.css';
import {Link} from 'react-router-dom'

export const Mcollection = () => {
    return (
        <div className='MCollection'>
        <div className='fCat'>Feature Categories</div>
    <div>
               <Link to='/products'>
                    <img src='https://www.cnet.com/a/img/SEtkPeF-QMfgzOf_BBXgPu9VUzA=/1200x675/2020/08/18/b7168aea-9f7e-47bb-9f31-4cb8ad92fbc7/lg-note-20-ultra-5g-iphone-11-se-google-pixel-4a-lg-velvet-6133.jpg' />
                    <p>Phone Upgrade</p>
                </Link><Link to='/products'>
                    <img src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/affordableonline-1594998657.jpg' />
                    <p>Closet Upgrade</p>
                </Link><Link to='/products'>
                    <img src='https://media.wired.com/photos/5f7e58deea83d42b022069b7/master/pass/Gear-PS5_RENDER_WITHNOTICE_01.jpg' />
                    <p>Gaming Treats</p>
                </Link><Link to='/products'>
                    <img src='https://secwatch.org/wp-content/uploads/2021/02/Gadget-sale.jpg' />
                    <p>Bestsellers</p>
                </Link><Link to='/products'>
                    <img src='https://akm-img-a-in.tosshub.com/indiatoday/images/story/202005/mibookpro_0.jpeg' />
                    <p>Productivity Plus</p>
                </Link><Link to='/products'>
                    <img src='https://images.samsung.com/is/image/samsung/africa-en-full-hd-n5000-ua40n5000arxxa-frontblack-154997819?$720_576_PNG$' />
                    <p>Your Type of TVs</p>
                </Link><Link to='/products'>
                    <img src='https://data.nbcstations.com/national/DC/sneakers-2/images/sneaker-12.jpg' />
                    <p>Sneakers</p>
                </Link><Link to='/products'>
                    <img src='https://halalwatchworld.news/wp-content/uploads/2020/12/jmia-1600.jpg' />
                    <p>ramadan</p>
                </Link>
                </div>
            </div>
    )
}
