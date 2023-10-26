import "./menuestilos.css"
import { useEffect , useContext, createContext } from "react";
import {useSpring, animated, useTransition} from "@react-spring/web";
import React, { useState } from "react";
import { Link, Outlet } from 'react-router-dom';
import RegistroBoton from "../registro/botonRegistro";
const ModalMenuContext = createContext()

const ModalMenu = ({children, isOpen, onClose}) => {
     
   
    const modalTransition = useTransition(isOpen, {
        from: { opacity: 0},
        enter: { opacity: 1},
        leave: {opacity: 1},
        config: {
            duration:100
        }
    })
    
    
    return modalTransition( (styles,isOpen) => isOpen && (
        <animated.div style = {styles} className="react-modalMenu-overlay" onClick={onClose}>
            <animated.div className="react-modalMenu-wrapper" onClick={e => e.stopPropagation()}>
                <div className="react-modalMenu-content">
                    <ModalMenuContext.Provider value={{onClose}}>
                        {children}
                    </ModalMenuContext.Provider>
                   
                </div>
            </animated.div>
        </animated.div>
    )
    )
}

const DismissButton = ({ children, className}) => {
    
    const{onClose} = useContext(ModalMenuContext)
    return (
        <button type = "button"  className="btn-closed" onClick={onClose} >
            {children}
            
       
        </button>
      
    )
}

const ModalMenuHeader = ({ children }) => {
    const{onClose} = useContext(ModalMenuContext)
    return (
        <div className="react-modalMenu-header">
            <div className="react-modalMenu-title" style={{display:""}}>{children}</div>
              <ul id="lista-menu">
                <li id="menu-item" >
                   
                <RegistroBoton/>
                </li>
                <li id="menu-item">
                    
                </li>
              </ul>
            </div>
    )
}


const ModalMenuBody = ({ onValuesChange }) => {
   
  
    return (
      <div className="react-modalMenu-body">
        <div id="body-huespedes">
        <ul id="lista-menu">
                <li id="menu-item">
                <Link to='/cliente'>Modo Anfitrion</Link>

                </li>
                
              </ul>
        </div>
          </div>
    );
  };

const ModalMenuFooter = ({children}) => {
    return(
        <div className="react-modalMenu-footer">
            {children}
           
        </div>
    )
}

ModalMenu.Header = ModalMenuHeader
ModalMenu.Body = ModalMenuBody
ModalMenu.Footer = ModalMenuFooter
ModalMenu.DismissButton = DismissButton
export default ModalMenu;