import React from "react";
import './ProjectDetails4.css';
import{Link} from "react-router-dom";
function ProjectDetails4(){

    function btnClick(){
        window.open("https://psx-electronics.web.app/#/");
    }

    return(
        <div>
             <h1 id="h1">
             PSX Technologies
            </h1>
         <div class="container9">
         <div><Link to='/'>HOME</Link>::</div>
          <div id="p">PROJECTS DETAILS</div>
         </div>

        <br></br>
        <br></br>

        <div className="pd4">
            <img id="d7" src="pd7.png" width="400px" alt=""></img>
            <img id="d8" src="pd8.png" width="400px" alt=""></img>
        </div>

        <div className="text10">
            <h2>PSX Technologies</h2>
            <p>The project PSX technologies App was designed for a technicians to give their desired customer service.It consists of 2 apps like web app for admin and the mobile app for technicians. The app consist of various modules like dashboard, Job list, Add jobs,Employee list etc.</p>
            

            <p>We use the firestorage to store the image and files which is the part of Google Cloud Platform.The Cloud functions were used as it is a Google Cloud Engine Service along with this the Firebase and Firestore were used to sync the real time database.</p>
            
            <p>The other details like Admin profiles were saved in the cloud firestore. The overall app is designed for both Android and IOS.These were the technologies used in this project.</p>

          
        </div>

        <div className="text11"> 
            <div id="y7">Core</div>
            <div id="y8">Technologies</div>
        </div>
        <br></br>
        
        <div className="text12">
            <div>Flutter</div>
            <div>Google Cloud Platforms</div>
        </div>

        <div>
            <button id="g4"onClick={btnClick}>Live Preview</button>
        </div>



        </div>
    );
}
export default ProjectDetails4;