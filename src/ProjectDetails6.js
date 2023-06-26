import React from "react";
import './ProjectDetails6.css';
import{Link} from "react-router-dom";
function ProjectDetails6(){

    function btnClick(){
        window.open("https://play.google.com/store/apps/details?id=com.freshwheels.digimart&hl=en_IN");
    }

    return(
        <div>
             <h1 id="h1">
             Fresh Wheels
            </h1>
         <div class="container11">
         <div><Link to='/'>HOME</Link>::</div>
          <div id="p">PROJECTS DETAILS</div>
         </div>

        <br></br>
        <br></br>

        <div className="pd6">
            <img id="d11" src="pd11.png" width="400px" alt=""></img>
            <img id="d12" src="pd12.png" width="400px" alt=""></img>
        </div>

        <div className="text16">
            <h2>Fresh Wheels</h2>
            <p>The project Fresh Wheels was a e-commerce app designed to sell and buy foods,gifts,cosmetics,dressess. etc.It consist of selling vast range of products in just a click of button. It allows the admin to manage and post all the products which helps the customers to buy the products online.</p>
            

            <p>The products were displayed with the rate and specifications which will be easy for the customer to review and buy the items.The customer can place order of the available socks by which the cash on delivery was available.The admin can also change the items avaiable to specific locations, districts upon by changing and setting up the postal codes.</p>
            
            <p>The other details like categories,order summary was stored in cloud storage. The firebase authentication was used with custom claims. As per the custom claims the database security rules were checked for each roll in the data document with user privilege which was limited per security check. There were 2 apps in this such as one for admin and other for students.These were the technologies used in this project.</p>

          
        </div>

        <div className="text17"> 
            <div id="y11">Core</div>
            <div id="y12">Technologies</div>
        </div>
        <br></br>
        
        <div className="text18">
            <div>Flutter</div>
            <div>Google Cloud Platforms</div>
        </div>

        <div>
            <button id="g6" onClick={btnClick}>Live Preview</button>
        </div>



        </div>
    );
}
export default ProjectDetails6;