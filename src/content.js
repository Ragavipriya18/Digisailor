import React from "react";
import "./content.css";
import { FaCode, FaBuilding, FaDesktop,FaThumbtack,FaQuoteRight,FaLink} from "react-icons/fa";
import {Link} from "react-router-dom";
function Content()
{
    function BTN2(){
        window.open('https://api.whatsapp.com');
    }
    
    return(
        <div>
            <div className="home">

            <div className="hom1">
                <h2>WE HELP CLIENTcS PIVOT FROM THINKING DIGITAL<br></br>
TO BEING DIGITAL.</h2><p>Through interactive experiences that captivate customers, analytics that transform big data into even bigger actions and new mobile technologies that harness the power of IOT and Living Services.</p>

<button id="l1"><Link to="/About">Read More</Link></button>

            </div>

            <div className="hom2">
            <img src="home.png" alt="" width="500px"></img>
           {/*<Link to="https://www.youtube.com/watch?v=ReRAJbMyMGc" className="LINK"><FaYoutube size="6rem" color="#4AC728"/></Link>*/}
            </div>
           
</div>

        <div className="hom3">
            <div className="m1"><FaCode size="1.2rem" color="black"/>Development+</div>
            <div className="m2"><FaDesktop size="1.2rem" color="black"/>Data&AI+</div>
            <div className="m3"><FaBuilding size="1.2rem" color="black"/>Digital Marketing+</div>
        </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

        <div className="hom4">
            <div className="hom4a">
                <div><h4>OUR SERVICES</h4></div>
                <div><h2>Let’s advance every aspect of your <br></br> business with digital</h2></div>
                <div><p>Together, let’s make your products smarter. Your customer experiences more exceptional. Your people more productive. Your processes more profitable. And your systems more powerful.</p></div>
            </div>

            <div className="hom4b">
                <div><img src="home1.png" width="500px" alt=""></img></div>
            </div>

        </div>

            <br></br>
            <br></br>
            <br></br>
            <br></br>

        <div className="hom5">
            <div className="hom5a"><img src="home2.png" alt="" width="500px"></img>
            </div>

            <div className="hom5b">
                <div><h4>ABOUT US</h4></div>
                <div><h2>Where some see uncertainty,<br></br> We see possibilities</h2></div>
                <div><p>As a digital business transformation partner of choice, we’ve spent nearly a decade utilizing the disruptive power of technology and ingenuity to help digitally enable our clients' business in their pursuit of next.</p></div>
                <button id="l2"><Link to="/About">View More</Link></button>
            </div>
        </div>

            <br></br>
            <br></br>
            <br></br>
            <br></br>

        <div className="hom6">
            <div className="hom6a">
                <div><h4>INNOVATION WITH PURPOSE</h4></div>
                <div><h2>Digital at scale and speed</h2></div>
                <div><p>You want to put digital to work to keep up with new pressures in your industry, or to leapfrog your competition. But an organization of size and reach requires an intelligent, tactical approach that truly transforms the way business gets done across your hundreds of systems without disrupting business as usual for your millions of customers. You need to rethink how you create value everywhere in your business.</p></div>
            </div>

            <div className="hom6b">
                <div><img src="home3.png" alt="" width="500px"></img></div>
            </div>
        </div>

            <br></br> 
            <br></br>
            <br></br>
            <br></br>

        <div className="hom7">
            <div className="hom7a">
                <img src="home4.png" width="300px" alt=""></img>
            </div>

            <div className="hom7b"><img src="home5.png" width="300px" alt=""></img></div>
            <div className="hom7c"><img src="home6.png" width="300px" alt=""></img></div>
        </div> 

        {/*<div className="hom8">
            <div className="hom8a"><h3>Digital Business</h3></div>
            <div className="hom8b"><h3>Digital Operations</h3></div>
            <div className="hom8c"><h3>Digital Systems & Technology</h3></div>
        </div>*/}
            <br></br> 
            <br></br>
            <br></br>
            <br></br>

        <div className="hom9">
            <div><h3>We Take Care Of Your Technology</h3></div>
            <div><h2>Focus On Your<br></br> Business</h2></div>
            <div><button onClick={BTN2}>Chat With Us</button></div>
        </div>

            <br></br> 
            <br></br>
            <br></br>
            <br></br>

        <div className="hom10">
            <div className="hom10a">
                <div><h4>THE FUTURE FROM AN ALTERNATIVE PRESPECTIVE</h4></div>
                <div><h2>Innovation Focus Areas</h2></div>
                <div><p>The future is discovered in the unexpected. It’s found where no one has thought to look. <br></br> And where no one, yet, has had the courage to go.</p></div>
            </div>

            

            <div className="hom10b">
                <img src="home8.png" alt="" width="400px"></img>
            </div>
        </div>

            <br></br> 
            <br></br>
            <br></br>
            <br></br>


        <div className="hom11">
            <div className="hom11a">
                <div><h4>TOGETHER WE GROW</h4></div>
                <div><h2>Take A Peek At Our Latest Projects</h2></div>
                <div><p>We listen. We advise. We design. Together. Our success is measured by results, the most important being how our clients feel about their experience with us. Happy customers and ongoing relationships are what we strive for.</p></div>
            </div>

            

            <div className="hom11b">
                <img src="home9.png" alt="" width="400px"></img>
            </div>
        </div>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        
        <div className="hom12">

        <div className="hom12a">
            <div><h6>Casadepepe / Chennai,India<FaThumbtack color="white" size="1rem"/></h6></div>
            <div><p>Rental property management mobile applications</p></div>
            <div></div>
        </div>

        <div className="hom12b">
            <img src="home10.png" width="300px" alt=""></img>
    
        </div>

        <div className="hom12c">
            <div><h6>Naati CCL Singapore<FaQuoteRight color="white" size="1rem"/></h6></div>
            <div><p>Online Test Platform for Naati CCL Tamil</p></div>
            <div></div>
        </div>
    </div>

    <div className="hom13">
        <div className="hom13a">
            <img src="home11.png" alt="" width="400px"></img>
        </div>
        
        <div className="hom13b">
            <div><h6>Ryukaa Singapore</h6></div>
            <div><p>Online Travel Booking Web-portal and Mobile Applications</p></div>
            
        </div>

        <div className="hom13c">
            <img src="home12.png" alt="" width="300px"></img>
        </div>
    </div>

    <div className="hom14">
        <div className="hom14a">
            <div><h6>Rivervalley Resthome / Northampton,USA</h6></div>
            <div><p>Website for Rivervalley Resthome Community Support Facility</p></div>
        </div>
        <div className="hom14b">
            <div><h6>Dhanamuthra / Kovilpatti,India<FaLink size="1rem" color="white"/></h6></div>
            <div><p>Online People Service Mobile Application</p></div>
        </div>
        <div className="hom14c">
            <div><h6>Sgmart / Tuticorin,India</h6></div>
            <div><p>Online Grocery Delivery E-commerce portal and Mobile Applications</p></div>
        </div>
    </div>

    






</div>      

















    
);
}
export default Content;