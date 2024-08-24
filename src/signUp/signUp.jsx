import { Link } from "react-router-dom";
import { useRef, useState } from 'react';
// import logo from "MyntraArevei\src\assets\newlogo.jpeg";

import './signUp.css'
export default function SignUp() {
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
                    <div className="loginText">Signup</div>
                    <div className="card1">
                        {/* <img src="https://i.ibb.co/WDcpcNh/newlogo.jpg" alt="logo" /> */}
                        <img src="https://i.ibb.co/ZSQC38p/newlogo-removebg-preview.png" alt="logo" />
                        <form action="">
                            <div className="inputdiv">
                                <label htmlFor="Name">
                                    Name: &nbsp;&nbsp;&nbsp;
                                    <input type="text" name="Name" id="Name" placeholder='Full Name' />
                                </label>
                            </div>
                            <div className="inputdiv">
                                <label htmlFor="phone">
                                    Phone: &nbsp;&nbsp;&nbsp;
                                    <input type="text" name="phone" id="phone" placeholder='+91' />
                                </label>
                            </div>
                            <div className="inputdiv">
                                <label htmlFor="Email">
                                    Email: &nbsp;&nbsp;&nbsp;
                                    <input type="email" name="Email" id="Email" placeholder='abc@xxx.xom' />
                                </label>
                            </div>
                            <div className="inputdiv">
                                <label htmlFor="pass">
                                    Password: &nbsp;&nbsp;&nbsp;
                                    <input type="password" name="pass" id="pass" ref={reftype} placeholder='****' />
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
                                <div className='tandc'>Go to <strong><Link to="/">Home</Link></strong></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}
