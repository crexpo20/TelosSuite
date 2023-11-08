import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../../CSS/cards.css';
import axios from "axios";
import { sitios } from '../../sitios';
class Casa extends Component {
  constructor(props){
    super(props);
    this.state={
      inmueble:[]
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

  render() {
    return (
      <>
        <body>
          <div className="verinm">
            {this.state.inmueble.map((sitio, index) => {
              if(sitio.tipopropiedad === "Casa" &&
                 sitio.niños === parseInt(localStorage.getItem("niños")) &&
                 sitio.mascotas === parseInt(localStorage.getItem("mascotas")) &&
                 sitio.capacidad >= parseInt(localStorage.getItem("huespedes")) &&
                 sitio.ciudad === localStorage.getItem("destino")
              ){
                    return (
                        <div className="InmueblesHost" key={sitio.id}>
                          <img
                            className="inmueble_fot"
                            src="https://picsum.photos/280/280"
                            alt="Inmueble"
                          />
                          <h3 className="inmueble_name">{sitio.tipopropiedad}</h3>
                          <div className="inmueble_info">
                            <p className="inmDet">{sitio.ciudad}</p>
                            <p className="inmCamas">{sitio.tituloanuncio}</p>
                            <p className="inmPrecio">{sitio.capacidad}</p>
                          </div>
                        </div>
                      );
                }
               
              
              return null;
            })}
          </div>
        </body>
        <Outlet />
      </>
    );
  }
}

export default Casa;