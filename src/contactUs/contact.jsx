import './contact.css'
export default function Contact(){
    return(
        <>
            <div className="contactUsContainer">
                <div className="contactUsBanner">
                    <div className="contactText">Contact Us</div>
                    {/* <img src="\mobile-removebg-preview.png" alt="mobileImg"/> */}
                    <i class="fa-solid fa-phone"></i>
                    <div className="cards">
                        <div className="card1">
                            <div className="image"><i class="fa-solid fa-user-large"></i></div>
                            <div className="text">TALK TO OUR<br></br>CUSTOMER SERVICE MEMBER</div>
                            <div><button className='btn'>TAKE ME THERE</button></div>
                        </div>
                        <div className="card1">
                            <div className="image"><i class="fa-solid fa-robot"></i></div>
                            <div className="text">TALK TO OUR<br></br>AI CHAT BOX</div>
                            <div><button className='btn'>TAKE ME THERE</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}