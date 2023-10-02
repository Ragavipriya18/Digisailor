import React from 'react';
import "./Navbar.css"
import {Link} from "react-router-dom";
function Navbar (){
    
    return(

        

        <div className='nav'>
        <div class="header">
                <img src="logo1.png" width="200" alt="Digisailor logo"></img>
        </div>
        
            <div className='menu'> 
                <nav class="menus">
                    <ul>
                    <li><Link to="/" class="c" >HOME</Link></li>
                    <li><Link to="/About" class="a" >ABOUT US</Link></li>
                    <li><Link to="/service" class="s" >SERVICES</Link></li>
                    <li><Link to="/works" class="w">WORKS</Link></li>
                    <li><Link to="/career" class="ca">CAREERS</Link> </li>
                    <li><Link to="/contact" class="co">LOGIN</Link>  </li>                 
                    <li><Link to="/operation" class="o">OPERATIONS</Link> </li>
                    </ul> 
                    
                        
                    
    
                </nav>
                
            </div>        
            </div>
 
);
}

export default Navbar;