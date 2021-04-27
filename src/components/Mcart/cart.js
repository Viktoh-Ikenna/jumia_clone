import React, { useState, useRef } from 'react'
import './cart.css';
import { IoMdHeart } from 'react-icons/io';
import { MdDelete } from 'react-icons/md';
import { MPscroll } from '../MPscroll/MPscroll';
import { products } from '../productsever';
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'





export const Cart = ({ cartItems, set }) => {
    const [count, Setcount] = useState(1);
    const add = (cut) => {
        let cc = cartItems.map((item) => {
            if (item.id === cut) {
                const update = { ...item, count: item.count + 1 }
                return update;
            }
            return item
        })
        set(cc)
    }
    const delet =(id) => {
        let cc = cartItems.filter(e => e.id !== id);
        set(cc);
    }
    const subsrt = (cut) => {
        let cc = cartItems.map((item) => {
            if (item.id === cut) {
                const update = {
                    ...item, count: item.count > 1 ? item.count - 1 : item.count
                }
                return update;
            }
            return item
        })
        set(cc)
    }
    let p = cartItems.map((e) => +e.prize * e.count);
    let z = p.reduce((e, i) => e + i);
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return (<div>
        <div style={{ width: '100%' }}>
            <h5 style={{ padding: 0, margin: '5px ' }}>MY CART ({cartItems.map(e => e.count).reduce((c, n) => c + n)} ITEMS)</h5>
            <div> {cartItems.map((p, id) => {
                return <div key={id}>
                    <div className='cart' key={p.id}>
                        <img src={p.src[0]} />
                        <div className='cartD' >
                            <div className='CCname'>{p.name}</div>
                            <div className='CCprize'>&#8358;{numberWithCommas(p.prize * p.count)}</div>
                            <del className='discount'>&#8358;{numberWithCommas(p.discount * p.count)}</del>
                        </div>
                    </div>
                    <div className='cartFU' >
                        <span className=''><IoMdHeart /></span>
                        <span className='rr' onClick={()=>delet(p.id)}><span  className=''><MdDelete /></span>REMOVE</span>
                        <span className='' onClick={() => subsrt(p.id)}><AiFillMinusCircle /></span>
                        {p.count}
                        <span onClick={() => add(p.id)}><AiFillPlusCircle /></span>
                    </div></div>
            })}</div>
        </div>

        <div className='Checkout'>
            <div className='CheckoutPrize'>
                <p>Total</p><p style={{ color: 'orange' }}>&#8358;{numberWithCommas(z)}</p></div>
            <div className='Cdel'>Delivery fee not included yet</div>
            <div className='CheckoutBTN'>checkout</div>
            <div className='CheckoutCALL'>call to order</div>
        </div>
        <div className='CartHelp'>
            <div className='CARTN'>Need Help?</div>
            <div className=''>chat with an expert</div>
        </div>
        <MPscroll p={products} seeAll={{ display: 'none' }} />
    </div>
    )
}