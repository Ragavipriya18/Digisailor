import React, {useState} from "react";
import './Apply.css';

import {Link} from "react-router-dom";
function Apply(){

    //let name;
    //let mail;
    //et gender;
    //let phone;
    //let city;
    //let resume;
    //let msg;

    const[nameState,setNameState]=useState("");
    const[mailState,setMailState]=useState("");
    const[genderState,setGenderState]=useState("");
    const[phoneState,setPhoneState]=useState("");
    const[cityState,setCityState]=useState("");
    const[resumeState,setResumeState]=useState("");
    const[msgState,setMsgState]=useState("");


   function Submit(){
       if(!nameState || !mailState || !genderState || !phoneState || !cityState || !resumeState || !msgState)
       {
        alert("*Please fill the required details");
       }
       else{
        alert("Submitted Successfully");
       }
      
    }


    return(
    
<div>
           
<h1 id="h1">
    Apply
</h1>
<div className="container6">
    <div>
        <Link to="/">HOME</Link>::
    </div>
    <div id="app">APPLY</div>
</div>

<br></br>
<br></br>

<div className="form">
    <div id="f1">

        <label-1>Name*</label-1>
        <br></br>
        <input type="text" placeholder="USERNAME"onChange={(event) => {
                    setNameState(event.target.value);}}/>
        <br></br>

    </div>
        <br></br>
    <div id="f2">

        <label-2>Email*</label-2>
        <br></br>
        <input type="email" placeholder="@GMAIL.COM" onChange={(event) => {
                    setMailState(event.target.value);}}/>
        <br></br>

    </div>
        <br></br>
    <div id="f3">

       
        <label-3 for="gender">Gender*</label-3>
        <br></br>
        <br></br>
        <select name="gender" onChange={(event) => {setGenderState(event.target.value);}}>
        <option value="choose">--CHOOSE--</option>
        <option value="female">Female</option>
        <option value="male">Male</option>
        <option value="other">Other</option>
        </select>




        <br></br>
        {/*<input type="text" placeholder=" -choose-"  onChange={(event) => {
                    setGenderState(event.target.value);}}/>*/}
        <br></br>

    </div>
        <br></br>
    <div id="f4">

        <label-4>Phone No*</label-4>
        <br></br>
        <input type="text" maxLength="10" size="10" placeholder="+91"onChange={(event) => {
                    setPhoneState(event.target.value);}}/>
        <br></br>

    </div>
        <br></br>
    <div id="f5">

        <label-5 >City/Town*</label-5>
        <br></br>
        <input type="text"  placeholder="CITY/TOWN"onChange={(event) => {
                    setCityState(event.target.value);}}/>
        <br></br>

    </div>
        <br></br>
    <div id="f6">

        <label-6>Resume*</label-6>
        <br></br>
        <input type="file" onChange={(event) => {
                    setResumeState(event.target.value);}}/>
        <br></br>

        </div>
        <br></br>
    <div id="f7">

        <label-7>Message*</label-7>
        <br></br>
        <input type="text" placeholder="MESSAGE" onChange={(event) => {
                    setMsgState(event.target.value);}}/>
                    
        <br></br>

    </div>
        <br></br>
    <div id="f8">
        <button onClick={Submit}>!--Submit--!</button>
    </div>
</div>







</div>
    );
}
export default Apply;