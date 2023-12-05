import React, { useState } from 'react';
import './Comentarios.css';
import axios from 'axios';


function Comentarios({ isOpen, onClose, idInmueble}) {
  const [comentario, setComentario] = useState('');
  const [rating, setRating] = useState({
    limpieza: 0,
    puntualidad: 0,
    comunicación: 0,
  });
  const [hoverAt, setHoverAt] = useState(null);

  const handleMouseEnter = (category, index) => {
    
    setHoverAt((prevHoverAt) => ({ ...prevHoverAt, [category]: index + 1 }));
  };
  
  const handleMouseLeave = () => {
    
    setHoverAt(null);
  };
  
  const handleClick = (category, index) => {
    setRating((prevRating) => ({
      ...prevRating,
      [category]: parseInt(index + 1) // Asegúrate de que sea un entero
    }));
  };
  
  const handleComentarioChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length <= 200) {
      setComentario(inputValue);
    }
  };
  
  const handleSubmit = async () => {
    const promedio = Math.round(
      (parseInt(rating.calificacion) + parseInt(rating.exactitud) + parseInt(rating.comunicacion)) / 3
    );

  
    const comentarioData = {
      idusuario: idInmueble,
      idanfitrion: parseInt(localStorage.getItem("userID")), // Convertido a entero
      descripcion: comentario,
      puntuacion: parseInt(rating.limpieza), // Convertido a entero
      puntualidad:parseInt(rating.puntualidad),
      comunicacion:parseInt(rating.comunicación),
      
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/api/postreseña", {
        method: 'POST',
        body: JSON.stringify(comentarioData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Verifica si la respuesta es exitosa
      if (response.ok) {
        const responseBody = await response.json();
        console.log('Comentario enviado exitosamente:', responseBody);
        onClose(); // Cierra el modal si todo fue exitoso
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error al enviar el comentario:', error);
    }
  };

  if (!isOpen) return null;

  

  return (
    <div className="modal-background">
      <div className="modal-container">
        <div className="modal-header">
          <h2>Calificaciones</h2>
          <span className="close-button" onClick={onClose}>&times;</span> {/* Botón de cerrar con equis */}
        </div>
        <div className="modal-body">
          <div className="ratings-container">
            {['limpieza','puntualidad','comunicación', ].map(category => (
              <div key={category} className="calificacion-categoria">
                <div className="calificacion-titulo">{category.charAt(0).toUpperCase() + category.slice(1)}</div> {/* Capitaliza la primera letra */}
                <div className="rating-container">
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            className={`rating-star ${index < (hoverAt?.[category] || rating[category]) ? "selected" : ""}`}
            onMouseEnter={() => handleMouseEnter(category, index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(category, index)}
          >
            &#9733;
          </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="comments-container">
            <h2>Comentario</h2>
            <textarea 
              placeholder="Escribe tu comentario aquí..."
              value={comentario}
              onChange={handleComentarioChange}
            />
            <div className="character-counter">
              {comentario.length}/200
            </div>
          </div>
          </div>
        <div className="modal-footer">
          <button className="accept-button" onClick={handleSubmit}>Aceptar</button>
        </div>
      </div>
    </div>
  );
}


export default Comentarios;

