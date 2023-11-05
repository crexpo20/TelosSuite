import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { sitios } from '../sitios';
import '../CSS/cards.css';
import { inmuebles } from '../components/inmuebles';
import iconocorazon1 from '../iconos/corazon1.png';
import iconocorazon2 from '../iconos/corazon2.png';

import axios from "axios";
class HomePage extends Component {
  constructor(props){
    super(props);
    this.state={
      inmueble:[],
      favorites: [],
    }
    this.getProductos = this.getProductos.bind(this);
    
}

/*añadir favoritos*/
toggleFavorite = (sitio) => {
  const { favorites } = this.state;
  const sitioId = sitio.idinmueble;

  if (favorites.includes(sitioId)) {
    const updatedFavorites = favorites.filter((id) => id !== sitioId);
    this.setState({ favorites: updatedFavorites }, () => {
      console.log('Favoritos actualizados:', this.state.favorites);
    });
  } else {
    this.setState(
      { favorites: [...favorites, sitioId] },
      () => {
        console.log('Favoritos actualizados:', this.state.favorites);
      }
    );
  }
};

getFavoritos() {
  return this.state.favorites;
}



componentDidMount(){
  this.getProductos();
 
}

getProductos=async()=>{
  await axios.get('http://127.0.0.1:8000/api/getinmkuebles')
  .then(res=>{
      this.setState({inmueble: res.data});
      console.log(this.state.inmueble)
  }).catch((error)=>{
      console.log(error);
  });
}


  render() {
    const { favorites } = this.state;

    const inmueblesFavoritos = this.state.inmueble.filter((sitio) =>
    favorites.includes(sitio.idinmueble)
    );
    return (
      <>
        <body>
          <div className="verinm">
            {this.state.inmueble.map((sitio, index) => {

            const isFavorite = favorites.includes(sitio.idinmueble);

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

                  <button
                             onClick={() => this.toggleFavorite(sitio)}
                             
                             className={isFavorite ? 'favorite-button active' : 'favorite-button'}
                           >
                         <img
                            src={isFavorite ? iconocorazon2 : iconocorazon1}
                            alt={isFavorite ? 'Quitar de Favoritos' : 'Agregar a Favoritos'}
                        
                      />
                    </button>
                    <favoritos favorites={this.state.inmueblesFavoritos} />

                </div>
              )
              return null;
            })}
          </div>
         
         
<div className="favorites-list">
            <h2>Favoritos:</h2>
            <ul>
              {inmueblesFavoritos.map((sitio) => (
                <li key={sitio.idinmueble}>{sitio.tituloanuncio}</li>
              ))}
            </ul>
          </div>
        </body>
        <Outlet />
      </>
    );
  }
}

export default HomePage;
