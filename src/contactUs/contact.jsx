import './contact.css'
import { Link } from 'react-router-dom'
export default function Contact() {
    return (
        <>
            <div className="contactUsContainer">
                <div className="contactNav">
                    <div className="contactNavText">
                        <div className='contactNavText1'>HELP CENTER</div>
                        <div className='contactNavText2'>we are here to help you</div>
                    </div>
                    <div className="contactNavbox">
                        <i class="fa-solid fa-bag-shopping"></i>
                        <div className="contactNavboxtext">
                            <div className="contactNavboxtext1">TRACK, CANCEL, RETURN/EXCHANGE</div>
                            <div className='contactNavboxtext2'>Manage your purchases</div>
                        </div>
                        <div className="loginbutton">
                            <button className='buton'><Link to="/login">LOGIN</Link></button>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="contactbody">
                    <div className="contactbody1">
                        <div className="contactbody1text redcolor">SELECT QUERY TYPE</div>
                        <br />
                        <div className="contactbody1text">Order related queries &nbsp; <i class="fa-solid fa-chevron-right"></i></div>
                        <br />
                        <div className="contactbody1text">Non-order Related Issues &nbsp; <i class="fa-solid fa-chevron-right"></i></div>
                        <br />
                        <div className="contactbody1text">Recent Issues &nbsp; <i class="fa-solid fa-chevron-right"></i></div>
                        <br /><hr /><br />
                        <div className="contactbody1text">Frequently Asked Question &nbsp; <i class="fa-solid fa-chevron-right"></i></div>
                    </div>
                    <div className="contactbody2">
                        <div className="contactbody2text">Please Log In, if you have queries related to your recent purchases.</div>
                        <div className="loginbutton">
                            <button className='buton'><Link to="/login">LOGIN</Link></button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
