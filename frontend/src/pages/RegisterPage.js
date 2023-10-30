import React, {Component} from 'react';
import {RiHomeSmileLine} from "react-icons/ri"
import { Link, Outlet } from 'react-router-dom';
class RegisterPage extends Component{
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      pass: '',
      errors: {
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        pass: ''
      },
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  validateForm = () => {
    const { username, firstName, lastName, email, phone , pass} = this.state;
    const errors = {
      username: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      pass:'',
    };

    let valid = true;

    if (username.trim() === '') {
      errors.username = 'El campo username es obligatorio.';
      valid = false;
    }

    if (firstName.trim() === '') {
      errors.firstName = 'El campo nombre es obligatorio.';
      valid = false;
    }

    if (lastName.trim() === '') {
      errors.lastName = 'El campo apellido es obligatorio.';
      valid = false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Correo electrónico no válido.';
      valid = false;
    }

    if (!/^[0-9]+$/.test(phone)) {
      errors.phone = 'Teléfono no válido.';
      valid = false;
    }
    
    if (pass.trim() === '') {
      errors.pass = 'El campo contraseña es obligatorio.';
      valid = false;
    }
    this.setState({ errors });

    return valid;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.validateForm()) {
      // Si la validación es exitosa, realiza la acción de envío, por ejemplo, enviando datos al servidor.
      console.log('Datos de registro:', this.state);
    }
  };
  onSubmit = async () => {
    if (this.validateForm()) {
      // Crear un objeto con los datos del formulario
      const usuario = {
        username: this.state.username,
        nombre: this.state.firstName,
        apellido: this.state.lastName,
        correo: this.state.email,
        telefono: this.state.phone,
        contraseña: this.state.pass,
      };
      const postProducto = async (url, usuario) => {
        const response = await fetch(url, {
                      
          method: 'POST',
          body: JSON.stringify(usuario),
          headers: {
                'Content-Type': 'application/json',
          }
          
          
        });
        return response;
      }
      
      const respuestaJson = await postProducto( "http://127.0.0.1:8000/api/posthuesped", usuario);

      console.log("Response:------> " + respuestaJson.status);
      // Mostrar el objeto por consola
      console.log('Datos de registro:', usuario);
    }
  };
  render(){
     
      
      return(
        
       <>
        <div class='RegistroUsuario'>
        
        <form  class="RegistroUsuario"onSubmit={this.handleSubmit}>
          <div id='elemento-registro'>
            <label id='label-registro'>Username:</label>
            <input id='input-registro'
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange}
            />
            <div className="error-message">{this.state.errors.username}</div>
          </div>
          <div>
            <label id='label-registro'>Nombre:</label>
            <input id='input-registro'
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleInputChange}
            />
             <div className="error-message">{this.state.errors.firstName}</div>
          </div>
          <div>
            <label id='label-registro'>Apellido:</label>
            <input id='input-registro'
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleInputChange}
            />
             <div className="error-message">{this.state.errors.lastName}</div>
          </div>
          <div>
            <label id='label-registro'>Correo electrónico:</label>
            <input id='input-registro'
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
            <div className="error-message">{this.state.errors.email}</div>
          </div>
          <div>
            <label id='label-registro'>Teléfono:</label>
            <input id='input-registro'
              type="number"
              name="phone"
              value={this.state.phone}
              onChange={this.handleInputChange}
            />
            <div className="error-message">{this.state.errors.pass}</div>
          </div>
          <div>
            <label id='label-registro'>Contraseña</label>
            <input id='input-registro'
              type="text"
              name="pass"
              value={this.state.pass}
              onChange={this.handleInputChange}
            />
            <div className="error-message">{this.state.errors.pass}</div>
          </div>
          <br></br>
          <div id='texto'>
            Al seleccionar Aceptar y continuar, acepto los Términos de servicio, los Términos de pago del servicio
              y la Política contra la discriminación de TelosSuite. También reconozco la Política de privacidad.
          </div>
          <br></br>
          <button type="submit" onClick={this.onSubmit}>Aceptar</button>
        </form>
      </div>
       </>
        
      );
    }
  }
  export default RegisterPage