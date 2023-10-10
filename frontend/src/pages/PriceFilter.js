import React, { useState } from 'react';
import '../App.css';

function PriceFilter(props) {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [showFilter, setShowFilter] = useState(true);

  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
  };

  const handleFilterClick = () => {
    console.log('Precio mínimo:', minPrice);
    console.log('Precio máximo:', maxPrice);
  };

  const handleCloseClick = () => {
    setShowFilter(false);
  };

  return (
    showFilter && (
      <div className="price-filter-container">
        <div className="price-filter-popup">
          <button className="close-button" onClick={handleCloseClick}>
            X
          </button>
          <h2 className="jeju-font">Rango de Precios</h2>
          <div className="price-inputs">
            <label htmlFor="minPrice">Mínimo:</label>
            <input
              type="number"
              id="minPrice"
              value={minPrice}
              onChange={handleMinPriceChange}
              placeholder="Precio mínimo"
            />
            <label htmlFor="maxPrice">Máximo:</label>
            <input
              type="number"
              id="maxPrice"
              value={maxPrice}
              onChange={handleMaxPriceChange}
              placeholder="Precio máximo"
            />
          </div>
          <button onClick={handleFilterClick}>Aceptar</button>
        </div>
      </div>
    )
  );
}

export default PriceFilter;
