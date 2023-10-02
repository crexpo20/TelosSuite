
import React, {Component} from 'react';
import { Link, Outlet } from 'react-router-dom';
class Navbar extends Component{
    render(){
     
      
      return(
        <>
        <header>
            <h1>
               
                <Link id="TelosSuite" to='/'>TelosSuite</Link>
                <br/>
                 <Link to='/login'>categoria1</Link>
                 <Link to='/login'>categoria2</Link>
                 <Link to='/register'>categoria3</Link>
                 <Link to='/login'>categoria4</Link>
                 <Link to='/register'>categoria5</Link>
            </h1>
            <nav>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Registrarse</Link>
            </nav>

            
        </header>
        <body>

        </body>
        <Outlet />
        </>
        
      );
    }
  }
  export default Navbar;