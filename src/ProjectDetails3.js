import React from "react";
import './ProjectDetails3.css';
import{Link} from "react-router-dom";
function ProjectDetails3(){

    function btnClick(){
        window.open("https://ccm-web-4cd3d.web.app/#/");
    }

    return(
        <div>
             <h1 id="h1">
             Crystal Clear Management
            </h1>
         <div class="container8">
         <div><Link to='/'>HOME</Link>::</div>
          <div id="p">PROJECTS DETAILS</div>
         </div>

        <br></br>
        <br></br>

        <div className="pd3">
            <img id="d5" src="pd5.png" width="400px" alt=""></img>
            <img id="d6" src="pd6.png" width="400px" alt=""></img>
        </div>

        <div className="text7">
            <h2>Crystal Clear Management</h2>
            <p>The project Crystal Clear Management is a ERP Software which was developed by flutter programming language as a Web Application. The app includes various modules like Dashboard, Country list, Add quotation, invoice,list invoice, Client addition, Contractor quotation etc.</p>
            

            <p>The Google Cloud Platform was used to store datas in this such as firebase and firestore. The autentication was also assigned for each country using the security rules as which the appropirate country can only access such data in which only the desired country has the access over others. The same authentication rule was also deployed for each data.The authorisation was also assigned for security rules in which it was integrated for admin that only admin have access to manage the datas in which the other persons has access restriction.</p>
            
            <p>The firebase authentication was used with custom claims. As per the custom claims the database security rules were checked for each roll in the data document with user privilege which was limited per security check. In which certain stuffs were assigned to that authorised admin.These were the technologies used in this project.</p>

          
        </div>

        <div className="text8"> 
            <div id="y5">Core</div>
            <div id="y6">Technologies</div>
        </div>
        <br></br>
        
        <div className="text9">
            <div>Flutter</div>
            <div>Google Cloud Platforms</div>
        </div>

        <div>
            <button id="g3"onClick={btnClick}>Live Preview</button>
        </div>



        </div>
    );
}
export default ProjectDetails3;