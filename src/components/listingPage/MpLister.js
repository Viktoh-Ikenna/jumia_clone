import React from 'react';
import './mpLister.css';
import { PwCart } from '../PruductWcart/PwCart';
import {RiArrowLeftSLine,RiArrowRightSLine} from 'react-icons/ri'

export const MpLister = ({lists,set,cartItems}) => {
    return (
        <div>
               <div className='MPlister'>
                <div>
                    <h3>Deals Of The Day</h3>
            </div>
            <div className='MPHolder' >
                {lists.map((e,i) => <PwCart cartItems={cartItems} set={set} key={i} item={e} />)}
            </div>
            <div className='pagination'>
            <div><span><RiArrowLeftSLine /> </span>previous page </div>
            <div>1/29 </div>
            <div>Next page <span><RiArrowRightSLine /></span></div>
            </div>
        </div>

            
        </div>
    )
}
