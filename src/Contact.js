import React, {useState} from "react";
import {Link} from "react-router-dom";
import './Contact.css';
function Contact(){

    const username = "digisailorcompany";
    const password = "digisailor@123";

    const [usernameState, setUsernameState] = useState("");
    const [passwordState, setPasswordState] = useState("");
    const [loggedIn, setLoggedIn]=useState(false);

    function Login(){
        if (usernameState === username && passwordState === password){
                setLoggedIn(true);
                alert("Logged In Successfully!!!")
                
        }
        else if(usernameState === "" && passwordState === ""){
                alert("*Please fill the required fields")
        }
        else{

          alert("Unsuccessful Login");
           
        }
    }

    return(
        <div>
        <div class="log">
        <h1>
            Login
        </h1>
       <div class="containerl1">
       <div><Link to='/'>HOME</Link>::</div>
        <div id="l">LOGIN</div>
       </div>
       </div>

        <div class="login_image">
            <img src="img11.png" width="100" alt="iii"></img>
            <h1>LOGIN</h1>
            <div class="user">
                <label>Username:</label>
                <input type='text' placeholder="Username"onChange={(event) => {
                    setUsernameState(event.target.value);}}/>
                    </div>

                <div class="pass">
                    <label>Password:</label>
                    
                
                <input type="password" placeholder="Password" onChange={(event) => {
                    setPasswordState(event.target.value)}}/>
                    </div>
                <div class="btn">
                <button onClick={Login}>Submit</button>
                    </div>
                
                {loggedIn &&
                <h1 id="h2">LOGGED IN SUCCESSFULLY</h1>
                }

</div>
</div>

    );
}
export default Contact;