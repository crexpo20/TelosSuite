import React, { Component } from 'react';
import axios from 'axios';

class Habilitar extends Component {
  constructor() {
    super();
    this.state = {
      userData: {
        idusuario: null,
        username: '',
        nombre: '',
        apellido: '',
        correo: '',
        telefono: null,
        contraseña: '',
        anfitrion: 0,
      },
    };
  }

  async actualizarUsuario(userData) {
    try {
      const idusuario = localStorage.getItem('userID'); // ID del usuario que deseas actualizar
      const response = await axios.put(`http://127.0.0.1:8000/api/putusuario/${idusuario}`, userData);

      if (response.status === 200) {
        console.log('Usuario actualizado con éxito.');
      } else {
        console.error('Error al actualizar el usuario.');
      }
    } catch (error) {
      console.error('Error al actualizar el usuario:', error);
    }
  }

  handleAceptar = () => {
    const { userData } = this.state;
    // Actualiza el campo "anfitrion" a 1.
    userData.anfitrion = 1;
    
    this.actualizarUsuario(userData);
    localStorage.setItem("anfitrion", userData.anfitrion)
    window.location.reload();
  };

  componentDidMount() {
    const idusuario = localStorage.getItem('userID');

    axios.get(`http://127.0.0.1:8000/api/getusuario/${idusuario}`)
      .then((response) => {
        this.setState({ userData: response.data });
      })
      .catch((error) => {
        console.error('Error al obtener datos de usuario:', error);
      });
  }

  render() {
    const { userData } = this.state;

    return (
      <div id='hab'>
        <p>Hola, {userData.nombre}</p>
        <p>En TelosSuite, además de buscar un inmueble de tu preferencia, también puedes publicar tu propio inmueble.</p>
        <p>Para comenzar a publicar, presiona "ACEPTAR". Recuerda que debes iniciar sesión con tu cuenta de usuario y cambiar a la vista de <b>Modo Anfitrión</b> para ir a tu propio espacio.</p>

        <button onClick={this.handleAceptar}>ACEPTAR</button>

      </div>
    );
  }
}

export default Habilitar;
