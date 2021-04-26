import React, { useState } from 'react';
import './create.css'
import { AiFillMail, AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { RiFacebookBoxFill } from 'react-icons/ri';


export const Create = () => {
   
    const [v, setV] = useState(false);
    const [classy, setinput] = useState({ mail: '', pass: '',Lname:'',Fname:'' , Num:'' });
    const HandleFocus = ({ target }) => {
        switch (target.placeholder) {
            case 'E-mail':
                setinput({ mail: 'mail', pass: '',Lname:'',Fname:'' ,Num:''})
                break;
            case 'Password':
                setinput({ mail: '', pass: 'pass',Lname:'',Fname:'',Num:''  });
                break;
            case 'First Name':setinput({ mail: '', pass: '',Lname:'',Num:'',Fname:'mail'  });
            break;
            case 'Last Name':setinput({ mail: '', pass: '',Lname:'mail',Num:'',Fname:''  });
            break;
            case 'Phone Number (optional)' :setinput({ mail: '', pass: '',Num:'mail',Lname:'',Fname:''  });
            break;
            default:
                setinput({ mail: '', pass: '' ,Lname:'',Fname:'' ,Num:''});
        }

    }

    return (
        <div className='ACreate'>
            <form>
                <p className={`${classy.Fname}`} >First Name</p>
                <div className='LEmail'><input  onFocus={HandleFocus} type='text' placeholder='First Name' /></div>
                <p className={`${classy.Lname}`} >Last Name</p>
                <div className='LEmail'><input  onFocus={HandleFocus} type='text' placeholder='Last Name' /></div>
                <p className={`${classy.mail}`} >E-mail</p>
                <div className='LEmail'><input onFocus={HandleFocus} type='text' placeholder='E-mail' /></div>
                <p className={`${classy.pass}`}>Password</p>
                <div className='Lpass'><input  onFocus={HandleFocus} type='password' placeholder='Password' /><span>{v === true ? <AiFillEye /> : <AiFillEyeInvisible />}</span></div>
                <div className='num'>
                    <div style={{width:'15%',display:'flex',height:60,flexDirection:'column',justifyContent:'space-between'}}>
                        <a>Prefix</a>
                        <span>+234</span>
                    </div>
                <div className='LPhone'><p className={`${classy.Num}`}>Phone Number (optional)</p><input  onFocus={HandleFocus} type='text' placeholder='Phone Number (optional)' /></div>
                </div>
                
                <div className='Lremember'><label><input type='checkbox' />Remember me</label><a>Forget your Password</a></div>
                <div className='LOG'><AiFillMail /><span>CREATE ACCOUNT</span></div>
                <div className='or' >OR</div>
                <div className='FACE'><RiFacebookBoxFill /> <span>CONNECT WITH FACEBOOK</span></div>
                <div className='N'> already have an account?</div>
                <div className='NewALink'>Login</div>
            </form>
        </div>
    )
}
