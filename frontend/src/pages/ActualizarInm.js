import React, {useState} from 'react';
import {Link, Outlet, useParams } from 'react-router-dom';
import { sitios } from '../sitios';
import Select from 'react-select';

const ActualizarInm = () =>{
    const [selectedServices, setSelectedServices] = useState([]);
    const serviceOptions = [
        { value: 'piscina', label: 'Piscina' },
        { value: 'wifi', label: 'Wifi' },
        { value: 'estacionamiento', label: 'Estacionamiento' },
        { value: 'parrilla', label: 'Parrillero' },
        { value: 'cocina', label: 'Cocina' },
        { value: 'tv', label: 'TV' },
        { value: 'desayuno', label: 'Desayuno' },
        { value: 'aireAcond', label: 'Aire Acondicionado' },
        { value: 'mesaBillar', label: 'Mesa Billar' },
        { value: 'camara', label: 'Cámara de seguridad' },
        { value: 'llaveElectronica', label: 'Llaves electrónicas' },
        { value: 'vigilancia', label: 'Vigilancia 24 hrs.' },
        { value: 'detectorHumo', label: 'Detector de humo' },
      ];
      const [isServicesOpen, setServicesOpen] = useState(false); 
        let { espaciosID } = useParams ()

        let espacioSeleccionado = sitios.find( site => site.id === espaciosID)
        console.log(espaciosID)
        console.log(espacioSeleccionado)
        //Modalimagenes

        // Validaciones
        const [formErrors, setFormErrors] = useState({});

        const handleInputChange = (event) => {
            const { name, value } = event.target;
            const updatedErrors = { ...formErrors };

            if (name === 'idInmueble') {
                if (value !== '' && !/^\d+$/.test(value)) {
                    updatedErrors[name] = 'ID del inmueble debe ser un número entero.';
                } else {
                    delete updatedErrors[name];
                }
              } else if (name === 'precioNoche') {
                // Validación para PRECIO NOCHE
                if (value !== '' && !/^\d+$/.test(value)) {
                  updatedErrors[name] = 'El precio debe ser un número entero.';
                } else {
                  delete updatedErrors[name];
                }
              } else if (name === 'capacidad') {
                // Validación para CAPACIDAD
                if (value !== '' && !/^\d+$/.test(value)) {
                  updatedErrors[name] = 'La capacidad debe ser un número entero.';
                } else {
                  delete updatedErrors[name];
                }
              } else if (name === 'habitaciones' || name === 'baños' || name === 'camas') {
                // Validación para HABITACIONES, BAÑOS y CAMAS
                if (value !== '' && !/^\d+$/.test(value)) {
                  updatedErrors[name] = 'Este campo debe ser un número entero.';
                } else {
                  delete updatedErrors[name];
                }
              }
            setFormErrors(updatedErrors);
        };

        const handleSubmit = (event) => {
            event.preventDefault();

            // Realiza validaciones finales antes de enviar el formulario
            const hasErrors = Object.keys(formErrors).length > 0;

            if (!hasErrors) {
            // Envía el formulario
            }
        };

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
                            
                        </div>

                        
                    </div>
                    <div class="derecha">
                        <form>
                            <div class='Grid1'>
                                <label htmlFor='idInmueble'>ID DEL INMUEBLE:</label>
                                <input type='number' id='idInmueble' name='idInmueble' step="1" onChange={handleInputChange}></input>
                                {formErrors.idInmueble && <div className="error-message">{formErrors.idInmueble}</div>}
                                <br></br>
                                <label htmlFor='TipoPropiedad'>TIPO DE PROPIEDAD:</label>
                                <input type='text' id='TipoPropiedad' name='TipoPropiedad' step="1"></input>
                                <br></br>
                                <label htmlFor='TituloAnuncio'>TÍTULO DEL ANUNCIO:</label>
                                <input type='text' id='TituloAnuncio' name='TituloAnuncio' step="1"></input>
                                <br></br>
                                <label htmlFor='descripcion'>DESCRIPCIÓN DETALLADA:</label>
                                <textarea type='text' id='descripcion' name='descripcion'></textarea>
                                <br></br>
                                <br></br>
                                <br></br>
                                <label htmlFor='Direccion'>DIRECCIÓN:</label>
                                <input type='text' id='Direccion' name='Direccion' step="1"></input>
                                <br></br>
                                <label htmlFor='ubicacion'>UBICACIÓN:</label>
                                     <button id='ubicacion' type='button' onClick={this?.onClick}>SUBIR</button>
                                <br></br>
                                <br></br>
                            </div>
                            <div class='Grid2'>
                                <div class='Colum1'>
                                    <label htmlFor='precioNoche'>PRECIO NOCHE:</label>
                                    <input type='number' id='precioNoche' name='precioNoche' step="1" onChange={handleInputChange}></input>
                                    {formErrors.precioNoche && <div className="error-message">{formErrors.precioNoche}</div>}
                                    <br></br>  
                                    <label htmlFor='habitaciones'>HABITACIONES:</label>
                                    <input type='number' id='habitaciones' name='habitaciones' step="1" onChange={handleInputChange}></input>
                                    {formErrors.habitaciones && <div className="error-message">{formErrors.habitaciones}</div>}
                                    <br></br>
                                    <label htmlFor='camas'>CAMAS:</label>
                                    <input type='number' id='camas' name='camas' step="1" onChange={handleInputChange}></input>
                                    {formErrors.camas && <div className="error-message">{formErrors.camas}</div>}
                                    <br></br>
                                    <label htmlFor='mascotas'>MASCOTAS:</label>
                                    <select name='mascotas'>
                                        <option value=''></option>
                                        <option value='si'>SI</option>
                                        <option value='no'>NO</option>
                                    </select>
                                    <br></br>

                                    <label htmlFor='imagenes'>IMAGENES:</label>
                                     <button id='imagenes' type='button' onClick={this?.onClick}>SUBIR</button>
                                     
                                </div>
                                <div class='Colum2'>
                                    <label htmlFor='precioqr'> PRECIO QR:</label>
                                     <button id='precioqr' type='button' onClick={this?.onClick}>SUBIR</button>
                                     <br></br>
                                    <label htmlFor='capacidad'>CAPACIDAD:</label>
                                    <input type='number' id='capacidad' name='capacidad' step="1" onChange={handleInputChange}></input>
                                    {formErrors.capacidad && <div className="error-message">{formErrors.capacidad}</div>}
                                    <br></br> 
                                    <label htmlFor='baños'>BAÑOS:</label>
                                    <input type='number' id='baños' name='baños' step="1" onChange={handleInputChange}></input>
                                    {formErrors.baños && <div className="error-message">{formErrors.baños}</div>}
    
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
