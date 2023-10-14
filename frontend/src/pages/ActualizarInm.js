import React, {useState} from 'react';
import {Link, Outlet, useParams } from 'react-router-dom';
import { sitios } from '../sitios';
import Select from 'react-select';


const ActualizarInm = () =>{
    const [selectedServices, setSelectedServices] = useState([]);
    const serviceOptions = [
        { value: 'estacionamiento', label: 'Estacionamiento' },
        { value: 'piscina', label: 'Piscina' },
        { value: 'cocina', label: 'Cocina' },
        { value: 'parrilla', label: 'Parrilla' },
        { value: 'terraza', label: 'Terraza' },
        { value: 'desayuno', label: 'Desayuno' },
        { value: 'camara', label: 'Cámara' },
        { value: 'llaveElectronica', label: 'Llave electrónica' },
        { value: 'guardias', label: 'Guardias' },
        { value: 'detectorHumo', label: 'Detector de humo' },
      ];
      const [isServicesOpen, setServicesOpen] = useState(false); 
        let { espaciosID } = useParams ()

        let espacioSeleccionado = sitios.find( site => site.id === espaciosID)
        console.log(espaciosID)
        console.log(espacioSeleccionado)
        return(
        
          <body>
            <section id="pantalla-dividida">
                
            <div class="izquierda">
                        <div class='infInmueble'>
                            <img class='inmueble_fot' src="https://picsum.photos/280/280"></img>
                            <h3 class='inmueble_name'>{espacioSeleccionado.nombre}</h3>
                            <div class='inmueble_info'>
                                <p class='inmDet'>{espacioSeleccionado.desc}</p>
                                <p class='inmCamas'>{espacioSeleccionado.camas}</p>
                                <p class='inmPrecio'>{espacioSeleccionado.precio}</p>
                            </div>
                            <button className="btn-eliminar"  >Eliminar</button>
                        </div>

                        
                    </div>
                    <div class="derecha">
                        <form>
                            <div class='Grid1'>
                                <label htmlFor='idInmueble'>ID DEL INMUEBLE:</label>
                                <input type='int' id='idInmueble' name='idInmueble' step="1"></input>
                                <br></br>
                                <label htmlFor='TipoPropiedad'>TIPO DE PROPIEDAD:</label>
                                <input type='string' id='TipoPropiedad' name='TipoPropiedad' step="1"></input>
                                <br></br>
                                <label htmlFor='TituloAnuncio'>TÍTULO DEL ANUNCIO:</label>
                                <input type='string' id='TituloAnuncio' name='TituloAnuncio' step="1"></input>
                                <br></br>
                                <label htmlFor='descripcion'>DESCRIPCIÓN DETALLADA:</label>
                                <textarea type='string' id='descripcion' name='descripcion'></textarea>
                                <br></br>
                                <br></br>
                                <br></br>
                                <label htmlFor='ubicacion'>UBICACIÓN:</label>
                                     <button id='ubicacion' type='button' onClick={this?.onClick}>SUBIR</button>
                                <br></br>
                                <br></br>
                            </div>
                            <div class='Grid2'>
                                <div class='Colum1'>
                                    <label htmlFor='precioNoche'>PRECIO NOCHE:</label>
                                    <input type='double' id='precioNoche' name='precioNoche' step="1"></input>
                                    <br></br>  
                                    <label htmlFor='habitaciones'>HABITACIONES:</label>
                                    <input type='int' id='habitaciones' name='habitaciones' step="1"></input>
                                    <br></br>
                                    <label htmlFor='camas'>CAMAS:</label>
                                    <input type='number' id='camas' name='camas' step="1"></input>
                                    <br></br>
                                    <label htmlFor='mascotas'>MASCOTAS:</label>
                                    <select name='mascotas'>
                                        <option value=''></option>
                                        <option value='si'>SI</option>
                                        <option value='no'>NO</option>
                                    </select>
                                    <br></br>
                                    <label htmlFor='calendario'> DIAS DISPONIBLES:</label>
                                     <button id='calendario' type='button' onClick={this?.onClick}>ELEGIR</button>
                                </div>
                                <div class='Colum2'>
                                    <label htmlFor='capacidad'>CAPACIDAD:</label>
                                    <input type='int' id='capacidad' name='capacidad' step="1"></input>
                                    <br></br> 
                                    <label htmlFor='baños'>BAÑOS:</label>
                                    <input type='number' id='baños' name='baños' step="1"></input>
                                    <br></br>
                                    <label htmlFor='niños'>NIÑOS:</label>
                                    <select name='niños'>
                                        <option value=''></option>
                                        <option value='si'>SI</option>
                                        <option value='no'>NO</option>
                                    </select>
                                    <br></br>
                                    <label htmlFor='servicios'> SERVICIOS:</label>
                                     <button id='servicios' type='button' onClick={() => setServicesOpen(!isServicesOpen)}>VER MÁS</button>
                                     {isServicesOpen && (
                                            <Select
                                                isMulti
                                                options={serviceOptions}
                                                value={selectedServices}
                                                onChange={setSelectedServices}
                                            />
                                            )}
                                     <br></br>

                                     <label htmlFor='imagenes'>IMAGENES:</label>
                                     <button id='imagenes' type='button' onClick={this?.onClick}>SUBIR</button>
                                </div>
                            </div>
                            <div class='Grid3'>
                                <label htmlFor='normasCasa'>NORMAS DE LA CASA:</label>
                                <textarea type='text' id='normasCasa' name='normasCasa'></textarea>
                            </div>
                            <br></br>
                            <br></br>
                            <div class='BotonesInf'>
                                     <div class="BotonCancelar">
                                        <button id='cancelar' type='button' onClick={this?.onClick}>CANCELAR</button>
                                    </div>
                                    <div class="guardarcambios">
                                        <button id='guardar' type='button' onClick={this?.onClick}>GUARDAR CAMBIOS</button>
                                    </div>
                            </div>

                        </form>
                    </div>
            </section>
            
               
          </body>
          
       
         
        )
    
  }
  export default ActualizarInm;