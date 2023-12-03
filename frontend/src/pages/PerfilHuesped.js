// src/pages/PerfilHuesped.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import {RiHomeSmileLine} from "react-icons/ri";

// Nuevo componente funcional que utiliza useParams
const PerfilHuespedFuncional = () => {
  const { id } = useParams(); // Obtenemos el parámetro de la URL
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [apellidoUsuario, setApellidoUsuario] = useState("");
  const [nombreUsuario1, setNombreUsuario1] = useState("");
  const [apellidoUsuario1, setApellidoUsuario1] = useState("");
  const [reseñas, setReseñas] = useState([]);
  const [usuarios, setUsuarios] = useState([]);

  const nombre = (idUsuario) => {
    const usuarioEncontrado = usuarios.find(usuario => usuario.idusuario === idUsuario);

    if (usuarioEncontrado) {
      return `${usuarioEncontrado.nombre} ${usuarioEncontrado.apellido}`;
    }

    return "Usuario no encontrado";
  };

  const generarEstrellas = (puntuacion) => {
    const estrellasPintadas = Math.round(puntuacion); // Redondeamos la puntuación al número entero más cercano
    const estrellasVacias = 5 - estrellasPintadas;
  
    const estrellas = [];
  
    for (let i = 0; i < estrellasPintadas; i++) {
      estrellas.push(<span key={i} style={{ color: '#ffdd00' }}>&#9733;</span>); // Estrella pintada en amarillo
    }
  
    for (let i = 0; i < estrellasVacias; i++) {
      estrellas.push(<span key={i + estrellasPintadas} style={{ color: 'gray' }}>&#9734;</span>); // Estrella vacía en gris claro
    }
  
    return estrellas;
  };
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/getusuario/${id}`)
      .then(response => {
        setNombreUsuario(response.data.nombre);
        setApellidoUsuario(response.data.apellido);
      })
      .catch(error => {
        console.error('Error al obtener datos del usuario:', error);
      });
      axios.get('http://127.0.0.1:8000/api/getreseña')
      .then(response => {
        setReseñas(response.data);
      })
      .catch(error => {
        console.error('Error al obtener reseñas del usuario:', error);
      });
      axios.get('http://127.0.0.1:8000/api/getusuario')
      .then(response => {
        setUsuarios(response.data);
      })
      .catch(error => {
        console.error('Error al obtener datos del usuario:', error);
      });
  }, [id]);
 


  return (
    <>
    <header>
            <div id='head'>
               <div id='head-izq'>
               <div id = "logoT">
                  <i id='logoP'><RiHomeSmileLine/></i>
                  </div>
                    
                  <div id = 'logoL'>
                  <a id="TelosSuite">TelosSuite</a>
                  </div>
                </div>
                    
          
               <div id='navAbajo'>
               <a id="TelosSuites">Perfil de usuario solicitante</a>

               </div>

               <div id='head-der'>
                </div>

            </div>
              <div id='navAbajo'>
              <div id='navRegs'>
              <div id="reg"> {nombreUsuario} {apellidoUsuario}</div>
                  </div>
                  
                      <div  id='opt-nav'>
                        <button id="btn-volver" >Volver</button>
                      </div>
                  
             </div>
           
        </header>
    <body>
    <div>
      
      <div>
       
        

      </div>

    
      <div>
      {reseñas.map((reseña,index) => {
       if(reseña.idusuario === parseInt(id)){
        
      return(
      
         <div>
         <div>
         </div>
         <p>Anfitrión: {nombre(reseña.idanfitrion)}</p>
         <p>Comentario: {reseña.descripcion}</p>
         <p>Puntuación: {generarEstrellas(reseña.puntuacion)}</p>
         <br></br>
         <br></br>
         <br></br>
       </div>
      )
     
       }
  
})}
      </div>
     
    </div>
    </body>
    </>
  );
};


// Componente de clase que recibe los valores como props
class PerfilHuesped extends React.Component {
  render() {
    return <PerfilHuespedFuncional />;
  }
}

export default PerfilHuesped;
