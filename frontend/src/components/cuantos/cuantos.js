import "./modalcuantos.css"
import { useEffect , useContext, createContext } from "react";
import {useSpring, animated, useTransition} from "@react-spring/web";

const ModalCuantosContext = createContext()

const ModalCuantos = ({children, isOpen, onClose}) => {
     
   
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
            <animated.div style={springs}className="react-modal-wrapper" onClick={e => e.stopPropagation()}>
                <div className="react-modal-content">
                    <ModalCuantosContext.Provider value={{onClose}}>
                        {children}
                    </ModalCuantosContext.Provider>
                   
                </div>
            </animated.div>
        </animated.div>
    )
    )
}

const DismissButton = ({ children, className}) => {
    
    const{onClose} = useContext(ModalCuantosContext)
    return (
        <button type = "button"  className="btn-closed" onClick={onClose} >
            {children}
        </button>
      
    )
}

const ModalCuantosHeader = ({ children }) => {
    
    return (
        <div className="react-modal-header">
            <div className="react-modal-title">{children}</div>
            <DismissButton className="btn-closed">&times;</DismissButton>
        </div>
    )
}

const ModalCuantosBody = ({children}) => {
    return(
        <div className="react-modal-body">
            {children}
        </div>
    )
}

const ModalCuantosFooter = ({children}) => {
    return(
        <div className="react-modal-footer">
            {children}
        </div>
    )
}

ModalCuantos.Header = ModalCuantosHeader
ModalCuantos.Body = ModalCuantosBody
ModalCuantos.Footer = ModalCuantosFooter
ModalCuantos.DismissButton = DismissButton
export default ModalCuantos;