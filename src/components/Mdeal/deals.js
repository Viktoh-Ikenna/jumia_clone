import React ,{useState}from 'react';
import './deals.css';
import { Products } from '../products/products';

export const Deals = ({ p, color, seeAll }) => {

  

    return (
        <div className='DealsCont'>
            <div style={color} className='MseeAll'>
                <div>
                    <h3>Deals Of The Day</h3>
                    <p>Up to 45% off</p>
                    </div>
                <h4 style={seeAll}>SEE ALL</h4>
            </div>
            <div className='DpHolder' >
                {p.map((e,i) => <Products key={i} width={{ width: '40%' }} item={e} />)}
            </div>
        </div>
    )
}
