import React, {Component} from 'react';
import { Link, Outlet } from 'react-router-dom';
class NavbarCli extends Component{
    render(){
      return(
        <>
        <header>
            <h1>
               
                <Link id="TelosSuite" to='/'>TelosSuite</Link>
                <br/>
                
            </h1>
            <nav>
            <a> modo anfrition</a>
            <Link to='/cliente'>Registrar espacio</Link>
            
            <Link to='/register'>Cerrar sesion</Link>
            </nav>

            
        </header>
        <body>
        </body>
        <Outlet />
        </>
        
      );
    }
  }
  export default NavbarCli;