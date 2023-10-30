import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { sitios } from '../sitios';
import '../CSS/cards.css';
import { inmuebles } from '../components/inmuebles';

class HomePage extends Component {
  render() {
    return (
      <>
        <body>
          <div className="verinm">
            {inmuebles.map((sitio, index) => {
              if (
                localStorage.getItem("mascotas") === "0" &&
                localStorage.getItem("niños") === "0" &&
                localStorage.getItem("huespedes") === "1" &&
                localStorage.getItem("tipo") === "cualquiera" &&
                localStorage.getItem("destino") === "Cualquier Lugar"
              ) {
                return (
                  <div className="InmueblesHost" key={sitio.id}>
                    <img
                      className="inmueble_fot"
                      src="https://picsum.photos/280/280"
                      alt="Inmueble"
                    />
                    <h3 className="inmueble_name">{sitio.tituloanuncio}</h3>
                    <div className="inmueble_info">
                      <p className="inmDet">{sitio.descripcion}</p>
                      <p className="inmCamas">{sitio.camas}</p>
                      <p className="inmPrecio">{sitio.precio}</p>
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

export default HomePage;
