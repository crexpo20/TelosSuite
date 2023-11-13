import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../../CSS/cards.css';
import axios from "axios";
import { sitios } from '../../sitios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import '../../CSS/slick.css'

class Casa extends Component { 
  constructor(props){
    super(props);
    this.state={
      inmueble:[] // array vacio aqui se guarda lo que se recupera con la api 
    }
    this.getProductos = this.getProductos.bind(this);
    
}
 
componentDidMount(){      
  this.getProductos();
}

getProductos=async()=>{
  await axios.get('http://127.0.0.1:8000/api/getinmuebles/')
  .then(res=>{
      this.setState({inmueble: res.data}); //nombre de array: LO QUE SALE POR CONSOLA
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
    return (
      <>
        <body>
          <div className="verinm">
            {this.state.inmueble.map((sitio, index) => {    // NOMBREDETUARREGLO.map((sitio, index) => {
                //                                              aqui tu codigo
           //                                                  })
              if(sitio.tipopropiedad === "Casa" &&
                 sitio.ciudad === localStorage.getItem("destino") 
              ){
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

export default Casa;