import React, { useContext, useState, createContext } from "react";
import { useSpring, animated, useTransition } from "@react-spring/web";
import './inicioestilo.css'
const ModalInicioContext = createContext();

const ModalInicio = ({ children, isOpen, onClose }) => {
  const modalTransition = useTransition(isOpen, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 1 },
    config: {
      duration: 100,
    },
  });

  const springs = useSpring({
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? "translateY(0%)" : "translateY(-100%)",
    config: {
      duration: 100,
    },
  });

  return modalTransition((styles, isOpen) =>
    isOpen && (
      <animated.div style={styles} className="react-modalInicio-overlay" onClick={onClose}>
        <animated.div style={springs} className="react-modalInicio-wrapper" onClick={(e) => e.stopPropagation()}>
          <div className="react-modal-content">
            <ModalInicioContext.Provider value={{ onClose }}>{children}</ModalInicioContext.Provider>
          </div>
        </animated.div>
      </animated.div>
    )
  );
};

const DismissButton = ({ children, className }) => {
  const { onClose } = useContext(ModalInicioContext);

  return (
    <button type="button" className="btn-closed" onClick={onClose}>
      {children}
    </button>
  );
};

const ModalInicioBody = ({ onValuesChange }) => {
  const { onClose } = useContext(ModalInicioContext);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://127.0.0.1:8000/api/getusername/${formData.username}`);

      if (response.ok) {
        const userData = await response.json();
        if (userData.password === formData.contraseña) {
          // Inicio de sesión exitoso
          onClose(); // Cierra el modal
          // Puedes acceder a los valores del formulario y llamar a onValuesChange si es necesario
          
        } else {
          setError("Nombre de usuario o contraseña incorrecta.");
        }
      } else {
        setError("Nombre de usuario no encontrado.");
      }
    } catch (error) {
      console.error("Error al iniciar sesión: ", error);
      setError("Hubo un error al iniciar sesión.");
    }
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  

  return (
    <div className="react-modalInicio-content">
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username" id="valor">
            Usuario:
          </label>
          <input
            type="text"
            id="ingresar"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" id="valor">
            Contraseña:
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="ingresar"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <button
            type="button"
            className="toggle-password-button"
            onClick={handleTogglePasswordVisibility}
          >
            {showPassword ? "Ocultar" : "Mostrar"}
          </button>
        </div>
        <button className="initbuton">Iniciar Sesión</button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

const ModalInicioHeader = ({ children }) => {
  return (
    <div className="react-modalInicio-header">
      <div className="react-modalInicio-title">{children}</div>
      <DismissButton className="btn-closed">&times;</DismissButton>
    </div>
  );
};

const ModalInicioFooter = ({ children }) => {
  return (
    <div className="react-modal-footer">
      {children}
    </div>
  );
};

ModalInicio.Header = ModalInicioHeader;
ModalInicio.Body = ModalInicioBody;
ModalInicio.Footer = ModalInicioFooter;
ModalInicio.DismissButton = DismissButton;

export default ModalInicio;