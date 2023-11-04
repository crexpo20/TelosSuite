import { useState } from "react";
import ModalInicio from "./inicio";
 function InicioBoton(){

    const [openModal, setOpenModal] = useState(false)
    let huespedes;
  
    function cambiar() {
        
        if (localStorage.getItem("huespedes") === "1") {
            
          huespedes = "¿Cuántos?"
          return huespedes
        } else {
            huespedes = "Huéspedes"
            return huespedes
          // Realizar acciones si 'huespedes' no es igual a "0"
         
        }
      }

      const handleValuesChange = (adultos, infantes, mascotas,tipo) => {
        // Aquí puedes hacer lo que necesites con los valores
        console.log("Valores cambiados: adultos:", adultos, "infantes:", infantes, "mascotas:", mascotas, "tipo", tipo);
        localStorage.setItem("huespedes",adultos)
        localStorage.setItem("niños", infantes)
        localStorage.setItem("mascotas",mascotas)
        localStorage.setItem("tipo", tipo)
      };
   
    return(
        <>
         <button  id="Lugar" onClick={() => setOpenModal(!openModal)}>
          inicio
        </button>
        <ModalInicio isOpen={openModal} onClose={() => setOpenModal(false)}>
        <ModalInicio.Header> Iniciar Sesion </ModalInicio.Header>
        <ModalInicio.Body onValuesChange={handleValuesChange}>
        </ModalInicio.Body>
        <ModalInicio.Footer>
        </ModalInicio.Footer>
        </ModalInicio>
        </>
    )
 }

 export default InicioBoton;
