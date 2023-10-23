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
      errors: {
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
      },
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  validateForm = () => {
    const { username, firstName, lastName, email, phone } = this.state;
    const errors = {
      username: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
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
  render(){
     
      
      return(
        
       <html id='body-registro'>
         <div id='head-izq'>
                  <div id = "logoT">
                  <i id='logoP'><RiHomeSmileLine/></i>
                  </div>
                    
                  <div id = 'logoL'>
                  <a id="TelosSuite">TelosSuite</a>
                  </div>
                  
            
               </div>
          <div class='RegistroUsuario'>
        <h2>Registrarme</h2>
        
        <a href='/'>
        <button className="close-button">
            X
          </button>
 
</a> 
        
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange}
            />
            <div className="error-message">{this.state.errors.username}</div>
          </div>
          <div>
            <label>Nombre:</label>
            <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleInputChange}
            />
             <div className="error-message">{this.state.errors.firstName}</div>
          </div>
          <div>
            <label>Apellido:</label>
            <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleInputChange}
            />
             <div className="error-message">{this.state.errors.lastName}</div>
          </div>
          <div>
            <label>Correo electrónico:</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
            <div className="error-message">{this.state.errors.email}</div>
          </div>
          <div>
            <label>Teléfono:</label>
            <input
              type="number"
              name="phone"
              value={this.state.phone}
              onChange={this.handleInputChange}
            />
            <div className="error-message">{this.state.errors.phone}</div>
          </div>
          <br></br>
          <h5>Al seleccionar Aceptar y continuar, acepto los Términos de servicio, los Términos de pago del servicio 
            y la Política contra la discriminación de TelosSuite. También reconozco la Política de privacidad.</h5>
            <br></br>
          <button type="submit">Aceptar</button>
        </form>
      </div>
       </html>
        
      );
    }
  }
  export default RegisterPage