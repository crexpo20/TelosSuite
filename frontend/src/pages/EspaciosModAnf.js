import React, {Component} from 'react';
import {Link, Outlet } from 'react-router-dom';
import { sitios } from '../sitios';
class EspaciosModAnf extends Component{
    render(){
     
        return(
          <>
          
          <body>
          <h4>Tus espacios</h4>
                
                <div>
                    { sitios.map (sitio =>(
                        <div class='verinm' key = {sitio.id}>
                            <div class='InmueblesHost'>
                            <img class='inmueble_fot' src="https://picsum.photos/280/280"></img>
                            
                            <h3 class='inmueble_name'>{sitio.nombre}</h3>
                            <div class='inmueble_info'>
                                <p class='inmDet'>{sitio.desc}</p>
                                <p class='inmCamas'>{sitio.camas}</p>
                                <p class='inmPrecio'>{sitio.precio}</p>
                            </div>
                            <button class="eliminar-btn" >Eliminar</button>
                            <Link to={`/cliente/${sitio.id}`}>editar</Link>
                        </div>
                        </div>
                    )
                    )

                    }
                </div>
                    
          </body>
          
          <Outlet />
          </>
          
        );
      }
  }
  export default EspaciosModAnf;