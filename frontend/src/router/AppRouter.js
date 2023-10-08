import React, {Component} from 'react';
import {Route, Routes} from "react-router-dom";
import '../App.css';
import Navbar from '../components/NavBar';
import { default as HomePage } from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import DashboardPage from '../pages/DashboardPage';
import { default as ActualizarInm } from '../pages/ActualizarInm';
import { default as EspaciosModAnf } from '../pages/EspaciosModAnf';

class AppRouter extends Component{
  render(){
   
    
    return(
      <>
      <Routes>
        <Route path= "/" element={<Navbar />}>
          <Route index element={<HomePage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='register' element={<RegisterPage />} />
          <Route path='dashboard' element={<DashboardPage />} />
          <Route path='inm' element={<ActualizarInm />} />
          <Route path='Host' element={<EspaciosModAnf />} />
        </Route>

      </Routes>
      </>
    );
  }
}
export default AppRouter;