import React, {useState} from "react";
import './Operation.css';
import {Link} from "react-router-dom";
function Operation(){

    const [showState, setShowState] = useState(false);
    const [show1State, setShow1State] = useState(false);
    const [show2State, setShow2State] = useState(false);


    return(

       
        <div>
           
            <h1 id="h1">
                Us Operations
            </h1>
            <div className="container5">
                <div>
                    <Link to="/">HOME</Link>::
                </div>
                <div id="u">OPERATIONS</div>
            </div>
            <br>
            </br>
            <br>
            </br>

            <div className="w1">
            <div className="wrapper1">
                <img src="op1.png"  alt=""></img>

                <div className="wrapper2">
                    <h2>Digisailor - USA</h2>
                    <p>Our US Operations is managed by The Field CTO advisory firm. It is founded by a pioneer in IT industry Andy Thurai who is advisory, author, consultant and an independent analyst. The US Operations consist of multiple analysts, operations, IT experts.</p>

                </div>
                
                </div>
                </div>

                    

            <div className="division">  

            <div id="div1">Service Offered
            <button className="btn1" onClick={()=>setShowState(!showState)}>+</button>
            </div>
            
                {showState && <p id="last">*Full-Stack Application Development<br>
            </br>*Graphics & Multi-media Services<br></br>*IT Auditing Services<br></br>*Thought Leadership Content Product Services - Blogs, Videos, Podcast,  Customer Reports, Webinars, Use Cases<br></br>*Branding & Digital Marketing<br></br>*Consulting Services</p>}
            
            <br></br>

            <div id="div2">The field CTO
            <button className="btn2" color="green" onClick={()=>setShow1State(!show1State)}>+</button>
            </div>

                {show1State && <p id="last1">Field CTO is an emerging technology advisory, content, and consulting firm. We have independent analysts that are experts in their relative field, opinionated, and move the market with their thoughts.
                <br></br>
                <br></br>
                Our CXO influencing thought leaders can be seen in writing at Forbes, Harvard Business Review, ZDNet, Constellation Research, Venture Beat among other places. Our analysts are known for their thought-provoking keynotes, articles, and customer-facing presentations. Between them, they have published over 2000+ content pieces that are well recognized in the industry.
                <br></br>
                <br></br>
                Each one of our analysts are not only well known in the industry but also they have a huge following in the social media Over 30K+ followers (LinkedIn, Twitter and our Blog site). Our analysts thoughts are well respected, acted upon, and appreciated by CxO level which reaches out to us often to hear our opinions on certain company or solution set.</p>}

            <br></br>

            <div id="div3">Contact
            <button className="btn3" onClick={()=>setShow2State(!show2State)}>+</button></div>
            </div>

                {show2State && <p id="last2">The Field CTO,
                <br></br>
                800 West State Street,
                <br></br>
                Ste. 103, Doylestown, PA 18901
                <br></br>
                Email: info@thefieldcto.com
                <br></br>
                Phone : +1 508 353 8254</p>}



        
       

        </div>  
               
            

           
            
        
    
               
            
 
               
            

          
    );
}
export default Operation;