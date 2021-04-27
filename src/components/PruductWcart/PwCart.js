import React, { useState,useEffect } from 'react';
import './PwCart.css'
import { Link } from 'react-router-dom'
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'

export const PwCart = ({ item, key, set, cartItems }) => {
    const [check, setcheck] = useState(false);
    const [newI, setsetNewI] = useState(null);
    
    const add = (cut) => {
        let cc = cartItems.map((iteme) => {
            if (iteme.id === cut) {
                const update = { ...iteme, count: iteme.count + 1 }
                return update;
            }
            return iteme
        })
        set(cc)
    }

    const subsrt = (cut) => {
        let cc = cartItems.map((iteme) => {
            if (iteme.id === cut) {
                const update = {
                    ...iteme, count: iteme.count > 1 ? iteme.count - 1 : iteme.count
                }
                return update;
            }
            return iteme
        })
        set(cc)
    }
useEffect(()=>{
 cartItems.map(e=>{
      if(e.id===item.id){
          setcheck(true);
          setsetNewI(e)
      }
      })

},[cartItems])

function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return (

        <div key={key} className='CARTpoducts'>
            {check !== true ? <><Link to={`/item/${item.id}`}>
                <img src={item.src[0]} />
                <div className='Cname'>{item.name}</div>
                <div className='Cprize'>&#8358;{numberWithCommas(item.prize)}</div>
                <div className='Ccancel'><del>&#8358;{numberWithCommas(item.discount)}</del><span>53%</span></div>
                <div className='express'>
                    <p>jumia express</p>
                    <div>Eligible for free shipping with jumia(Lagos only )OR
                        jumia prime
                    </div>
                </div>
            </Link>
                <div className='addToCart' onClick={() => {
                    set((prev) => {
                        return [item, ...prev]
                    })
                }}>ADD TO CART</div></>
            :<>
                <Link to={`/item/${item.id}`}>
                    <img src={item.src[0]} />
                    <div className='Cname'>{item.name}</div>
                    <div className='Cprize'>{item.prize}</div>
                    <div className='Ccancel'><del>{item.discount}</del><span>53%</span></div>
                    <div className='express'>
                        <p>jumia express</p>
                        <div>Eligible for free shipping with jumia(Lagos only )OR
                            jumia prime
                    </div>
                    </div>
                </Link>
                {newI===null?'loading':<div className='cartNum' >
                    <span className='' onClick={() => subsrt(item.id)}><AiFillMinusCircle /></span>
                    {newI.count}
                    <span onClick={() => add(item.id)}><AiFillPlusCircle /></span>
                </div>}</>}
        </div>
    )
}
