
import React, {Component} from 'react';
import { Link, Outlet } from 'react-router-dom';
import {RiHomeSmileLine} from "react-icons/ri"
class Navbar extends Component{
    render(){
     
      
      return(
        <>
        <header>
            <div id='head'>
               <div id='head-izq'>
                  
                    
                    <i id='logo-principal'><RiHomeSmileLine/></i>
                    <Link id="TelosSuite" to='/'>TelosSuite</Link>
                    
                    
                  
               </div>
               <div id='buscador'>
                  
                    <li>
                     Lugar
                    </li>
                    <li>
                      Fechas
                    </li>
                    <li>
                       cuantos?
                    </li>
                  
               </div>
               
               <div id='head-der'>
                  <nav>
                  <Link to='/cliente'>Iniciar sesion</Link>
            <Link to='/register'>Registrarse</Link>
                  </nav>
                </div>
            </div>
            <div id='nav'>
            <ul>
                <li>
                  <a href='#'>
                    <div class="icon">
                    <i id='logo-nav'>  <RiHomeSmileLine/> </i>
                    </div>
                    <Link to='/register'>Casa</Link>

                  </a>
                </li>
                <li>
                  <a href='#'>
                    <div class="icon">
                    <i id='logo-nav'> <RiHomeSmileLine/> </i>
                    </div>
                    <Link to='/register'>Lugar Historico</Link>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <div class="icon">
                    <i id='logo-nav'> <RiHomeSmileLine/> </i>
                    </div>
                    <Link to='/register'>Casa Rural</Link>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <div class="icon">
                    <i id='logo-nav' > <RiHomeSmileLine/> </i>
                    </div>
                    <Link to='/register'>Departamento</Link>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <div class="icon">
                      <i id='logo-nav'> <RiHomeSmileLine/> </i>
                    </div>
                    <Link to='/register'> Mansion</Link>
                  </a>
                </li>
              </ul>
            </div>
            
        </header>
        <body>

        </body>
        <Outlet />
        </>
        
      );
    }
  }
  export default Navbar;