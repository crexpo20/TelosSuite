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
                    <i id='logo-principal'><RiHomeSmileLine/></i>
                    <Link id="TelosSuite" to='/'>TelosSuite</Link>
               </div>

               <div id='buscador'>
               </div>

               <div id='head-der'>
                  <nav>
                      <Link to='/cliente'>Modo Anfitrion</Link>
                      <Link to='/'>Cerrar sesión</Link>
                  </nav>
                </div>
            </div>
            
           
        </header>
        <Outlet />
        </>
        
      );
    }
  }
  export default NavbarCli;