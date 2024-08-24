import 'animate.css';
import { Link } from "react-router-dom";
import { useRef, useState } from 'react';
// import logo from "MyntraArevei\src\assets\newlogo.jpeg";

import './login.css'
export default function Login() {
    let reftype = useRef();
    let handleClick = (e) => {
            console.log(e.target.className);
        // ref.current.style.backgroundColor = "black";
        if (reftype.current.type == "text" && reftype.current.value != "") {
            reftype.current.type = "password";
            e.target.className="fa-solid fa-eye-slash";
        } else if (reftype.current.type == "password" && reftype.current.value != "") {
            reftype.current.type = "text";
            e.target.className="fa-solid fa-eye";

        }
    };
    return (
        <>
            <div className="loginContainer">
                <div className="loginBanner">
                    <div className="loginText animate__animated animate__bounce animate__delay-0.5s">LOGIN</div>
                    <div className="card1 animate__animated animate__fadeInUp">
                        {/* <img src="https://i.ibb.co/WDcpcNh/newlogo.jpg" alt="logo" /> */}
                        <img src="https://i.ibb.co/ZSQC38p/newlogo-removebg-preview.png" alt="logo" />
                        <form action="">
                            <div className="inputdiv">
                                <label htmlFor="Email" className='animate__animated animate__fadeInLeft  animate__delay-1s'>
                                    Email: &nbsp;&nbsp;&nbsp;
                                    <input type="email" name="Email" id="Email" placeholder='abc@xxx.xom'  className='animate__animated animate__fadeInRightBig  animate__delay-1s'/>
                                </label>
                            </div>
                            <div className="inputdiv">
                                <label htmlFor="pass" className='animate__animated animate__fadeInLeft  animate__delay-1s'>
                                    Password: &nbsp;&nbsp;&nbsp;<i class="fa-solid fa-eye-slash" onClick={handleClick}></i>
                                    <input type="password" name="pass" id="pass" ref={reftype} placeholder='****' className='animate__animated animate__fadeInRightBig  animate__delay-1s'/>
                                </label>
                            </div>
                            <div className="inputdiv  animate__animated animate__zoomIn animate__delay-1s ">
                                <div className='tandc'>By continuing, i agree to the <strong>Terms and condtition</strong></div>
                            </div>
                            <div className="inputdiv animate__animated animate__flip animate__delay-1s animate__repeat-2">
                                <button type="submit" className='submitbtn'>LOGIN</button>
                            </div>
                            <div className="inputdiv  animate__animated animate__zoomIn animate__delay-1s ">
                                <div className='tandc'>Not having an account <strong><Link to="/signup">SIGN-IN</Link></strong></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
