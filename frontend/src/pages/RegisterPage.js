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
      <>
      <h1>regisisiisidsdisd</h1>
      
      </>
      
    );
  }
}
  export default RegisterPage;

