import React, {Component} from 'react';
import {Link, Outlet } from 'react-router-dom';
class EspaciosModAnf extends Component{
    render(){
     
        return(
          <>
          
          <body>
                
                   <h4>Tus espacios</h4>
                    <div class='verinm'>
                        <div class='InmueblesHost'>
                            <img class='inmueble_fot' src="https://picsum.photos/280/280"></img>
                            <h3 class='inmueble_name'>Apartamento en La Paz</h3>
                            <div class='inmueble_info'>
                                <p class='inmDet'>Hermoso departamento centrico</p>
                                <p class='inmCamas'>2 Camas</p>
                                <p class='inmPrecio'>$34 USD noche</p>
                            </div>
                            <button class="eliminar-btn" >Eliminar</button>
                        </div>
                    </div>
                    <div class='verinm'>
                        <div class='InmueblesHost'>
                            <img class='inmueble_fot' src="https://picsum.photos/280/280"></img>
                            <h3 class='inmueble_name'>Apartamento en La Paz</h3>
                            <div class='inmueble_info'>
                                <p class='inmDet'>Hermoso departamento centrico</p>
                                <p class='inmCamas'>2 Camas</p>
                                <p class='inmPrecio'>$34 USD noche</p>
                            </div>
                            <button class="eliminar-btn" >Eliminar</button>
                        </div>
                    </div><div class='verinm'>
                        <div class='InmueblesHost'>
                            <img class='inmueble_fot' src="https://picsum.photos/280/280"></img>
                            <h3 class='inmueble_name'>Apartamento en La Paz</h3>
                            <div class='inmueble_info'>
                                <p class='inmDet'>Hermoso departamento centrico</p>
                                <p class='inmCamas'>2 Camas</p>
                                <p class='inmPrecio'>$34 USD noche</p>
                            </div>
                            <button class="eliminar-btn" >Eliminar</button>
                        </div>
                    </div><div class='verinm'>
                        <div class='InmueblesHost'>
                            <img class='inmueble_fot' src="https://picsum.photos/280/280"></img>
                            <h3 class='inmueble_name'>Apartamento en La Paz</h3>
                            <div class='inmueble_info'>
                                <p class='inmDet'>Hermoso departamento centrico</p>
                                <p class='inmCamas'>2 Camas</p>
                                <p class='inmPrecio'>$34 USD noche</p>
                            </div>
                            <button class="eliminar-btn" >Eliminar</button>
                        </div>
                    </div>
                    
          </body>
          
          <Outlet />
          </>
          
        );
      }
  }
  export default EspaciosModAnf;