import React,{useState,useRef} from 'react'
import './product.css';

export const Products = ({item,width,key}) => {
const name=item.name.split('');
let shortened='';
name.length>17?shortened=name.splice(0,17):shortened=name;
let hey = [...shortened,'...'].join('');
    return (
        <div key={key} className='poducts' style={width}>
                    <img src={item.src} />
                    <div className='name'>{hey}</div>
                    <div className='prize'>{item.prize}</div>
                    <del className='cancel'>{item.discount}</del>
        </div>
    )
}
