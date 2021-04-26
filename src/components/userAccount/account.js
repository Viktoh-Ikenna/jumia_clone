import React,{useState} from 'react'
import './account.css'
import { BsArrowLeftShort } from 'react-icons/bs';
import { Login } from './user/Login';
import {
    BrowserRouter as Router,
    Switch,
    Route,useHistory,
    Link, useParams, useLocation
} from "react-router-dom";
import { Create } from './create/Create';

export const Account = () => {
    let loca = useHistory();
    
    const [switc,set]=useState('');
    const params = useParams();
    return (
        <div className='account'>
            <div className='ALogo'><span onClick={()=>loca.goBack()}><BsArrowLeftShort/></span> <img src='https://group.jumia.com/wp-content/uploads/2019/02/Jumia-group-logo.png' /></div>
            <div className='ASwitch'><Link to='/account/login' className={params.the==='login'&&'bb'}>LOGIN</Link>
                <Link to='/account/create' className={params.the==='create'&&'bb'}>CREATE ACCOUNT</Link></div>
            <div className='' style={{margin:'10px 0'}}>
              {params.the==='login'&&<Login />}
              {params.the==='create'&&<Create />}

            </div>

        </div>
    )
}
