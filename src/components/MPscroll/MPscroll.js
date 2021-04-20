import React,{ useState ,useEffect} from 'react'
import { Products } from '../products/products';
import './mpScroll.css';

import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from 'react-icons/io';


export const MPscroll = ({seeAll,color,p}) => {
    
    return (
        <div className={`Mscroll`}>
        <div style={color} className='seeAll'><h3>Top products of the week</h3><h3 style={seeAll}>See All ></h3></div>
        <div className='Scroller'>
        <div className='pHolder' >
          {p.map(e=> <Products item={e}/>)}
           </div>
        </div> 
        </div>
    )
}
