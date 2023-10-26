import React, {Component} from 'react';
import {Link, Outlet } from 'react-router-dom';
import { sitios } from '../sitios';
import { inmuebles } from '../components/inmuebles';
class HomePage extends Component{
    render(){
     
      
      return(
        <>
          
        <body>
           <div>
                 
           { inmuebles.map((sitio, index) => {
                            if(localStorage.getItem("mascotas") === "0" && localStorage.getItem("niños") === "0" && localStorage.getItem("huespedes") === "1" && localStorage.getItem("tipo") === "cualquiera" && localStorage.getItem("destino") === "Cualquier Lugar"){ 
                                return(
                                  <div class='verinm' key = {sitio.id}>
                                  <div class='InmueblesHost'>
                                  <img class='inmueble_fot' src="https://picsum.photos/280/280"></img>
                                  
                                  <h3 class='inmueble_name'>{sitio.tituloanuncio}</h3>
                                  <div class='inmueble_info'>
                                      <p class='inmDet'>{sitio.descripcion}</p>
                                      <p class='inmCamas'>{sitio.camas}</p>
                                      <p class='inmPrecio'>{sitio.precio}</p>
                                  </div>
                                  
                              </div>
                              </div>
                                )
                            }
                        })

                  }
              </div>
                  
        </body>
        
        <Outlet />
        </>
      );
    }
  }
  export default HomePage;