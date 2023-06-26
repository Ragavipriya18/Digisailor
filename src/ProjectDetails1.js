import React from "react";
import './ProjectDetails1.css';
import{Link} from "react-router-dom";
function ProjectDetails1(){

function btnClick(){
    window.open("https://play.google.com/store/apps/details?id=com.techinsight.safeCampusAdmin");
}

    return(
        <div>
             <h1 id="h1">
             Infrastructure University Kuala Lumpur (IUKL)
            </h1>
         <div class="container6">
         <div><Link to='/'>HOME</Link>::</div>
          <div id="p">PROJECTS DETAILS</div>
         </div>

        <br></br>
        <br></br>

        <div className="pd1">
            <img id="d1" src="pd1.png" width="400px" alt=""></img>
            <img id="d2" src="pd2.png" width="400px" alt=""></img>
        </div>

        <div className="text1">
            <h2>Infrastructure University of Kuala Lumpur</h2>
            <p>The project Infrastructure University Kuala Lumpur was designed for a safe campus in a school to detect the linked covid affected peers among the students through a watch. The IUKL app consists of a JSON Response stream when parsing it reads to get a device ID.Every profile will be linked to the device ID using the JSON response parsed to find and trace the contacts between the two profiles, which helps to track down link between device to device. By using this we map the people to people contact by changing it.The main technologies used in this was App engine.</p>
            

            <p>We use the App Engine to call the response which was fetched from JSON to parse and update with the working database.The Google Pub Scheduler allows to call the function in the App Engine per minute which is the part of the Google Cloud Engine.The Cloud functions were used as it is a Google Cloud Engine Service along with this the Firebase and Firestore were used to sync the real time database with App Engine.</p>
            
            <p>The other details like Assessments, Announcements were saved in the cloud firestore. The firebase authentication was used with custom claims. As per the custom claims the database security rules were checked for each roll in the data document with user privilege which was limited per security check. There were 2 apps in this such as one for admin and other for students.These were the technologies used in this project.</p>

          
        </div>

        <div className="text2"> 
            <div id="y1">Core</div>
            <div id="y2">Technologies</div>
        </div>
        <br></br>
        
        <div className="text3">
            <div>Flutter</div>
            <div>Google Cloud Platforms</div>
        </div>

        <div>
            <button id="g1"onClick={btnClick}>Live Preview</button>
        </div>



        </div>
    );
}
export default ProjectDetails1;