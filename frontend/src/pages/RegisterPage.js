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
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos de registro:', this.state);
  }
 
  
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
          </div>
          <div>
            <label>Nombre:</label>
            <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label>Apellido:</label>
            <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label>Correo electrónico:</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label>Teléfono:</label>
            <input
              type="number"
              name="phone"
              value={this.state.phone}
              onChange={this.handleInputChange}
            />
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
  export default RegisterPage;

