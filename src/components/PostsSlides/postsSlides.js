import React,{ useState ,useEffect} from 'react'
import { Products } from '../products/products';
import './postslide.css';
import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from 'react-icons/io';


export const PostsSlides = ({seeAll,color,p}) => {
    const [current, setCurrent] = useState(0);
    const [Pshow, setshow] = useState('');
    const left=()=>{
        setCurrent(current === 0 ? p.length - 1 : current - 1)
    }
    const right=()=>{
        setCurrent(current === p.length - 5 ? 0 : current + 1)
    }
    return (
        <div className={`postslides ${Pshow}`} onMouseOver={()=>setshow('Pshow')} onMouseOut={()=>setshow('')}>
        <div style={color} className='seeAll'><h3>Top products of the week</h3><h3 style={seeAll}>See All ></h3></div>
        <div className='Pleft'><span  onClick={left} className={current===0&&'none'} ><IoIosArrowDropleftCircle/></span></div>
        <div className='pHolder' style={{marginLeft:`-${current*16}0px`}}>
          {p.map(e=> <Products item={e}/>)}
           </div>
           <div className='Pright'><span onClick={right} ><IoIosArrowDroprightCircle /></span></div>
           
        </div>
    )
}
