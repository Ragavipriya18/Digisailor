import React from "react";
import './Service.css';
import {Link} from "react-router-dom";
function Service(){
    return(
       <div class="s01">
        <h1>
            Services
        </h1>
       <div class="container2">
       <div><Link to='/'>HOME</Link>::</div>
        <div id="s">SERVICES</div>
       </div>
       <br>
       </br>
       <br>
       </br>
       <br>
       </br>
       <div class="row1">
        <img src="s1.png" width="350px" alt="i1"></img>
        <img src="s2.png" width="350px" alt="i2"></img>
        <img src="s3.png" width="350px" alt="i3"></img>

       </div>
       <br>
       </br>
       <br>
       </br>
       <div className="row2">
        <h1-1>Automation & AI</h1-1>
        <h1-2>Analytics & Insights</h1-2>
        <h1-3>Application Development</h1-3>
        </div>
        <br>
        </br>
        <br>
        </br>
      
       <div className="row3">
        <img src="s4.png" width="350px" alt="i4">
        </img>
        <img src="s5.png" width="350px" alt="i5">
        </img>
        <img src="s6.png" width="350px" alt="i6">
        </img>

       </div>
       <br>
       </br>
       <br>
       </br>
       <div className="row4">
        <h1-4>Cloud Infrastructure</h1-4>
        <h1-5>E-Commerce</h1-5>
        <h1-6>VR & AR</h1-6>
        </div>
        <br>
        </br>
        <br>
        </br>
        <div className="row5">
        <img src="s7.png" width="350px" alt="i4">
        </img>
        <img src="s8.png" width="350px" alt="i5">
        </img>
        <img src="s9.png" width="350px" alt="i6">
        </img>
        </div>
        <br>
        </br>
        <br>
        </br>
        <div className="row6">
        <h1-7>IoT</h1-7>
        <h1-8>Branding & Digital Marketing</h1-8>
        <h1-9>Graphics & Multimedia</h1-9>
        </div>
        <br>
        </br>
        <br>
        </br>

        <div className="row7">
        <img src="s10.png" width="350px" alt="i4"></img>

        </div>
        <br>
        </br>
        <br>
        </br>
        <div className="row8">
             <h1-10>IT Audit</h1-10>
        </div>
       </div>

      

      
       
    );
}
export default Service;