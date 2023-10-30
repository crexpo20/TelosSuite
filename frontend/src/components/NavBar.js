
import React, {Component} from 'react';
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import {RiHomeSmileLine} from "react-icons/ri"
import PriceFilter from '../pages/PriceFilter'; 
import { HiArrowsRightLeft } from 'react-icons/hi2';
import {PiSwimmingPool} from 'react-icons/pi';
import {RiHomeLine } from 'react-icons/ri'
import {MdCabin} from 'react-icons/md'
import{PiHouseLine} from 'react-icons/pi';
import {FaMountainCity}  from 'react-icons/fa6';
import Donde from '../pages/modalWhere';
import modalAnf from './modalAnf';
import ModalPrueba from './modalprueba';
import {DatePicker} from 'antd'
import moment from 'moment';
import Fechas from './fechas';
import LugarBoton from './lugares/lugarboton';
import CuantosBoton from './cuantos/botoncuantos';
import MenuBoton from './menú/botonMenu';
import '../pages/css/nav.css'
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
                  <a id="TS">TS</a>
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
                      <CuantosBoton/>
                   </li>
                  
                  
               </div>
               
               <div id='head-der'>
                  <nav id='nav-menu'>
                  <MenuBoton/>
                  </nav>
                </div>
            </div>
           <div id = 'navAbajo'>
              <div id = 'nav'>
              <ul id='listaCat'>
                      <li id='cat'>
                        <a href='#'>
                          <div class="icon">
                          <i id='logo-nav'>  <RiHomeLine/> </i>
                          </div>
                          <Link to='/dashboard'>Habitaciones</Link>

                        </a>
                      </li>
                      <li id='cat'>
                        <a href='#'>
                          <div class="icon">
                          <i id='logo-nav'> <PiSwimmingPool/> </i>
                          </div>
                          <Link to='/dashboard'>Piscinas</Link>
                        </a>
                      </li>
                      <li id='cat'>
                        <a href='#'>
                          <div class="icon">
                          <i id='logo-nav'> <MdCabin/> </i>
                          </div>
                          <Link to='/dashboard'>Cabañas</Link>
                        </a>
                      </li>
                      <li id='cat'>
                        <a href='#'>
                          <div class="icon">
                          <i id='logo-nav' > <FaMountainCity/> </i>
                          </div>
                          <Link to='/dashboard'>A la altura</Link>
                        </a>
                      </li>
                      <li id='cat'>
                        <a href='#'>
                          <div class="icon">
                            <i id='logo-nav'> <PiHouseLine/> </i>
                          </div>
                          <Link to='/dashboard'>Minicasas</Link>
                        </a>
                      </li>
                      
                    </ul>
                  
              </div>
              <div id='opciones'>
                    
                  <button className="filtro-button" onClick={this.toggleFilterPopup}>
                    <HiArrowsRightLeft /> Filtro
                  </button>   
                  
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