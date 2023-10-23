import React, {Component} from 'react';
import {Link, Outlet } from 'react-router-dom';
import { sitios } from '../sitios';
import iconoEliminar from '../iconos/iconoEliminar.png';
class EspaciosModAnf extends Component{
  handleEliminarClick = (sitio) => {
    // Lógica para eliminar el sitio
  }
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
                            <div class='BotonesEditEli'>
                                <div class='BotonEditar'>
                                    <Link to={`/cliente/${sitio.id}`}>editar</Link>
                                </div>
                                <button className="eliminar-btn" onClick={() => this.handleEliminarClick(sitio)}>
                                  <img src={iconoEliminar} alt="Eliminar" />
                                </button>
                            </div>
                        </div>
                        </div>
                    )
                    )

                    }
                        {/* Modal de confirmación */}
                            {this.state.modalAbierto && (
                            <div className="modalEliminar">
                                <div className="modal-contenido">
                                <p>¿Estás seguro que deseas eliminar {this.state.sitioSeleccionado ? this.state.sitioSeleccionado.nombre : ''}?</p>
                                <br></br>
                                <button onClick={this.confirmarEliminacion}>Eliminar</button>
                                <button onClick={this.confirmarElimi}>Cancelar</button>
                                </div>
                            </div>
                        )}
                </div>
                    
          </body>
          
          <Outlet />
          </>
          
        );
      }
      state = {
        modalAbierto: false,
        sitioSeleccionado: null,
      };
    
      handleEliminarClick = (sitio) => {
        this.setState({ sitioSeleccionado: sitio, modalAbierto: true });
      };
    
      confirmarEliminacion = () => {
        this.setState({ modalAbierto: false });
      };

      confirmarElimi = () => {
        this.setState({ modalAbierto: false });
      };
  }
  export default EspaciosModAnf;
