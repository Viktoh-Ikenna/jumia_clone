import React,{useState,useRef} from 'react'
import './product.css';
import {Link} from 'react-router-dom'

export const Products = ({item,width,key}) => {
const name=item.name.split('');
let shortened='';
name.length>17?shortened=name.splice(0,17):shortened=name;
let hey = [...shortened,'...'].join('');
    return (
        <Link to={`/item/${item.id}`} key={key} className='poducts' style={width}>
                    <img src={item.src[0]} />
                    <div className='name'>{hey}</div>
                    <div className='prize'>{item.prize}</div>
                    <del className='cancel'>{item.discount}</del>
        </Link>
    )
}
