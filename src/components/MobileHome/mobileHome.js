import React, { useState } from 'react';
import './mobileHome.css';
import { MobileBanner } from '../MobileBanner/mobileBanner';
import { Mfeatures } from '../mobileFeatures/mfeatures';
import { MPscroll } from '../MPscroll/MPscroll';
import { products } from '../productsever';
import { Deals } from '../Mdeal/deals';
import { Mcollection } from '../Mcollection/Mcollection';
import { Desc } from '../description/desc';


export const MobileHome = () => {
    
    const [cut, setCut] = useState([...products].splice(0, 4));
    return (
        <div className='mobilehome'>
            <MobileBanner />
            <Mfeatures />
            <MPscroll p={products} seeAll={{ display: 'none' }} />
            <Deals p={cut} />
            <Mcollection />
            <Mfeatures />
            <Deals p={cut} />
            <Mcollection />
            <Deals p={cut} />
            <Deals p={cut} />
            <Deals p={cut} />
            <Desc />
        </div>
    )
}
