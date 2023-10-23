import { useState } from "react";
import ModalCuantos from "./cuantos";
 function CuantosBoton(){
    const [openModal, setOpenModal] = useState(false)
    return(
        <>
         <button onClick={() => setOpenModal(!openModal)}>
          {localStorage.getItem("destino")}
        </button>
        <ModalCuantos isOpen={openModal} onClose={() => setOpenModal(false)}>
        <ModalCuantos.Header> MODAL HEADER </ModalCuantos.Header>
        <ModalCuantos.Body>
        aqui van las imagenes aqui van las imagenes 
        </ModalCuantos.Body>
        <ModalCuantos.Footer>
            footer
        </ModalCuantos.Footer>
        </ModalCuantos>
        </>
    )
 }

 export default CuantosBoton;