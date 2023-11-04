import "./inicioestilo.css"
import { useEffect , useContext, createContext } from "react";
import {useSpring, animated, useTransition} from "@react-spring/web";
import React, { useState } from "react";
const ModalInicioContext = createContext()

const ModalInicio = ({children, isOpen, onClose}) => {
     
   
    const modalTransition = useTransition(isOpen, {
        from: { opacity: 0},
        enter: { opacity: 1},
        leave: {opacity: 1},
        config: {
            duration:100
        }
    })
    
    const springs = useSpring({
        opacity: isOpen ? 1:0,
        transform: isOpen ? "translateY(0%)" : "translateY(-100%)",
        config: {
            duration :100
        }
    })
    return modalTransition( (styles,isOpen) => isOpen && (
        <animated.div style = {styles} className="react-modalInicio-overlay" onClick={onClose}>
            <animated.div style={springs}className="react-modalInicio-wrapper" onClick={e => e.stopPropagation()}>
                <div className="react-modal-content">
                    <ModalInicioContext.Provider value={{onClose}}>
                        {children}
                    </ModalInicioContext.Provider>
                   
                </div>
            </animated.div>
        </animated.div>
    )
    )
}

const DismissButton = ({ children, className}) => {
    
    const{onClose} = useContext(ModalInicioContext)
    return (
        <button type = "button"  className="btn-closed" onClick={onClose} >
            {children}
        </button>
      
    )
}

const ModalInicioBody = ({ onValuesChange }) => {
    const { onClose } = useContext(ModalInicioContext);
  
    const handleLogin = (e) => {
      e.preventDefault();
      // Aquí puedes realizar la lógica de inicio de sesión
      // Puedes acceder a los valores del formulario y llamar a onValuesChange si es necesario
      // También puedes cerrar el modal después de un inicio de sesión exitoso llamando a onClose
      onClose(); // Cierra el modal
    };
  
    return (
        <div className="react-modalInicio-content">
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label  htmlFor="username" id="valor">
                Usuario o correo:
              </label>
              <input type="text" id="ingresar" name="username" />
            </div>
            <div className="form-group">
              <label htmlFor="password" id="valor">
                Contraseña:
              </label>
              <input type="password" id="ingresar" name="password" />
            </div>
            <button type="submit">Iniciar Sesión</button>
          </form>
        </div>
      );
    };

const ModalInicioHeader = ({ children }) => {
    
    return (
        <div className="react-modalInicio-header">
            <div className="react-modalInicio-title">Iniciar sesión</div>
            <DismissButton className="btn-closed">&times;</DismissButton>
        </div>
    )
}




const ModalInicioFooter = ({children}) => {
    return(
        <div className="react-modal-footer">
            {children}
           
        </div>
    )
}

ModalInicio.Header = ModalInicioHeader
ModalInicio.Body = ModalInicioBody
ModalInicio.Footer = ModalInicioFooter
ModalInicio.DismissButton = DismissButton
export default ModalInicio;