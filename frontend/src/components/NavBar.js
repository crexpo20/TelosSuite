
import React, {Component} from 'react';
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import {RiHomeSmileLine} from "react-icons/ri"
import PriceFilter from '../pages/PriceFilter'; 
import { HiArrowsRightLeft } from 'react-icons/hi2';
import Donde from '../pages/modalWhere';
import modalAnf from './modalAnf';
import ModalPrueba from './modalprueba';
import {DatePicker} from 'antd'
import moment from 'moment';
import Fechas from './fechas';
import LugarBoton from './lugares/lugarboton';
import CuantosBoton from './cuantos/botoncuantos';

const {RangePicker} = DatePicker;
class Navbar extends Component{
  constructor(props) {
    super(props);
    this.state = {
      showFilterPopup: false, // Estado para controlar si se muestra el cuadro emergente del filtro
      showModoAnfPopup: false,
      
    };
    
  }
  // Función para mostrar/ocultar el cuadro emergente del filtro
  toggleFilterPopup = () => {
    this.setState((prevState) => ({
      showFilterPopup: !prevState.showFilterPopup,
    }));
  };

  
  toggleModoAnfPopup = () => {
    this.setState((prevState) => ({
      showModoAnfPopup: !prevState.showModoAnfPopup,
    }));
  };

 
  render(){
      
      return(
        <>
        <header>
           <div id='head'>
               <script>
                
               </script>
               <div id='head-izq'>
                  <div id = "logoT">
                  <i id='logoP'><RiHomeSmileLine/></i>
                  </div>
                    
                  <div id = 'logoL'>
                  <a id="TelosSuite">TelosSuite</a>
                  </div>
                  
                    
            
               </div>
               <div id='buscador'>
                  
                    <li id='prim'>
                      <LugarBoton/>
                   </li>
                   <li id='prim'>
                      <Fechas/>
                   </li>
                   <li >
                      Cuantos?
                   </li>
                  
                  
               </div>
               
               <div id='head-der'>
                  <nav>
                  <Link to='/cliente'>Iniciar sesion</Link>
                  <Link to='/register'>Registrarse</Link>
                
                  </nav>
                </div>
            </div>
           <div id = 'navAbajo'>
              <div id = 'nav'>
              <ul>
                      <li>
                        <a href='#'>
                          <div class="icon">
                          <i id='logo-nav'>  <RiHomeSmileLine/> </i>
                          </div>
                          <Link to='/dashboard'>Casa</Link>

                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <div class="icon">
                          <i id='logo-nav'> <RiHomeSmileLine/> </i>
                          </div>
                          <Link to='/dashboard'>Lugar Historico</Link>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <div class="icon">
                          <i id='logo-nav'> <RiHomeSmileLine/> </i>
                          </div>
                          <Link to='/dashboard'>Casa Rural</Link>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <div class="icon">
                          <i id='logo-nav' > <RiHomeSmileLine/> </i>
                          </div>
                          <Link to='/dashboard'>Departamento</Link>
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
              <div id='opciones'>
                    
                  <button className="filtro-button" onClick={this.toggleFilterPopup}>
                    <HiArrowsRightLeft /> Filtro
                  </button>   
                  <ModalPrueba  />
                  
              </div>
           </div>
        </header>
        <body>
          {/* Renderiza el componente PriceFilter si showFilterPopup es verdadero */}
          {this.state.showFilterPopup && <PriceFilter />}
          {this.state.showModoAnfPopup && <modalAnf />}
           </body>

        
        <Outlet />
        </>
        
      );
    }
  }
  export default Navbar;