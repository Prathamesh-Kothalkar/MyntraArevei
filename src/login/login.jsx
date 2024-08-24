import { Link } from "react-router-dom";
import { useRef, useState } from 'react';
import './login.css'
export default function Login() {
    let reftype = useRef();
    let handleClick = () => {
        // ref.current.style.backgroundColor = "black";
        if (reftype.current.type == "text" && reftype.current.value != "") {
            reftype.current.type = "password";
        } else if (reftype.current.type == "password" && reftype.current.value != "") {
            reftype.current.type = "text";
        }
    };
    return (
        <>
            <div className="loginContainer">
                <div className="loginBanner">
                    <div className="loginText">Login</div>
                    <div className="card1">
                        <img src="src\assets\clogo.jpeg" alt="logo" />
                        <form action="">
                            <div className="inputdiv">
                                <label htmlFor="Email">
                                    Email: &nbsp;&nbsp;&nbsp;
                                    <input type="email" name="Email" id="Email" placeholder='abc@xxx.xom' />
                                </label>
                            </div>
                            <div className="inputdiv">
                                <label htmlFor="pass">
                                    Password: &nbsp;&nbsp;&nbsp;
                                    <input type="password" name="pass" id="pass" ref={reftype} placeholder='****'/>
                                </label>
                            </div>
                            <div className="inputdiv">
                                <div className='tandc'>By continuing, i agree to the <strong>Terms and condtition</strong></div>
                            </div>
                            <div className="inputdiv">
                                <div className='lookbtn borderleft' onClick={handleClick}>
                                    <i class="fa-solid fa-eye"></i>
                                </div>
                                <button type="submit" className='submitbtn'>Continue</button>
                            </div>
                            <div className="inputdiv">
                                <div className='tandc'>Not having an account <strong><Link to="/signup">SIGN-IN</Link></strong></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
