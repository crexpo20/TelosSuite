
import { BiHome } from 'react-icons/bi';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';
import { MdCabin } from 'react-icons/md';

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
  // Estados para manejar las selecciones de habitaciones, camas y baños
  const [selectedRoom, setSelectedRoom] = useState('Cualquiera');
  const [selectedBed, setSelectedBed] = useState('Cualquiera');
  const [selectedBath, setSelectedBath] = useState('Cualquiera');

   // Estado para manejar la selección del tipo de propiedad
   const [selectedPropertyType, setSelectedPropertyType] = useState('');
  
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
  // Funciones para manejar las selecciones de habitaciones, camas y baños
  const handleRoomSelection = (room) => {
    setSelectedRoom(room);
  };

  const handleBedSelection = (bed) => {
    setSelectedBed(bed);
  };

  const handleBathSelection = (bath) => {
    setSelectedBath(bath);
  };
  
  // Función para manejar la selección del tipo de propiedad
  const handlePropertyTypeSelection = (type) => {
    setSelectedPropertyType(type);
};
;
  // Renderizado condicional: Si showFilter es true, muestra el filtro de precios
  return (
    showFilter && (
        <div className="price-filter-container">
            <div className="price-filter-popup" style={{ overflowY: 'auto', maxHeight: '500px' }}>
                <div className="filter-header">
                    <span className="filter-title">Filtro</span>
                    <button className="close-button" onClick={handleCloseClick}>
                        <AiOutlineCloseCircle />
                    </button>
                </div>
                <div className="line"></div>
                <h2>Rango de Precios</h2>
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
                
                <h2>Habitaciones y camas</h2>
                <label>Habitaciones</label>
                <div className="selector-group">
                    {['Cualquiera', '1', '2', '3', '4', '5', '6', '7', '8+'].map((room) => (
                        <button
                            key={room}
                            className={`selector-button ${selectedRoom === room ? 'selected' : ''}`}
                            onClick={() => handleRoomSelection(room)}
                        >
                            {room}
                        </button>
                    ))}
                </div>
        
                <label>Camas</label>
                <div className="selector-group">
                    {['Cualquiera', '1', '2', '3', '4', '5', '6', '7', '8+'].map((bed) => (
                        <button
                            key={bed}
                            className={`selector-button ${selectedBed === bed ? 'selected' : ''}`}
                            onClick={() => handleBedSelection(bed)}
                        >
                            {bed}
                        </button>
                    ))}
                </div>
        
                <label>Baños</label>
                <div className="selector-group">
                    {['Cualquiera', '1', '2', '3', '4', '5', '6', '7', '8+'].map((bath) => (
                        <button
                            key={bath}
                            className={`selector-button ${selectedBath === bath ? 'selected' : ''}`}
                            onClick={() => handleBathSelection(bath)}
                        >
                            {bath}
                        </button>
                    ))}
                </div>

                <h2>Tipo de propiedad</h2>
                <div className="selector-group">
                    <button
                        className={`selector-button ${selectedPropertyType === 'Casa' ? 'selected' : ''}`}
                        onClick={() => handlePropertyTypeSelection('Casa')}
                    >
                        <BiHome /> Casa
                    </button>
                    <button
                        className={`selector-button ${selectedPropertyType === 'Departamento' ? 'selected' : ''}`}
                        onClick={() => handlePropertyTypeSelection('Departamento')}
                    >
                        <HiOutlineBuildingOffice2 /> Departamento
                    </button>
                    <button
                        className={`selector-button ${selectedPropertyType === 'Habitación' ? 'selected' : ''}`}
                        onClick={() => handlePropertyTypeSelection('Habitación')}
                    >
                        <HiOutlineOfficeBuilding /> Habitación
                    </button>
                    <button
                        className={`selector-button ${selectedPropertyType === 'Cabaña' ? 'selected' : ''}`}
                        onClick={() => handlePropertyTypeSelection('Cabaña')}
                    >
                        <MdCabin /> Cabaña
                    </button>
                </div>

                <form onSubmit={handleSubmit}>
                    <button type="submit" className="submit-button">Aceptar</button>
                </form>
            </div>
        </div>
    )
);


   }
// Exportando el componente para poder usarlo en otros archivos
export default PriceFilter;
