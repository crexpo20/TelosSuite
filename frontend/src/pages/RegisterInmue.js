import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import casaImage from '../iconos/casa.png';
import habitacionImage from '../iconos/habitacion.png';
import departamentoImage from '../iconos/departamento.png';
import cabanaImage from '../iconos/cabana.png';
import wifiImage from '../iconos/wifi.png';
import privadoImage from '../iconos/privado.png';
import compartidoImage from '../iconos/compartido.png';
import aireconImage from '../iconos/aireacon.png';
import batidoraImage from '../iconos/batidora.png';
import billarImage from '../iconos/billar.png';
import camaraImage from '../iconos/camara.png';
import cocinaImage from '../iconos/cocina.png';
import desayunoImage from '../iconos/desyuno.png';
import DetectorhumoImage from '../iconos/Detectorhumo.png';
import gymImage from '../iconos/gym.png';
import jacuzziImage from '../iconos/jacuzzi.png';
import lavavajillaImage from '../iconos/lavavajilla.png';
import licuadoraImage from '../iconos/licuadora.png';
import llaveImage from '../iconos/llave.png';
import mascotaImage from '../iconos/mascota.png';
import microondasImage from '../iconos/microondas.png';
import niñoImage from '../iconos/niño.png';
import parqueoImage from '../iconos/parqueo.png';
import parrillaImage from '../iconos/parrilla.png';
import piscinaImage from '../iconos/piscina.png';
import refrigeradorImage from '../iconos/refrigerador.png';
import terrazaImage from '../iconos/terraza.png';
import tvImage from '../iconos/tv.png';
import vigilanciaImage from '../iconos/vigilancia.png';

import chimeneaImage from '../iconos/chimenea.png';
import ciudadImage from '../iconos/CIUDAD.png';



class RegisterInmue extends Component {
  constructor(props) {
    super(props);

    // Define las preguntas y opciones para cada parte del carrusel
    this.slides = [
      {
        question: 'Ingrese el nombre del Inmueble',
        inputType: 'text', // Campo de entrada de texto
      },
      {
        question: '¿Cuál de estas opciones describe mejor tu espacio?',
        options: [
          { value: 'Casa', imageSrc: casaImage },
          { value: 'Habitación', imageSrc: habitacionImage },
          { value: 'Departamento', imageSrc: departamentoImage },
          { value: 'Cabaña', imageSrc: cabanaImage },
        ],
        selectedOption: null,
      },
      {
        question: '¿Qué tipo de alojamiento ofreces?',
        options: [
          { value: 'Privado', imageSrc: privadoImage },
          { value: 'Compartido', imageSrc: compartidoImage },
        ],
        selectedOption: null,
      },
      {
        question: 'Especificaciones básicas sobre el espacio y el precio',
        fields: [
          { label: 'Número de Habitaciones', inputType: 'number' },
          { label: 'Número de Camas', inputType: 'number' },
          { label: 'Número de Baños', inputType: 'number' },
          { label: 'Número de Huéspedes', inputType: 'number' },
        ],
      },
      {
        question: '¿Tu inmueble permite ...... ?',
        options: [
          { value: 'Niños', imageSrc: niñoImage },
          { value: 'Mascotas', imageSrc: mascotaImage },
        ],
        selectedOption: null,
      },
      {
        question: 'Servicios',
        options: [
          { value: 'Piscina', imageSrc: piscinaImage },
          { value: 'Wifi', imageSrc: wifiImage },
          { value: 'Desayuno', imageSrc: desayunoImage },
          { value: 'Estacionamiento', imageSrc: parqueoImage },
          { value: 'TV', imageSrc:tvImage },
          { value: 'Aire Acondicionado', imageSrc: aireconImage },
        ],
        selectedOption: null,
      },
      {
        question: 'Servicios Destacados',
        options: [
          { value: 'Jacuzzi', imageSrc: jacuzziImage },
          { value: 'Parrilero', imageSrc: parrillaImage },
          { value: 'Terraza', imageSrc: terrazaImage },
          { value: 'Chimenea Interior', imageSrc: chimeneaImage },
          { value: 'Equipo de gym', imageSrc: gymImage },
          { value: 'Mesa Billar', imageSrc: billarImage },
        ],
        selectedOption: null,
      },
      {
        question: '¿Qué electrodomésticos ofreces?',
        options: [
          { value: 'Licuadora', imageSrc: licuadoraImage },
          { value: 'Refrigerador', imageSrc: refrigeradorImage },
          { value: 'Lavavajillas', imageSrc: lavavajillaImage },
          { value: 'Batidora', imageSrc: batidoraImage },
          { value: 'Cocina', imageSrc: cocinaImage },
          { value: 'Microondas', imageSrc: microondasImage },
        ],
        selectedOption: null,
      },
      {
        question: '¿Cuentas con alguno de estos elementos de seguridad?',
        options: [
          { value: 'Cámara de Seguridad', imageSrc: camaraImage },
          { value: 'Llaves Electrónicas', imageSrc: llaveImage },
          { value: 'Vigilancia 24 horas', imageSrc: vigilanciaImage },
          { value: 'Detector de Humo', imageSrc: DetectorhumoImage },
        ],
        selectedOption: null,
      },
      {
        question: 'Ingrese la ubicación exacta',
        fields: [
          { label: 'Link de Ubicación', inputType: 'text' },
          { label: 'Dirección', inputType: 'text' },
        ],
      },
      {
        question: '¿En qué departamento se encuentra el inmueble ?',
        options: [
          { value: 'Cochabamba', imageSrc: ciudadImage },
          { value: 'La Paz' , imageSrc: ciudadImage},
          { value:'Santa Cruz' , imageSrc: ciudadImage},
          {value: 'Sucre' , imageSrc: ciudadImage},
          { value: 'Pando' , imageSrc: ciudadImage},
          { value: 'Tarija', imageSrc: ciudadImage },
          { value: 'Oruro' , imageSrc: ciudadImage},
          { value: 'Potosi', imageSrc: ciudadImage },
          { value: 'Beni' , imageSrc: ciudadImage},
        ],
        selectedOption: null,
      },
      {
        question: 'Ingresar imágenes',
        inputType: 'file',
        uploadedImages: [
          { image: null, description: '' }, // Objeto para la primera imagen
        ],
      },
      {
        question: 'Ingrese una breve descripción que sea atractiva para los huéspedes',
        inputType: 'text', // Campo de entrada de texto
      },
      {
        question: 'Ingrese el precio',
        inputType: 'number', // Tipo de entrada para ingresar el precio (number para números)
        pattern: '^[0-9,$]*$',
      },
      {
        question: 'Creemos que los métodos de pago deben ser simples pero confiables, ingresa una imagen QR para que los huéspedes puedan verla',
        inputType: 'file', // Campo de entrada de tipo archivo para la imagen
        uploadedImage: null, // Imagen seleccionada
      },
      {
        question: '¡Eso es todo! Ahora espera a que lleguen las solicitudes...',
        button: {
          text: 'Ir al inicio',
        },
      },
    ];

    this.state = {
      currentSlide: 0,
      dynamicInputs: [], 
    };
  }

