import React, { useState, useEffect } from 'react'
import './itemP.css';
import { MdShare, MdStars, MdLocalShipping, MdAssignmentReturn, MdCall } from 'react-icons/md';
import { BsHeart } from 'react-icons/bs'
import { SiLamborghini } from 'react-icons/si'
import { RiHandCoinFill, RiArrowRightSLine } from 'react-icons/ri'
import { MPscroll } from '../MPscroll/MPscroll';
import { products } from '../productsever';
import {
    Link, useParams, useLocation
} from "react-router-dom";
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'

export const ItemPage = ({ set,cartItems }) => {
    const params = useParams();
    const locationl = useLocation();
    const [filtered, setfilter] = useState(null);
    useEffect(() => {
        let filter = products.filter(e => e.id === +params.id);
        let [fill] = filter;
        cartItems.map(e=>{
            if(e.id===fill.id){
                setcheck(true);
                setsetNewI(e)
            }
            })
          
        setfilter(fill);
    }, [+params.id]);

    const [orderS, setOrder] = useState({});

    window.onscroll = () => {
        try {
            if (document.querySelector('#ord').getBoundingClientRect().top - window.screen.availHeight+10>0) {
                setOrder({ position: 'fixed', width: '100%', bottom: -5, padding: '10px 0' });
            } else {
                setOrder({});
            }
        } catch (e) {

        }

    }



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
    if(filtered!==null){
 cartItems.map(e=>{
      if(e.id===filtered.id){
          setcheck(true);
          setsetNewI(e)
      }
      })
    }
},[cartItems])

    return (<>
        {filtered !== null ? <div>
            <div className='ITimgCont'>
                <div>
                    {filtered.src.map(e => <div><img src={e} /></div>)}
                </div>
            </div>
            <div className='products_itSelf'>
                <div className='ITname'>{filtered.name}</div>
                <div className='ITbrand'></div>
                <div className='ITprize'>{filtered.prize}</div>
                <div className='ITdisc'><del>{filtered.discount}</del><span>50%</span></div>
                <div className='ITrate'><p>(NO Rating available)</p><span><MdShare /></span><span><BsHeart /></span></div>
            </div>
            <div className='promotion'>
                <p className=''>PROMOTION</p>
                <div>

                    <div className='ITMN'><span><SiLamborghini /></span>
                        Borrow loans up to N100,000 to make everydat life easier
                    .No collectoral, no paperwork via jumiaPay financial partners.                </div>
                    <div className='ITMN'><span><MdStars /></span>Jumia Prime:Enjoy unlimited Free Delivery on jumia Express Items.</div>
                    <div className='ITMN'><span><MdStars /></span>
                        Enjoy cheaper shipping fees when you select a pickup station at checkout
                </div>
                </div>
            </div>
            <div className='ITDelivery'>
                <p>Delivery & Returns</p>
                <div className='ITDeliveryH'>
                    <div className='C'>Choose your location</div>
                    <select>
                        <option></option>
                        <option></option>
                        <option></option>
                    </select><br />
                    <select>
                        <option></option>
                        <option></option>
                        <option></option>
                    </select>
                    <div className='ITMN'><span><MdLocalShipping /></span>
                        <div>
                            <div><p>Door Delivery</p><a> Details</a></div>
                            Ready for delivery between 27 April & 29 April when you order within
                             next 16hrs 0mins

                               </div>
                    </div>
                    <div className='ITMN'><span><RiHandCoinFill /></span>
                        <div>
                            <div><p>Pickup Station</p><a>Details</a></div>
                            Ready for Pickup between 27 April & 29 April when you order within
                                                        next 16hrs 0mins
                        </div>
                    </div>
                    <div className='ITMN'><span><MdAssignmentReturn /></span>
                        <div>
                            <div><p>Return Policy</p></div>
                            Free return within 14days for jumia mall items and 7days for other eligible items <a>see more</a>
                        </div>
                    </div>

                </div>
            </div>
            <div className='ITdecription'>
                <p>PRODUCT DETAILS</p>
                <div className='ITd'>
                    <div className='DTitle'><p>Decription</p><p><RiArrowRightSLine /></p></div>
                    <div className=''>{filtered.description}</div>
                </div>
            </div>
            <MPscroll p={products} seeAll={{ display: 'none' }} />
            <MPscroll p={products} seeAll={{ display: 'none' }} />
            <div className='ITorder' style={orderS} >
                <div className='BTNcall'><MdCall /></div>
                
                {check!==true?<div className='BTNaddToCart' onClick={() => {
                    set((prev) => {
                        return [filtered, ...prev]
                    })
                }}>add to cart</div>:<>
                {newI===null?'loading':<div className='cartNum' >
                    <span className='' onClick={() => subsrt(filtered.id)}><AiFillMinusCircle /></span>
                    {newI.count}
                    <span onClick={() => add(filtered.id)}><AiFillPlusCircle /></span>
                </div>}</>}
            </div>
            <div id='ord'></div>
            <MPscroll p={products} seeAll={{ display: 'none' }} />
            <MPscroll p={products} seeAll={{ display: 'none' }} />
        </div> : 'loading'}
    </>
    )
}
