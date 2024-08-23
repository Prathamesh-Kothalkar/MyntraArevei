import './loginSignUp.css'
import { Link } from "react-router-dom";
export default function LoginSignUp(){

  return(
        <>
            <div className="loginSignupContainer">
                <div className="loginSignupBanner">
                    <div className="contactText">Login/SignUp</div>
                    {/* <img src="\mobile-removebg-preview.png" alt="mobileImg"/> */}
                    <i class="fa-solid fa-user-large"></i>
                    <div className="cards">
                        <div className="card1">
                            <div className="image"><i class="fa-solid fa-right-to-bracket"></i></div>
                            <div className="text">LOGIN</div>
                            <div><button className='btn'><Link to="/login">WELCOME</Link></button></div>
                            {/* <div><button className='btn' onClick={onloginClick}>WELCOME</button></div> */}
                        </div>
                        <div className="card1">
                            <div className="image"><i class="fa-solid fa-user-plus"></i></div>
                            <div className="text">SIGN-UP</div>
                            <div><button className='btn'><Link to="/signup">JOIN US</Link></button></div>
                            {/* <div><button className='btn' onClick={onsignupClick}>JOIN US</button></div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}