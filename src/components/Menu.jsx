import React from 'react';
import '../styles/Menu.css'
import Amazon_logo from '../imagenes/Amazon_logo.svg.png';
import Form from './Form';
const Menu = () => {
    return ( 
       <>
     
       <nav>
            <ul className="navigation">
            <img src={Amazon_logo} className='logo' alt='Amazon'/>
          <li><a  className="navbar-brand" href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Contact</a></li>
          
          <Form/>
          </ul>
         
        
         

        </nav>
       </>

       
        
     );
}
 
export default Menu;