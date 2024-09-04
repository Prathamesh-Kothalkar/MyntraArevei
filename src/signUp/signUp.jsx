import 'animate.css';
import { Link } from "react-router-dom";
import { useRef, useState } from 'react';
// import logo from "MyntraArevei\src\assets\newlogo.jpeg";

import './signUp.css'
export default function SignUp() {
    let reftype = useRef();
    let handleClick = (e) => {
        console.log(e.target.className);
        // ref.current.style.backgroundColor = "black";
        if (reftype.current.type == "text" && reftype.current.value != "") {
            reftype.current.type = "password";
            e.target.className = "fa-solid fa-eye-slash";
        } else if (reftype.current.type == "password" && reftype.current.value != "") {
            reftype.current.type = "text";
            e.target.className = "fa-solid fa-eye";
        }
        };
        return (
            <>
                <div className="loginContainer">
                    <div className="loginBanner">
                        <div className="loginText animate__animated animate__bounce animate__delay-0.5s">SIGNUP</div>
                        <div className="card1 animate__animated animate__fadeInUp">
                            {/* <img src="https://i.ibb.co/WDcpcNh/newlogo.jpg" alt="logo" /> */}
                            <img src="https://i.ibb.co/ZSQC38p/newlogo-removebg-preview.png" alt="logo" />
                            <form action="">
                                <div className="inputdiv">
                                    <label htmlFor="Name" className='animate__animated animate__fadeInLeft  animate__delay-1s'>
                                        Name: &nbsp;&nbsp;&nbsp;
                                    </label>

                                        <input type="text" name="Name" id="Name" placeholder='Full Name' className='animate__animated animate__fadeInRightBig  animate__delay-1s' />
                                </div>
                                <div className="inputdiv">
                                    <label htmlFor="phone" className='animate__animated animate__fadeInLeft  animate__delay-1s'>
                                        Phone: &nbsp;&nbsp;&nbsp;
                                    </label>

                                        <input type="text" name="phone" id="phone" placeholder='+91' className='animate__animated animate__fadeInRightBig  animate__delay-1s' />
                                </div>
                                <div className="inputdiv">
                                    <label htmlFor="Email" className='animate__animated animate__fadeInLeft  animate__delay-1s'>
                                        Email: &nbsp;&nbsp;&nbsp;
                                    </label>

                                        <input type="email" name="Email" id="Email" placeholder='abc@xxx.xom' className='animate__animated animate__fadeInRightBig  animate__delay-1s' />
                                </div>
                                <div className="inputdiv">
                                    <label htmlFor="pass" className='animate__animated animate__fadeInLeft  animate__delay-1s'>
                                        
                                        Password: &nbsp;&nbsp;&nbsp;
                                        
                                        <i class="fa-solid fa-eye-slash" onClick={handleClick}></i>
                                        </label>
                                        <input type="password" name="pass" id="pass" ref={reftype} placeholder='****' className='animate__animated animate__fadeInRightBig  animate__delay-1s' />
                                </div>
                                <div className="inputdiv  animate__animated animate__zoomIn animate__delay-1s ">
                                </div>
                                    <div className='tandc'>By continuing, i agree to the <strong>Terms and condtition</strong></div>
                                <div className="inputdiv animate__animated animate__backInUp animate__delay-2s animate__repeat-1">
                                    <button type="submit" className='submitbtn'>Continue</button>
                                </div>
                                <div className="inputdiv">
                                    <div className='tandc animate__animated animate__zoomIn animate__delay-1s'>Go to <strong><Link to="/">Home</Link></strong></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </>
        )
    }
