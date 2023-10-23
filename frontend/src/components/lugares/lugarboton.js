import { useState } from "react";
import ModalLugar from "./lugar";
import "./lugarestilos.css"
import {default as cbba } from "./imagenes/sucreModal.png"
import {default as sc } from "./imagenes/sucreModal.png"
import {default as sucre } from "./imagenes/sucreModal.png"
import {default as pando } from "./imagenes/sucreModal.png"
import {default as beni} from "./imagenes/sucreModal.png"
import {default as potosi } from "./imagenes/sucreModal.png"
import {default as oruro} from "./imagenes/sucreModal.png"
import {default as tarija} from "./imagenes/sucreModal.png"
import {default as lapaz } from "./imagenes/sucreModal.png"
 function LugarBoton(){
    const [openModal, setOpenModal] = useState(false)
    return(
        <>
         <button id="Lugar" onClick={() => setOpenModal(!openModal)}>
          {localStorage.getItem("destino")}
        </button>
        <ModalLugar isOpen={openModal} onClose={() => setOpenModal(false)}>
        <ModalLugar.Header> Selecciona una cuidad</ModalLugar.Header>
        <ModalLugar.Body>
         
        </ModalLugar.Body>
        <ModalLugar.Footer>
            footer
        </ModalLugar.Footer>
        </ModalLugar>
        </>
    )
 }

 export default LugarBoton;