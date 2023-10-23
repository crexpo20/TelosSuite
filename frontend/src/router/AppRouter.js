import React, {Component} from 'react';
import {Route, Routes,Navigate} from "react-router-dom";
import '../App.css';
import Navbar from '../components/NavBar';
import { default as HomePage } from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import DashboardPage from '../pages/DashboardPage';
import { default as ActualizarInm } from '../pages/ActualizarInm';
import { default as RegisterInmue } from '../pages/RegisterInmue';
import { default as EspaciosModAnf } from '../pages/EspaciosModAnf';
import NavbarCli from '../components/navBarCli';
import Donde from '../pages/modalWhere';

class AppRouter extends Component{
  render(){
   
    
    return(
      <>
      <Routes>
      <Route path= "/" element={<Navbar />}>
          <Route index element={<HomePage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='dashboard' element={<DashboardPage />} />
          <Route path='home' element={<HomePage />} />
          <Route path='register' element={<RegisterPage />} />
     
          <Route path='*' element={<Navigate TO ="/"/>}/> 
          
      </Route>
      <Route path= "/cliente" element={<NavbarCli />}>
            <Route index element={<EspaciosModAnf />} />
            <Route path= "/cliente/:espaciosID" element ={<ActualizarInm  />}/>
            <Route path='inm' element={<ActualizarInm />} />
            <Route path="/cliente/registerinmue" element={<RegisterInmue />} />
            <Route path='dashboard' element={<DashboardPage />} />
            
            <Route path='*' element={<Navigate TO ="/"/>}/> 
      </Route>
      <Route>
      <Route path='register' element={<RegisterPage />} />
      </Route>
        


      </Routes>
      </>
    );
  }
}
export default AppRouter;