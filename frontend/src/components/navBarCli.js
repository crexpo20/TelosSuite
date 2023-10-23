import React, {Component} from 'react';
import { Link, Outlet } from 'react-router-dom';
import {RiHomeSmileLine} from "react-icons/ri"
class NavbarCli extends Component{
    render(){
      return(
        <>
         <header>
            <div id='head'>
               <div id='head-izq'>
                  <div id = "logoT">
                  <i id='logoP'><RiHomeSmileLine/></i>
                  </div>
                    
                  <div id = 'logoL'>
                  <a id="TelosSuite">TelosSuite</a>
                  </div>
                    
            
               </div>
               <div id='buscadorCliente'>
               </div>

               <div id='head-der'>
                  <nav>
                      <Link to='/cliente'>Modo Anfitrion</Link>
                      <Link to='/cliente/registerinmue'>Agregar Espacio</Link>
                   
                  </nav>
                </div>
            </div>
              <div id='navAbajo'>
                  <div id='navDer'>
                      
                  </div>
                  <div id='opt-nav'>
                  <Link to='/'>Cerrar sesión</Link>
                  </div>
              </div>
           
        </header>
        <Outlet />
        </>
        
      );
    }
  }
  export default NavbarCli;