import { useState } from "react";
import ModalInicio from "./inicio";
 function InicioBoton(){

    const [openModal, setOpenModal] = useState(false)
   
    

      const handleValuesChange = (adultos, infantes, mascotas,tipo) => {
        // Aquí puedes hacer lo que necesites con los valores
       
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
            por ahora darle click en iniciar sesion sin llenar los campos
        </ModalInicio.Footer>
        </ModalInicio>
        </>
    )
 }

 export default InicioBoton;
