import { useRef, useState } from 'react';
import './signUp.css'
export default function SignUp(){
    let reftype = useRef();
    let handleClick = () => {
        // ref.current.style.backgroundColor = "black";
        if (reftype.current.type=="text" && reftype.current.value!="") {
            reftype.current.type="password";
        }else if(reftype.current.type=="password" && reftype.current.value!="") {
            reftype.current.type="text";
        }
    };
  return(
        <>
            <div className="loginContainer">
                <div className="loginBanner">
                    <div className="loginText">Sign-Up</div>
                    <div className="cards">
                        <div className="card1">
                            <form action="">
                                <div className="inputdiv">
                                <label htmlFor="Name">
                                    Name: &nbsp;&nbsp;&nbsp;
                                <input type="text" name="Name" id="Name" placeholder='Enter Name' required/>
                                </label>
                                </div><br></br>
                                <div className="inputdiv">
                                <label htmlFor="Phone">
                                    Phone: &nbsp;&nbsp;&nbsp;
                                <input type="text" name="Phone" id="Phone" placeholder='+91' required/>
                                </label>
                                </div><br></br>
                                <div className="inputdiv">
                                <label htmlFor="Email">
                                    Email: &nbsp;&nbsp;&nbsp;
                                <input type="email" name="Email" id="Email" placeholder='abc@xxx.xom' required/>
                                </label>
                                </div><br></br>
                                <div className="inputdiv">
                                <label htmlFor="pass">
                                    Password: &nbsp;&nbsp;&nbsp;
                                <input type="password" name="pass" id="pass" ref={reftype} required/>
                                </label>
                                </div><br></br>
                                <div className="inputdiv">
                                <div className='lookbtn borderleft' onClick={handleClick}>
                                {/* { {seeing}=="true" ? (<i class="fa-solid fa-eye"></i>) : (<i class="fa-solid fa-eye-slash"></i>) } */}
                                <i class="fa-solid fa-eye"></i>
                                </div>
                                <button type="submit" className='submitbtn'>SignUp</button>
                                </div><br></br>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}