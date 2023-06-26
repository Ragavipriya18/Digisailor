//import logo from './logo.svg';
import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Navbar from './Navbar';
import Content from './content';
import About from './About';
import Service from './Service';
import Works from './Works';
import Career from './Career';
import Contact from './Contact';
import Operation from './Operation';
import Foot from './footer';
import Apply from './Apply';
import ProjectDetails1 from './ProjectDetails1';
import ProjectDetails2 from './ProjectDetails2';
import ProjectDetails3 from './ProjectDetails3';
import ProjectDetails4 from './ProjectDetails4';
import ProjectDetails5 from './ProjectDetails5';
import ProjectDetails6 from './ProjectDetails6';



function App() {
  return (
    <div>
       
       <div>
      <BrowserRouter>
     
      
      <Navbar/>
      
       
        <Routes>
          <Route>
           
            <Route path='/' element={<Content/>}/>
            
            <Route  path='/About' element={<About/>}/>
            <Route  path='/service' element={<Service/>}/>
            <Route path='/works' element={<Works/>}/>
            <Route path='/career' element={<Career/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/operation' element={<Operation/>}/>
            <Route path='/Apply' element={<Apply/>}/>
            <Route path='/ProjectDetails1' element={<ProjectDetails1/>}/>
            <Route path='/ProjectDetails2' element={<ProjectDetails2/>}/>
            <Route path='/ProjectDetails3' element={<ProjectDetails3/>}/>
            <Route path='/ProjectDetails4' element={<ProjectDetails4/>}/>
            <Route path='/ProjectDetails5' element={<ProjectDetails5/>}/>
            <Route path='/ProjectDetails6' element={<ProjectDetails6/>}/>
          
          </Route>
          </Routes>
       
      
      <Foot/>
          </BrowserRouter>
          </div>
     
    </div>
    );
}
export default App;
