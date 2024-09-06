import 'animate.css';
import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from 'react';
// import logo from "MyntraArevei\src\assets\newlogo.jpeg";
import './signUp.css'
import axios from 'axios';
const server = import.meta.env.VITE_BACKEND_SERVER;
export default function SignUp() {
    let reftype = useRef();
    const navigate  = useNavigate();
    let handleEyeClick = (e) => {
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

    const [SignForm,setSignUpForm] = useState({name:'',email:'',phone:'',password:''});
    const handleChangeSignUp=(e)=>{
        setSignUpForm({...SignForm,[e.target.name]:e.target.value})
    }
    const handleSubmitSignup= async(e)=>{
            e.preventDefault();
            try {
                const response = await axios.post(`${server}/v1/user/signup`, SignForm);
                alert(response.data.message);
                navigate('/login');
            } catch (err) {
                console.error("Error while Login:", err.response ? err.response.data : err.message);
                let x=err.response ? err.response.data.message : err.message;
                console.log(x);
                let str=`Error while Signup: ${x}`;
                alert(str)
    
            }
    }
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

                                        <input type="text" name="name" value={SignForm.name} onChange={handleChangeSignUp} id="Name" placeholder='Full Name' className='animate__animated animate__fadeInRightBig  animate__delay-1s' />
                                </div>
                                <div className="inputdiv">
                                    <label htmlFor="phone" className='animate__animated animate__fadeInLeft  animate__delay-1s'>
                                        Phone: &nbsp;&nbsp;&nbsp;
                                    </label>

                                        <input type="text" name="phone" value={SignForm.phone} onChange={handleChangeSignUp} id="phone" placeholder='+91' className='animate__animated animate__fadeInRightBig  animate__delay-1s' />
                                </div>
                                <div className="inputdiv">
                                    <label htmlFor="Email" className='animate__animated animate__fadeInLeft  animate__delay-1s'>
                                        Email: &nbsp;&nbsp;&nbsp;
                                    </label>

                                        <input type="email" name="email" value={SignForm.email} onChange={handleChangeSignUp} id="Email" placeholder='abc@xxx.xom' className='animate__animated animate__fadeInRightBig  animate__delay-1s' />
                                </div>
                                <div className="inputdiv">
                                    <label htmlFor="pass" className='animate__animated animate__fadeInLeft  animate__delay-1s'>
                                        
                                        Password: &nbsp;&nbsp;&nbsp;
                                        
                                        <i class="fa-solid fa-eye-slash" onClick={handleEyeClick}></i>
                                        </label>
                                        <input type="password" name="password" value={SignForm.password}  onChange={handleChangeSignUp} id="pass" ref={reftype} placeholder='****' className='animate__animated animate__fadeInRightBig  animate__delay-1s' />
                                </div>
                                <div className="inputdiv  animate__animated animate__zoomIn animate__delay-1s ">
                                </div>
                                    <div className='tandc'>By continuing, i agree to the <strong>Terms and condtition</strong></div>
                                <div className="inputdiv animate__animated animate__backInUp animate__delay-2s animate__repeat-1">
                                    <button type="submit" className='submitbtn' onClick={handleSubmitSignup}>Continue</button>
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
