import React, { useState, useEffect,useRef } from 'react'
import './MB.css';
import { images } from '../banner/banner';

export const MobileBanner = () => {
    const [current, setCurrent] = useState(0);
    let c=useRef();
    /*
    const left=()=>{
        setCurrent(current === 0 ? images.length - 1 : current - 1)
    }
    const right=()=>{
        setCurrent(current === images.length - 1 ? 0 : current + 1)
    }
  
    useEffect(()=>{
        let next=setInterval(()=>{
           sc();
        }
        ,3000);
    return ()=>clearInterval(next);
    },[current])
    
   const sc=()=>{
       if(c.current.scrollLeft<1655 &&(1655-c.current.scrollLeft)>270){
        setCurrent(current+270);
        c.current.scrollLeft=current;
       }else if((1655-c.current.scrollLeft)<270&&(1655-c.current.scrollLeft)>50){
        setCurrent(current+(1655-c.current.scrollLeft)); 
        c.current.scrollLeft=0; 
       }else if((1655-c.current.scrollLeft)<=50){
           setCurrent(0);
        c.current.scrollLeft=0;  
       }
      
}
*/ 
    return (
        <div ref={c} id='MBco'  className='Mbanner '  >
            <div id='MBshift'>
            {images.map((e)=><a href={e.link} ><img src={e.src} /></a>)
                }
            </div>
        </div>
    )
}
