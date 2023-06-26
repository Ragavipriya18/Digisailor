import React from "react";
import './ProjectDetails5.css';
import{Link} from "react-router-dom";
function ProjectDetails5(){

    function btnClick(){
        window.open("https://school-app-aed59.web.app/#/");
    }

    return(
        <div>
             <h1 id="h1">
             Saint International School
            </h1>
         <div class="container10">
         <div><Link to='/'>HOME</Link>::</div>
          <div id="p">PROJECTS DETAILS</div>
         </div>

        <br></br>
        <br></br>

        <div className="pd5">
            <img id="d9" src="pd9.png" width="400px" alt=""></img>
            <img id="d10" src="pd10.png" width="400px" alt=""></img>
        </div>

        <div className="text13">
            <h2>Saint International School</h2>
            <p>The Saint International School application was designed for a that school security guard to inform the students about their parrents arrival. The app was designed using flutter language and it consist of various modules like text to speech, students list, dashboard, add students,queue etc. The key note is the carrousel module which helps to display and announce the students name in the class screen.</p>
            

            <p>The text to speech plugin was used as flutter provide such native.The audio of the student name will be played for every one minute by timer. As the security induces push to queue button the appropirate student will be displayed in the carrousel.</p>
            
            <p>There over files and media was stored using Google Cloud Platform using firebase and firestore as its back end.There were 2 apps in this such as one for admin and other for students.These were the technologies used in this project.</p>

          
        </div>

        <div className="text14"> 
            <div id="y9">Core</div>
            <div id="y10">Technologies</div>
        </div>
        <br></br>
        
        <div className="text15">
            <div>Flutter</div>
            <div>Google Cloud Platforms</div>
        </div>

        <div>
            <button id="g5" onClick={btnClick}>Live Preview</button>
        </div>



        </div>
    );
}
export default ProjectDetails5;