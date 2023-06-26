import React from "react";
import './ProjectDetails2.css';
import{Link} from "react-router-dom";
function ProjectDetails2(){

    function btnClick(){
        window.open("https://admin.binabersama.com/#/");
    }

    return(
        <div>
             <h1 id="h1">
             Bina Bersama
            </h1>
         <div class="container7">
         <div><Link to='/'>HOME</Link>::</div>
          <div id="p">PROJECTS DETAILS</div>
         </div>

        <br></br>
        <br></br>

        <div className="pd2">
            <img id="d3" src="pd3.png" width="400px" alt=""></img>
            <img id="d4" src="pd4.png" width="400px" alt=""></img>
        </div>

        <div className="text4">
            <h2>Bina Bersama</h2>
            <p>The project named Bina Bersama is a mobile application developed by flutter for Diaster Risk Management.It consist of modules like Flood-Prone Area, Retention ponds, Weather Forecast, E-PDRM Reporting which shows the map location of the affected areas it also have categories like NGO Database, Government Agencies, Ahli Parlimen & ADUN, Volunteers to connectect with the affected disaster areas and to help them accordingly by the received diaster information.</p>
            

            <p>We use cloud firebase and firestore data as a backend for this application. And in the Google Cloud Platform we use the Google Maps Platform from which several API's are integrated such as Geo Coding API, Location API, Map Coding for Android and Map Coding for IOS and location sensor was used to fectch the appropirate locations.</p>
            
            <p>All the images and file storage was managed by the firestorage in cloud database and no cloud storage is used. There were 2 apps in this such as one for mobile and other for web.These were the technologies used in this project.</p>

          
        </div>

        <div className="text5"> 
            <div id="y3">Core</div>
            <div id="y4">Technologies</div>
        </div>
        <br></br>
        
        <div className="text6">
            <div>Flutter</div>
            <div>Google Cloud Platforms</div>
        </div>

        <div>
            <button id="g2"onClick={btnClick}>Live Preview</button>
        </div>



        </div>
    );
}
export default ProjectDetails2;