import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../../CSS/cards.css';
import axios from "axios";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import '../../CSS/slick.css'
class Cabaña extends Component {
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
    const carouselSettings = {
      
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:true
      
    };

    const minPrice = parseInt(localStorage.getItem('precioMinimo'), 10) || 0;
    const maxPrice = parseInt(localStorage.getItem('precioMaximo'), 10) || Infinity;
    const tipoInmueblePrivado = localStorage.getItem('privado') === '1';
    const tipoInmuebleCompartido = localStorage.getItem('compartido') === '1';
    const habitacionesSeleccionadas = localStorage.getItem('habitaciones') !== 'Cualquiera' ? parseInt(localStorage.getItem('habitaciones'), 10) : null;
    const camasSeleccionadas = localStorage.getItem('camas') !== 'Cualquiera' ? parseInt(localStorage.getItem('camas'), 10) : null;
    const bañosSeleccionados = localStorage.getItem('baños') !== 'Cualquiera' ? parseInt(localStorage.getItem('baños'), 10) : null;
    const filtroWifi = parseInt(localStorage.getItem('wifi'), 10);
    const filtroParqueo = parseInt(localStorage.getItem('parqueo'), 10);
    const filtroCocina = parseInt(localStorage.getItem('cocina'), 10);
    const filtroRefrigerador = parseInt(localStorage.getItem('refrigerador'), 10);
    const filtroLavadora = parseInt(localStorage.getItem('lavadora'), 10);
    const filtroPiscina = parseInt(localStorage.getItem('piscina'), 10);

    return (
      <>
        <body>
          <div className="verinm">
            {this.state.inmueble.map((sitio, index) => {
              const precioSitio = parseInt(sitio.precio, 10);
              const esPrivado = parseInt(sitio.privado, 10) === 1;
          const esCompartido = parseInt(sitio.compartido, 10) === 1;
              const habitacionesSitio = parseInt(sitio.habitaciones, 10);
              const camasSitio = parseInt(sitio.camas, 10);
              const bañosSitio = parseInt(sitio.baños, 10);
              const cumpleCondicionesServicios = 
                (filtroWifi === 0 || sitio.wifi === filtroWifi) ||
                (filtroParqueo === 0 || sitio.parqueo === filtroParqueo) ||
                (filtroCocina === 0 || sitio.cocina === filtroCocina) ||
                (filtroRefrigerador === 0 || sitio.refrigerador === filtroRefrigerador) ||
                (filtroLavadora === 0 || sitio.lavadora === filtroLavadora) ||
                (filtroPiscina === 0 || sitio.piscina === filtroPiscina);

              if(sitio.tipopropiedad === "Cabaña" &&
                sitio.ciudad === localStorage.getItem("destino")&&
                precioSitio >= minPrice &&
                precioSitio <= maxPrice &&
                ((!tipoInmueblePrivado && !tipoInmuebleCompartido) || // No se seleccionó filtro de tipo
             (tipoInmueblePrivado && esPrivado) ||
             (tipoInmuebleCompartido && esCompartido))&&
             (habitacionesSeleccionadas === null || habitacionesSitio >= habitacionesSeleccionadas) &&
             (camasSeleccionadas === null || camasSitio >= camasSeleccionadas) &&
             (bañosSeleccionados === null || bañosSitio >= bañosSeleccionados)&
                cumpleCondicionesServicios
            ) {
              
                    return (
                        <div className="InmueblesHost" key={sitio.id}>
                           <Slider {...carouselSettings}>
                      <div>
                        <img className="inmueble_fot" src={sitio.imagen1} alt="Inmueble 1" />
                      </div>
                      <div>
                       <img className="inmueble_fot" src={sitio.imagen2} alt="Inmueble 2" />
                      </div>
                      <div>
                        <img className="inmueble_fot" src={sitio.imagen3} alt="Inmueble 1" />
                      </div>
                      <div>
                        <img className="inmueble_fot" src={sitio.imagen4} alt="Inmueble 1" />
                      </div>
                      <div>
                        <img className="inmueble_fot" src={sitio.imagen5} alt="Inmueble 1" />
                      </div>
                  </Slider>
                  <h3 className="inmueble_name">{sitio.tipopropiedad} en {sitio.ciudad}</h3>
                    <div className="inmueble_info">
                      <p className="inmDet">{sitio.titulo}</p>
                      <p className="inmCamas"> <b>Precio por noche:</b> bs. {sitio.precio}</p>
                      <p className="inmPrecio"><b>Capacidad:</b>  {sitio.capacidad} persona(s)</p>
                      <p className="inmPrecio"><b>Normas:</b> {sitio.normas}</p>
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

export default Cabaña;