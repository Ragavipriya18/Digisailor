import React from "react"
import {Link} from "react-router-dom";
import {FaFacebook,FaInstagram, FaLinkedin, FaShoppingBasket, FaYoutube} from 'react-icons/fa';
import "./footer.css"

function Foot(){
    return(


        <div>
            <div className="ft1">
                
                <div className="co1">
                    <img src="logo1.png" width="250px" alt=""></img>
                    <br></br>
                    <br></br>
                    <div>We help digitize end-to-end business <br></br>processes and services to power <br></br>excellent customer journeys.</div>
                    <br></br>
                    <div className="icons">

                    <div><Link to="https://www.facebook.com/digisailors"><FaFacebook size="2rem" color="black"/></Link></div>
                    <div><Link to="https://www.google.com/maps/place/Digisailor/@8.7930721,78.12061,17z/data=!3m1!4b1!4m6!3m5!1s0x3b03f12eb6172b3d:0xc6c107f939ec6592!8m2!3d8.7930721!4d78.12061!16s%2Fg%2F11fnnhshk8?entry=ttu"><FaShoppingBasket size="2rem" color="black"/></Link></div>
                    <div><Link to="https://www.instagram.com/digisailor/"><FaInstagram size="2rem" color="black"/></Link></div>
                    <div><Link to="https://www.youtube.com/channel/UCJcDp-NM4vpFs3AUzB4n1pQ"><FaYoutube size="2rem" color="black"/></Link></div>
                    <div><Link to="https://www.linkedin.com/company/digisailor"><FaLinkedin size="2rem" color="black"/></Link></div>


                    </div>
                </div>

                <div className="co2">
                    <div id="t1">Our Entities</div>
                    <br></br>
                    <div><Link to="https://rasla.co/">Rasla</Link></div>
                    <br></br>
                    <div><Link to="https://curlybrace.org/">Curly Brace</Link></div>
                    <br></br>
                    <div><Link to="https://www.muthunagar.com/">Muthunagar.com</Link></div>
                    <br></br>
                    <div><Link to="https://businessbook.digisailor.com/">Business Book</Link></div>
                    <br></br>
                    <div><Link to="https://www.digisailor.com/">Digisailor</Link></div>
                    <br></br>
                    
                </div>

                <div className="co3">
                    <div id="u1">Ouick Links</div>
                    <br></br>
                    <div><Link to="https://digisailor.medium.com/">Medium</Link></div>
                    <br></br>
                    <div><Link to="https://www.behance.net/infodigisailor">Behance</Link></div>
                    <br></br>
                    <div><Link to="https://dribbble.com/digisailor">Dribble</Link></div>
                    <br></br>
                    <div><Link to="https://www.glassdoor.co.in/Overview/Working-at-Digisailor-EI_IE3447762.11,21.htm">Glassdoor</Link></div>
                    <br></br>
                    <div><Link to="https://www.digisailor.com/faq">Faq</Link></div>
                </div>

                <div className="co4">
                    <div id="j1">Contact Us</div>
                    <br></br>
                    <div>India | Singapore</div>
                    <br></br>
                    <div>Malaysia | USA</div>
                    <br></br>
                    <div>Germany | UK
</div>
                    <br></br>
                    <div id="k1"><div>Email:</div> <div id="o1"><Link to="https://gmail.com">info@digisailor</Link></div></div>
                    <br></br>
                    <div id="k2"><div>Whatsapp:</div><div id="o2"><Link to="https://api.whatsapp.com">+91 7904210874</Link></div></div>
                </div>



            </div>



        <div className="ft2">
        
        
            <div className="footer1">© 2023 Digisailor.All rights reserved.</div>
            <div className="footer2">🌿 Carbon Neutral Since 2014.</div>
            <div className="footer3">Privacy Policy-Terms & Conditions.</div>
    </div>
    </div>
       
    );
}
export default Foot;