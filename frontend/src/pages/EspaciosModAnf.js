import React, {Component} from 'react';
import {Link, Outlet } from 'react-router-dom';
import { sitios } from '../sitios';
import iconoEliminar from '../iconos/iconoEliminar.png';
import axios from "axios";
class EspaciosModAnf extends Component{

  constructor(props){
    super(props);
    this.state={
      inmueble:[],
      modalAbierto: false,
      sitioSeleccionado: null,
    }
    this.getProductos = this.getProductos.bind(this);
    
}
 
componentDidMount(){
  this.getProductos();
 
}

getProductos=async()=>{
  await axios.get('http://127.0.0.1:8000/api/getinmuebles')
  .then(res=>{
      this.setState({inmueble: res.data});
      console.log(this.state.inmueble)
  }).catch((error)=>{
      console.log(error);
  });
}

handleEliminarClick = (sitio) => {
  this.setState({ sitioSeleccionado: sitio, modalAbierto: true });
};

confirmarEliminacion = () => {
  const sitioSeleccionado = this.state.sitioSeleccionado;
  if (sitioSeleccionado) {
    this.eliminarSitio(sitioSeleccionado);
  }
};

confirmarElimi = () => {
  this.setState({ modalAbierto: false });
};

  render() {
    return (
      <>
        <body>
          <div className="verinm">
            {this.state.inmueble.map((sitio, index) => {
              if(sitio.idusuario === parseInt(localStorage.getItem("userID"))){
                    return (
                        <div className="InmueblesHost" key={sitio.id}>
                          <img
                            className="inmueble_fot"
                            src="https://picsum.photos/280/280"
                            alt="Inmueble"
                          />
                          <h3 className="inmueble_name">{sitio.tituloanuncio}</h3>
                          <div className="inmueble_info">
                            <p className="inmDet">{sitio.ciudad}</p>
                            <p className="inmCamas">{sitio.camas}</p>
                            <p className="inmPrecio">{sitio.precio}</p>
                          </div>
                          <div class='BotonesEditEli'>
                                
                                <button className="eliminar-btn" onClick={() => this.handleEliminarClick(sitio)}>
                                  <img src={iconoEliminar} alt="Eliminar" />
                                </button>
                            </div>
                        </div>
                      );
                }
               
              
              return null;
            })}

            {/* Modal de confirmación para el BOTON ELIMINAR */}
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
}

  export default EspaciosModAnf;
