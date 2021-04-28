import React, { useState } from 'react'
import { MpLister } from './MpLister';
import { products } from '../productsever';
import { MPscroll } from '../MPscroll/MPscroll';


export const ListingPage = ({ set, cartItems }) => {
    const [cut, setCut] = useState([...products].splice(0, 4));
    return (
        <div className='Mlisting'>
            <MPscroll p={products} seeAll={{ display: 'none' }} />
            <MPscroll p={products} seeAll={{ display: 'none' }} />
            <MPscroll p={products} seeAll={{ display: 'none' }} />
            <MpLister lists={products} cartItems={cartItems} set={set} />
            <MPscroll p={products} seeAll={{ display: 'none' }} />
        </div>
    )
}