  handleOptionSelect = (optionIndex) => {
    const { currentSlide } = this.state;
    const updatedSlides = [...this.slides];
    updatedSlides[currentSlide].selectedOption = optionIndex;

    if (currentSlide < this.slides.length - 1) {
      this.slider.slickNext();
      this.setState({ currentSlide: currentSlide + 1, slides: updatedSlides });
    }
  };

  handleInputChange = (event) => {
    const { currentSlide } = this.state;
    const inputValue = event.target.value;
    const updatedSlides = [...this.slides];
    updatedSlides[currentSlide].inputValue = inputValue;
    this.setState({ slides: updatedSlides });
  };

  handleImageUpload = (event) => {
    const { currentSlide } = this.state;
    const image = event.target.files[0];

    if (image) {
      const uploadedImages = [...this.slides[currentSlide].uploadedImages];
      uploadedImages[0] = { image, description: uploadedImages[0].description };
      const updatedSlides = [...this.slides];
      updatedSlides[currentSlide] = {
        ...updatedSlides[currentSlide],
        uploadedImages,
      };

      this.setState({
        uploadedImage: image,
        slides: updatedSlides,
      });
    }
  };

  handleDescriptionChange = (event, index) => {
    const { uploadedImages } = this.state;
    uploadedImages[index].description = event.target.value;
    this.setState({ uploadedImages });
  };

  handleButtonClick = () => {
    // Redirigir al usuario a la ruta especificada
    const { route } = this.slides[this.slides.length - 1].button;
    window.location.href = route;
  };

  render() {
    const { currentSlide } = this.state;
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      ref: (slider) => (this.slider = slider),
    };

    return (
      <div className="carousel-container">
        <Slider {...settings}>
          {this.slides.map((slide, index) => (
            <div key={index}>
              <div className="carousel-question">
                <h5>{slide.question}</h5>
                <div className="question-content">
                  {slide.options ? (
                    slide.options.map((option, optionIndex) => (
                      <button
                        key={optionIndex}
                        className={`custom-button ${
                          slide.selectedOption === optionIndex ? 'active' : ''
                        }`}
                        onClick={() => this.handleOptionSelect(optionIndex)}
                      >
                        <img src={option.imageSrc} alt={option.value} className="iconos" />
                        {option.value}
                      </button>
                    ))
                  ) : (
                    <>
                      {slide.fields ? (
                        slide.fields.map((field, fieldIndex) => (
                          <div key={fieldIndex} className="field-container">
                            <label className="custom-label">{field.label}</label>
                            <input
                              type={field.inputType}
                              value={slide.inputValue} // Ajusta el valor correcto si es necesario
                              onChange={this.handleInputChange}
                              placeholder={field.label}
                              className="custom-input"
                            />
                          </div>
                        ))
                      ) : (
                        <>
                          {slide.inputType === 'file' ? (
                            <div className="file-input-container">
                              
                              <input type="file" onChange={this.handleImageUpload} className="custom-file-input" />
                            </div>
                          ) : (
                            <input
                              type={slide.inputType}
                              value={slide.inputValue}
                              onChange={this.handleInputChange}
                              placeholder={slide.question}
                            />
                          )}
                        </>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {currentSlide === this.slides.length - 1 && (
          <button onClick={this.handleButtonClick}>
            {this.slides[currentSlide].button.text}
          </button>
        )}
      </div>
    );
  }
}

export default RegisterInmue;