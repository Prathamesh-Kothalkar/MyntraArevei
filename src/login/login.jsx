import 'animate.css';
import { Link, useNavigate } from "react-router-dom";
import { useContext, useRef, useState } from 'react';
import axios from 'axios';
// import './login.css'
import {UserContext} from "../Context/UserContext"
const server = import.meta.env.VITE_BACKEND_SERVER;

export default function Login() {
    const {setIsLogin}=useContext(UserContext)
    let reftype = useRef();
    const navigate  = useNavigate();

    
    let handleClick = (e) => {
        if (reftype.current.type === "text" && reftype.current.value !== "") {
            reftype.current.type = "password";
            e.target.className = "fa-solid fa-eye-slash";
        } else if (reftype.current.type === "password" && reftype.current.value !== "") {
            reftype.current.type = "text";
            e.target.className = "fa-solid fa-eye";
        }
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
    try {
            const response = await axios.post(`${server}/v1/user/signin`, {
                email,
                password
            });

            localStorage.setItem("token",response.data.token);
            alert(response.data.message);
            setIsLogin(true);
            navigate('/');
        } catch (err) {
            console.error("Error while Login:", err.response ? err.response.data : err.message);
            let x=err.response ? err.response.data.message : err.message;
            console.log(x);
            let str=`Error while Login: ${x}`;
            alert(str)

        }
    };

    return (
        <div className="loginContainer">
            <div className="loginBanner">
                <div className="loginText animate__animated animate__bounce animate__delay-0.5s">LOGIN</div>
                <div className="card1 animate__animated animate__fadeInUp">
                    <img src="https://i.ibb.co/ZSQC38p/newlogo-removebg-preview.png" alt="logo" />
                    <form onSubmit={handleLogin}>
                        <div className="inputdiv">
                            <label htmlFor="Email" className='animate__animated animate__fadeInLeft animate__delay-1s'>
                                Email: &nbsp;&nbsp;&nbsp;
                                <input 
                                    type="email" 
                                    onChange={(e) => setEmail(e.target.value)} 
                                    name="Email" 
                                    id="Email" 
                                    placeholder='abc@xxx.com' 
                                    className='animate__animated animate__fadeInRightBig animate__delay-1s' 
                                    required
                                />
                            </label>
                        </div>
                        <div className="inputdiv">
                            <label htmlFor="pass" className='animate__animated animate__fadeInLeft animate__delay-1s'>
                                Password: &nbsp;&nbsp;&nbsp;<i className="fa-solid fa-eye-slash" onClick={handleClick}></i>
                                <input 
                                    onChange={(e) => setPassword(e.target.value)} 
                                    type="password" 
                                    name="pass" 
                                    id="pass" 
                                    ref={reftype} 
                                    placeholder='****' 
                                    className='animate__animated animate__fadeInRightBig animate__delay-1s' 
                                    required
                                />
                            </label>
                        </div>
                        <div className="inputdiv animate__animated animate__zoomIn animate__delay-1s">
                            <div className='tandc'>
                                By continuing, I agree to the <strong>Terms and Conditions</strong>
                            </div>
                        </div>
                        <div className="inputdiv animate__animated animate__backInUp animate__delay-2s animate__repeat-1">
                            <button type="submit" className='submitbtn'>LOGIN</button>
                        </div>
                        <div className="inputdiv animate__animated animate__zoomIn animate__delay-1s">
                            <div className='tandc'>
                                Not having an account? <strong><Link to="/signup">SIGN-UP</Link></strong>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
