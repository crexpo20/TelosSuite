import { useState } from "react";
import ModalMenu from "./menu";
import {AiOutlineMenu} from 'react-icons/ai';
 function MenuBoton(){

    const [openModal, setOpenModal] = useState(false)
    let huespedes;
  
    
      const handleValuesChange = (adultos, infantes, mascotas) => {
        // Aquí puedes hacer lo que necesites con los valores
        console.log("Valores cambiados: adultos:", adultos, "infantes:", infantes, "mascotas:", mascotas);
        localStorage.setItem("huespedes",adultos)
        localStorage.setItem("niños", infantes)
        localStorage.setItem("mascotas",mascotas)
      };
   
    return(
        <>
     
          <button  id="btn-menu" onClick={() => setOpenModal(!openModal)}>
              <div id="elementosmenu">
              <div id="elemento">
                  Menú
              </div>
              <div id="elemento">
              <AiOutlineMenu/>
              </div>
              </div>
            
           
          </button>
        
        
        <ModalMenu isOpen={openModal} onClose={() => setOpenModal(false)}>
        <ModalMenu.Header onClose={() => setOpenModal(false)}></ModalMenu.Header>
        <ModalMenu.Body onClose={() => setOpenModal(false)} onValuesChange={handleValuesChange}>
        </ModalMenu.Body>
        <ModalMenu.Footer>
        </ModalMenu.Footer>
        </ModalMenu>
        </>
    )
 }

 export default MenuBoton;