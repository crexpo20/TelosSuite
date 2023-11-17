import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../CSS/favorito.css';

class Favorito extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: [],
      inmuebleDetails: {}
    };
  }

  componentDidMount() {
    const userID = localStorage.getItem('userID');

    axios.get(`http://127.0.0.1:8000/api/getfavoritos/${userID}`)
      .then(response => {
        this.setState({ favorites: response.data });

        // Obtener detalles de cada inmueble favorito
        response.data.forEach(favorite => {
          axios.get(`http://127.0.0.1:8000/api/getinmueble/${favorite.idinmueble}`)
            .then(res => {
              const { inmuebleDetails } = this.state;
              const updatedDetails = {
                ...inmuebleDetails,
                [favorite.idinmueble]: res.data
              };
              this.setState({ inmuebleDetails: updatedDetails });
            })
            .catch(err => {
              console.error('Error al obtener detalles del inmueble:', err);
            });
        });
      })
      .catch(error => {
        console.error('Error al obtener favoritos:', error);
      });
  }

  render() {
    const { favorites, inmuebleDetails } = this.state;

    return (
      <div>
        <h6> Lista Favoritos</h6>
        {favorites.length > 0 ? (
          <table className="favorites-table"> 
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Imagen</th>
                <th>Ciudad</th>
              </tr>
            </thead>
            <tbody>
            {favorites.map(favorite => (
  <tr key={favorite.idinmueble}>
    {inmuebleDetails[favorite.idinmueble] && (
      <>
        <td>
          <Link to={`/cliente/${favorite.idinmueble}`} style={{ display: 'block' }}>
            {inmuebleDetails[favorite.idinmueble].tituloanuncio}
          </Link>
        </td>
        <td>
          <Link to={`/cliente/${favorite.idinmueble}`} style={{ display: 'block' }}>
            <img
              className="inmueble_fot"
              src="https://picsum.photos/280/280"
              alt={inmuebleDetails[favorite.idinmueble].tituloanuncio}
              style={{ width: '200px', height: '100px' }}
            />
          </Link>
        </td>
        <td>
          <Link to={`/cliente/${favorite.idinmueble}`} style={{ display: 'block' }}>
            {inmuebleDetails[favorite.idinmueble].ciudad}
          </Link>
        </td>
      </>
    )}
  </tr>
))}

            </tbody>
          </table>
        ) : (
          <p>No hay favoritos</p>
        )}
      </div>
    );
  }
}

export default Favorito;
