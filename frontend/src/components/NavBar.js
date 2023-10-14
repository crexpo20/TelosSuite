
import React, {Component} from 'react';
import { Link, Outlet } from 'react-router-dom';
import {RiHomeSmileLine} from "react-icons/ri"
import PriceFilter from '../pages/PriceFilter'; 
import { HiArrowsRightLeft } from 'react-icons/hi2';

class Navbar extends Component{
  constructor(props) {
    super(props);
    this.state = {
      showFilterPopup: false, // Estado para controlar si se muestra el cuadro emergente del filtro
    };
  }

  // Función para mostrar/ocultar el cuadro emergente del filtro
  toggleFilterPopup = () => {
    this.setState((prevState) => ({
      showFilterPopup: !prevState.showFilterPopup,
    }));
  };
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
            <button className="filtro-button" onClick={this.toggleFilterPopup}>
              <HiArrowsRightLeft /> Filtro
            </button>  
                  
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
          {/* Renderiza el componente PriceFilter si showFilterPopup es verdadero */}
          {this.state.showFilterPopup && <PriceFilter />}
        </body>
        <Outlet />
        </>
        
      );
    }
  }
  export default Navbar;