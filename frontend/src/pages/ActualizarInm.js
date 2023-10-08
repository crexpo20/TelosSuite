import React, {Component} from 'react';
import {Link, Outlet } from 'react-router-dom';
class ActualizarInm extends Component{
    render(){
     
        return(
          <>
          
          <body>
                <section id="pantalla-dividida">
                    <div class="izquierda">
                        <div class='infInmueble'>
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
                    <div class="derecha">
                        <form>
                            <div class='Grid1'>
                                <label htmlFor='tipodeinmueble'>TIPO DE INMUEBLE:</label>
                                <select name='tipodeinmueble'>
                                    <option value=''></option>
                                    <option value='casa'>CASA</option>
                                    <option value='habitacion'>HABITACION</option>
                                    <option value='departamento'>DEPARTAMENTO</option>
                                    <option value='cabaña'>CABAÑA</option>
                                </select>
                                <br></br>
                                <label htmlFor='tipodealojamiento'>TIPO DE ALOJAMIENTO:</label>
                                <select name='tipodealojamiento'>
                                    <option value=''></option>
                                    <option value='privado'>PRIVADO</option>
                                    <option value='compartido'>COMPARTIDO</option>
                                </select>
                            </div>
                            <div class='Grid2'>
                                <div class='Colum1'>
                                    <label htmlFor='habitaciones'>HABITACIONES:</label>
                                    <input type='text' id='habitaciones' name='habitaciones'></input>
                                    <br></br>
                                    <label htmlFor='camas'>CAMAS:</label>
                                    <input type='text' id='camas' name='camas'></input>
                                    <br></br>
                                    <label htmlFor='zonadetrabajo'>ZONA DE TRABAJO:</label>
                                    <select name='zonadetrabajo'>
                                        <option value=''></option>
                                        <option value='si'>SI</option>
                                        <option value='no'>NO</option>
                                    </select>
                                    <br></br>
                                    <label htmlFor='lavadora'>LAVADORA:</label>
                                    <select name='lavadora'>
                                        <option value=''></option>
                                        <option value='si'>SI</option>
                                        <option value='no'>NO</option>
                                    </select>
                                    <br></br>
                                    <label htmlFor='piscina'>PISCINA:</label>
                                    <select name='piscina'>
                                        <option value=''></option>
                                        <option value='si'>SI</option>
                                        <option value='no'>NO</option>
                                    </select>
                                    <br></br>
                                    <label htmlFor='parrillero'>PARRILLERO:</label>
                                    <select name='parrillero'>
                                        <option value=''></option>
                                        <option value='si'>SI</option>
                                        <option value='no'>NO</option>
                                    </select>
                                    <br></br>
                                    <label htmlFor='wifi'>WIFI:</label>
                                    <select name='wifi'>
                                        <option value=''></option>
                                        <option value='si'>SI</option>
                                        <option value='no'>NO</option>
                                    </select>
                                </div>
                                <div class='Colum2'>
                                    <label htmlFor='baños'>BAÑOS:</label>
                                    <input type='text' id='baños' name='baños'></input>
                                    <br></br>
                                    <label htmlFor='huespedes'>HUESPEDES:</label>
                                    <input type='text' id='huespedes' name='huespedes'></input>
                                    <br></br>
                                    <label htmlFor='terraza'>TERRAZA:</label>
                                    <select name='terraza'>
                                        <option value=''></option>
                                        <option value='si'>SI</option>
                                        <option value='no'>NO</option>
                                    </select>
                                    <br></br>
                                    <label htmlFor='jacuzzi'>JACUZZI:</label>
                                    <select name='jacuzzi'>
                                        <option value=''></option>
                                        <option value='si'>SI</option>
                                        <option value='no'>NO</option>
                                    </select>
                                    <br></br>
                                    <label htmlFor='garaje'>GARAJE:</label>
                                    <select name='garaje'>
                                        <option value=''></option>
                                        <option value='si'>SI</option>
                                        <option value='no'>NO</option>
                                    </select>
                                    <br></br>
                                    <label htmlFor='cocina'>COCINA:</label>
                                    <select name='cocina'>
                                        <option value=''></option>
                                        <option value='si'>SI</option>
                                        <option value='no'>NO</option>
                                    </select>
                                    <br></br>
                                    <label htmlFor='television'>TELEVISION:</label>
                                    <select name='television'>
                                        <option value=''></option>
                                        <option value='si'>SI</option>
                                        <option value='no'>NO</option>
                                    </select>
                                </div>
                            </div>
                            <div class='Grid3'>
                                <label htmlFor='ubicacion'>UBICACION:</label>
                                <button id='ubicacion' type='button' onClick={this.onClick}>SUBIR</button>
                                <br></br>
                                <label htmlFor='descripcion'>DESCRIPCIÓN:</label>
                                <input type='text' id='descripcion' name='descripcion'></input>
                            </div>
                            
                            <br></br>
                            <div class="guardarcambios">
                                 <button id='guardar' type='button' onClick={this.onClick}>GUARDAR CAMBIOS</button>
                            </div>

                        </form>
                    </div>
                </section>
          </body>
          
          <Outlet />
          </>
          
        );
      }
  }
  export default ActualizarInm;