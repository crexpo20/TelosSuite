// Importamos React y useState desde 'react' para crear nuestro componente y manejar el estado
import React, { useState } from 'react';
// Importamos el archivo CSS para darle estilos a nuestro componente
import '../CSS/PriceFilters.css';

// Definimos el componente funcional PriceFilter
function PriceFilter(props) {
  // Definimos los estados para los precios mínimo y máximo y para mostrar u ocultar el filtro
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [showFilter, setShowFilter] = useState(true);

  // Función para manejar los cambios en el precio mínimo
  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
  };

  // Función para manejar los cambios en el precio máximo
  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
  };

  // Función para manejar el click en el botón de aceptar
  const handleFilterClick = () => {
    console.log('Precio mínimo:', minPrice);
    console.log('Precio máximo:', maxPrice);
  };

  // Función para manejar el click en el botón de cerrar y ocultar el filtro
  const handleCloseClick = () => {
    setShowFilter(false);
  };

  // Renderizamos el componente
  return (
    // Mostramos el filtro si showFilter es true
    showFilter && (
      <div className="price-filter-container">
        <div className="price-filter-popup">
          {/* Botón para cerrar el filtro */}
          <button className="close-button" onClick={handleCloseClick}>
            X
          </button>
          
          {/* Título del filtro */}
          <h2 className="jeju-font">Rango de Precios</h2>
          {/* Contenedor para los inputs de precio mínimo y máximo */}
          <div className="price-inputs">
            {/* Input para el precio mínimo */}
            <label htmlFor="minPrice">Mínimo:</label>
            <input
              type="number"
              id="minPrice"
              value={minPrice}
              onChange={handleMinPriceChange}
              placeholder="Precio mínimo"
            />
            {/* Input para el precio máximo */}
            <label htmlFor="maxPrice">Máximo:</label>
            <input
              type="number"
              id="maxPrice"
              value={maxPrice}
              onChange={handleMaxPriceChange}
              placeholder="Precio máximo"
            />
          </div>
          {/* Botón para aceptar y aplicar el filtro */}
          <button onClick={handleFilterClick}>Aceptar</button>
        </div>
      </div>
    )
  );
}

// Exportamos el componente para poder usarlo en otros archivos
export default PriceFilter;
