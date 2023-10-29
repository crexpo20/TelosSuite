// Importando el icono de cerrar de la librería React Icons y los hooks necesarios de React
import { AiOutlineCloseCircle } from 'react-icons/ai';
import React, { useState, useEffect } from 'react';
// Importando el archivo de estilos CSS
import '../CSS/PriceFilters.css';

function PriceFilter(props) {
  // Estados para manejar los precios mínimo y máximo, y para controlar la visibilidad del filtro
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [showFilter, setShowFilter] = useState(true);

  // Efecto para cargar los precios guardados en el localStorage cuando el componente se monta
  useEffect(() => {
    const storedMinPrice = localStorage.getItem('minPrice');
    const storedMaxPrice = localStorage.getItem('maxPrice');

    if (storedMinPrice) setMinPrice(storedMinPrice);
    if (storedMaxPrice) setMaxPrice(storedMaxPrice);
  }, []);

  // Funciones para manejar los cambios en los inputs de precios mínimo y máximo
  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
  };

  // Función para cerrar el filtro de precios
  const handleCloseClick = () => {
    setShowFilter(false);
  };

  // Función para manejar la submit del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Precio mínimo:', minPrice);
    console.log('Precio máximo:', maxPrice);
    // Aquí puedes agregar la lógica para filtrar y actualizar la vista
    // Por ejemplo: props.updateResults(minPrice, maxPrice)
    setShowFilter(false);
  };

  // Renderizado condicional: Si showFilter es true, muestra el filtro de precios
  return (
    showFilter && (
      <div className="price-filter-container">
        <div className="price-filter-popup">
          <div className="filter-header">
            <span className="filter-title">Filtro</span>
            {/* Botón para cerrar el filtro de precios */}
            <button className="close-button" onClick={handleCloseClick}>
              <AiOutlineCloseCircle />
            </button>
          </div>
          <div className="line"></div>
          <h2>Rango de Precios</h2>
          {/* Formulario para ingresar los precios mínimo y máximo */}
          <form onSubmit={handleSubmit}>
            <div className="price-inputs">
              <div className="input-group">
                <label htmlFor="minPrice">Mínimo:</label>
                <input
                  type="number"
                  id="minPrice"
                  value={minPrice}
                  onChange={handleMinPriceChange}
                  placeholder="Precio mínimo"
                />
              </div>
              <div className="input-group">
                <label htmlFor="maxPrice">Máximo:</label>
                <input
                  type="number"
                  id="maxPrice"
                  value={maxPrice}
                  onChange={handleMaxPriceChange}
                  placeholder="Precio máximo"
                />
              </div>
            </div>
            <button type="submit" className="submit-button">Aceptar</button>
          </form>
        </div>
      </div>
    )
  );
}

// Exportando el componente para poder usarlo en otros archivos
export default PriceFilter;
