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
        <animated.div style = {styles} className="react-modal-overlay" onClick={onClose}>
            <animated.div style={springs}className="react-modal-wrapperH" onClick={e => e.stopPropagation()}>
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

const ModalInicioHeader = ({ children }) => {
    
    return (
        <div className="react-modalInicio-header">
            <div className="react-modalInicio-title">Iniciar sesión</div>
            <DismissButton className="btn-closed">&times;</DismissButton>
        </div>
    )
}


const ModalInicioBody = ({ onValuesChange }) => {
    
    return (
      <div>
        VA EL BODY
      </div>
    );
  };

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