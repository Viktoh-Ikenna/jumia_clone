import React, { useState } from 'react';
import './Login.css'
import { AiFillMail, AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { RiFacebookBoxFill } from 'react-icons/ri';


export const Login = () => {
   
    const [v, setV] = useState(false);
    const [classy, setinput] = useState({ mail: '', pass: '' });
    const HandleFocus = ({ target }) => {
        switch (target.placeholder) {
            case 'E-mail':
                setinput({ mail: 'mail', pass: '' })
                break;
            case 'Password':
                setinput({ mail: '', pass: 'pass' });
                break;
                defualt:
                setinput({ mail: '', pass: '' });
        }

    }

    return (
        <div className='ALogin'>
            <form>
                <p className={`${classy.mail}`} >E-mail</p>
                <div className='LEmail'><input fill='mail' onFocus={HandleFocus} type='text' placeholder='E-mail' /></div>
                <p className={`${classy.pass}`}>Password</p>
                <div className='Lpass'><input fill='pass' onFocus={HandleFocus} type='password' placeholder='Password' /><span>{v === true ? <AiFillEye /> : <AiFillEyeInvisible />}</span></div>
                <div className='Lremember'><label><input type='checkbox' />Remember me</label><a>Forget your Password</a></div>
                <div className='LOG'><AiFillMail /><span>LOGIN</span></div>
                <div className='or' >OR</div>
                <div className='FACE'><RiFacebookBoxFill /> <span>CONNECT WITH FACEBOOK</span></div>
                <div className='N'> new to jumia?</div>
                <div className='NewALink'>CREATE AN ACCOUNT</div>
            </form>
        </div>
    )
}
