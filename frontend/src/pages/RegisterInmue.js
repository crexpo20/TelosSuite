import React, { Component } from 'react';
import { BsHouse } from 'react-icons/bs';
import { MdApartment } from 'react-icons/md';
import "./css/carrusel.css";

class RegisterInmue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
      formData: {
        idanfitrion: 0,
        tipopropiedad: '',
        tituloanuncio: '',
        descripcion: '',
        ubicacion: '',
        precio: 0,
        capacidad: 0,
        habitaciones: 0,
        banos: 0,
        camas: 0,
        niños: 0,
        normas: '',
        mascotas: 0,
        qr: '',
        cuidad: '',
        wifi: 0,
        parqueo: 0,
        cocina: 0,
        refrigerador: 0,
        lavaropa: 0,
        piscina: 0,
      },
      propertyTypes: [
        { type: 'Casa', icon: <BsHouse /> },
        { type: 'Habitación', icon: <MdApartment /> },
        { type: 'Departamento', icon: <MdApartment /> },
        { type: 'Cabaña', icon: <MdApartment /> },
      ],
      options: [
        { key: 'niños', label: 'Niños', icon: <BsHouse />, value: 0 },
        { key: 'mascotas', label: 'Mascotas', icon: <MdApartment />, value: 0 },
      ],
      cities: [
        'Cochabamba',
        'Santa Cruz',
        'La Paz',
        'Oruro',
        'Potosí',
        'Sucre',
        'Tarija',
        'Beni',
        'Pando',
      ],
    };
  }

  handleNextSlide = () => {
    if (this.state.currentSlide < 14) {
      this.setState(
        (prevState) => ({
          currentSlide: prevState.currentSlide + 1,
        }),
        () => {
          console.log("Valores de formData:", this.state.formData);
        }
      );
    }
  };

  handlePrevSlide = () => {
    if (this.state.currentSlide > 0) {
      this.setState((prevState) => ({
        currentSlide: prevState.currentSlide - 1,
      }));
    }
  };

  handlePropertyTypeChange = (type) => {
    this.setState((prevState) => {
      const formData = { ...prevState.formData, tipopropiedad: type };
      return { formData };
    });
  };

  handleInputChange = (field, value) => {
    this.setState((prevState) => {
      const formData = { ...prevState.formData };
      formData[field] = value;
      return { formData };
    });
  };

  handleOptionChange = (key) => {
    this.setState((prevState) => {
      const formData = { ...prevState.formData };
      formData[key] = formData[key] === 0 ? 1 : 0;
      return { formData };
    });
  };

  handleCityChange = (city) => {
    this.setState((prevState) => {
      const formData = { ...prevState.formData, cuidad: city };
      return { formData };
    });
  };

  render() {
    const currentSlide = this.state.currentSlide;
    const { formData, propertyTypes, options, cities } = this.state;

    return (
      <div className="carousel-container">
        <div className="carousel-slide">
          <div className="slide">
            
            {currentSlide === 0 && (
              <div className="property-type-selection">
                <h3>Escoge el tipo de propiedad:</h3>
                {propertyTypes.map((property, index) => (
                  <label
                    key={index}
                    className={`property-type-label ${
                      formData.tipopropiedad === property.type ? 'selected' : ''
                    }`}
                  >
                    {property.icon} {property.type}
                    <input
                      type="radio"
                      name="propertyType"
                      value={property.type}
                      checked={formData.tipopropiedad === property.type}
                      onChange={() => this.handlePropertyTypeChange(property.type)}
                    />
                  </label>
                ))}
              </div>
            )}
            {currentSlide === 1 && (
              <div className="property-options">
                <h3>Tu inmueble permite:</h3>
                {options.map((option, index) => (
                  <label
                    key={index}
                    className={`property-options-label ${
                      formData[option.key] === 1 ? 'selected' : ''
                    }`}
                  >
                    {option.icon} {option.label}
                    <input
                      type="checkbox"
                      name={option.key}
                      checked={formData[option.key] === 1}
                      onChange={() => this.handleOptionChange(option.key)}
                    />
                  </label>
                ))}
              </div>
            )}
            {currentSlide === 2 && (
              <div className="property-info">
                <h3>Información básica sobre tu inmueble:</h3>
                <label>
                  Capacidad:
                  <input
                    type="number"
                    name="capacidad"
                    value={formData.capacidad}
                    onChange={(e) =>
                      this.handleInputChange("capacidad", e.target.value)
                    }
                  />
                </label>
                <label>
                  Habitaciones:
                  <input
                    type="number"
                    name="habitaciones"
                    value={formData.habitaciones}
                    onChange={(e) =>
                      this.handleInputChange("habitaciones", e.target.value)
                    }
                  />
                </label>
                <label>
                  Baños:
                  <input
                    type="number"
                    name="banos"
                    value={formData.banos}
                    onChange={(e) =>
                      this.handleInputChange("banos", e.target.value)
                    }
                  />
                </label>
                <label>
                  Camas:
                  <input
                    type="number"
                    name="camas"
                    value={formData.camas}
                    onChange={(e) =>
                      this.handleInputChange("camas", e.target.value)
                    }
                  />
                </label>
              </div>
            )}
            {currentSlide === 3 && (
              <div className="property-title-description">
                <h3>Ingresa un título para tu anuncio:</h3>
                <input
                  type="text"
                  name="tituloanuncio"
                  value={formData.tituloanuncio}
                  onChange={(e) =>
                    this.handleInputChange("tituloanuncio", e.target.value)
                  }
                />
                <h3>Ingresa una breve descripción sobre tu inmueble:</h3>
                <textarea
                  name="descripcion"
                  value={formData.descripcion}
                  onChange={(e) =>
                    this.handleInputChange("descripcion", e.target.value)
                  }
                />
              </div>
            )}
            {currentSlide === 4 && (
              <div className="property-rules">
                <h3>Por favor, ingresa las normas para tu inmueble:</h3>
                <textarea
                  name="normas"
                  value={formData.normas}
                  onChange={(e) =>
                    this.handleInputChange("normas", e.target.value)
                  }
                />
              </div>
            )}
            {currentSlide === 5 && (
              <div className="property-location">
                <h3>En qué ciudad se encuentra tu inmueble:</h3>
                {cities.map((city, index) => (
                  <label
                    key={index}
                    className={`property-type-label ${
                      formData.cuidad === city ? 'selected' : ''
                    }`}
                  >
                    {city}
                    <input
                      type="radio"
                      name="city"
                      value={city}
                      checked={formData.cuidad === city}
                      onChange={() => this.handleCityChange(city)}
                    />
                  </label>
                ))}
              </div>
            )}
            {currentSlide === 6 && (
              <div className="property-services">
                <h3>Servicios adicionales:</h3>
                <label
                  className={`property-options-label ${
                    formData.wifi === 1 ? 'selected' : ''
                  }`}
                >
                  <MdApartment /> Wifi
                  <input
                    type="checkbox"
                    name="wifi"
                    checked={formData.wifi === 1}
                    onChange={() => this.handleOptionChange('wifi')}
                  />
                </label>
                <label
                  className={`property-options-label ${
                    formData.parqueo === 1 ? 'selected' : ''
                  }`}
                >
                  <MdApartment /> Parqueo
                  <input
                    type="checkbox"
                    name="parqueo"
                    checked={formData.parqueo === 1}
                    onChange={() => this.handleOptionChange('parqueo')}
                  />
                </label>
                <label
                  className={`property-options-label ${
                    formData.cocina === 1 ? 'selected' : ''
                  }`}
                >
                  <MdApartment /> Cocina
                  <input
                    type="checkbox"
                    name="cocina"
                    checked={formData.cocina === 1}
                    onChange={() => this.handleOptionChange('cocina')}
                  />
                </label>
                <label
                  className={`property-options-label ${
                    formData.refrigerador === 1 ? 'selected' : ''
                  }`}
                >
                  <MdApartment /> Refrigerador
                  <input
                    type="checkbox"
                    name="refrigerador"
                    checked={formData.refrigerador === 1}
                    onChange={() => this.handleOptionChange('refrigerador')}
                  />
                </label>
                <label
                  className={`property-options-label ${
                    formData.lavaropa === 1 ? 'selected' : ''
                  }`}
                >
                  <MdApartment /> Lavaropa
                  <input
                    type="checkbox"
                    name="lavaropa"
                    checked={formData.lavaropa === 1}
                    onChange={() => this.handleOptionChange('lavaropa')}
                  />
                </label>
                <label
                  className={`property-options-label ${
                    formData.piscina === 1 ? 'selected' : ''
                  }`}
                >
                  <MdApartment /> Piscina
                  <input
                    type="checkbox"
                    name="piscina"
                    checked={formData.piscina === 1}
                    onChange={() => this.handleOptionChange('piscina')}
                  />
                </label>
              </div>
            )}
            {currentSlide === 7 && (
              <div className="property-price">
                <h3>Es momento de poner un precio a tu inmueble:</h3>
                <label>
                  Precio:
                  <input
                    type="number"
                    name="precio"
                    value={formData.precio}
                    onChange={(e) =>
                      this.handleInputChange("precio", e.target.value)
                    }
                  />
                </label>
              </div>
            )}
            {currentSlide === 8 && (
              <div className="property-done">
                <h3>
                  Eso es todo por ahora, tu inmueble ya es visible para los
                  posibles huéspedes!
                </h3>
              </div>
            )}
          </div>
        </div>
        <div className="button-container-fixed">
          {currentSlide > 0 && (
            <button className="prev-button" onClick={this.handlePrevSlide}>
              Anterior
            </button>
          )}
          {currentSlide < 8 && (
            <button className="next-button" onClick={this.handleNextSlide}>
              Siguiente
            </button>
          )}
          
        </div>
      </div>
    );
  }
}

export default RegisterInmue;
