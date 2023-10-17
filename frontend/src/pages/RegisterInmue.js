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
class RegisterInmue extends Component {
  constructor(props) {
    super(props);

    // Define las preguntas y opciones para cada parte del carrusel
    this.slides = [
      {
        question: '¿Cuál de estas opciones describe mejor tu espacio?',
        options: [
          { value: 'Casa', imageSrc: casaImage },
          { value: 'Habitacion', imageSrc: habitacionImage },
          { value: 'Departamento', imageSrc: departamentoImage },
          { value: 'Cabaña', imageSrc: cabanaImage },
        ],
        selectedOption: null,
      },
      {
        question: '¿Qué tipo de alojamiento ofreces?',
        options: [
          { value: 'Privado', imageSrc: privadoImage },
          { value: 'Compartido', imageSrc: 'compartido.png' },
        ],
        selectedOption: null,
      },
      {
        question: '¿Qué tipo de servicio ofreces?',
        options: [
          { value: 'Wifi', imageSrc: wifiImage },
          { value: 'Parrillero', imageSrc: 'parrillero.png' },
          { value: 'Piscina', imageSrc: 'piscina.png' },
          { value: 'Garaje', imageSrc: 'garaje.png' },
        ],
        selectedOption: null,
      },
      {
        question: '¿Qué electrodomesticos ofreces?',
        options: [
          { value: 'TV', imageSrc: './tv.png' },
          { value: 'Lavadora', imageSrc: 'lavadora.png' },
        ],
        selectedOption: null,
      },
      {
        question: 'Ingrese la ubicación exacta ',
        inputType: 'text', // Campo de entrada de texto
        inputValue: '', // Valor inicial del campo de entrada
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
        inputValue: '', 
      },
      {
        question: 'Es importante que los huéspedes se sientan seguros, selecciona las especificaciones de seguridad con las que cuente tu espacio',
        options: [
          { value: 'Camara de Seguridad', imageSrc: './camara.png' },
          { value: 'Llaves Electronicas', imageSrc: 'llaves.png' },
          { value: 'Vigilancia 24 horas', imageSrc: 'vigilancia.png' },
        ],
        selectedOption: null,
      },
      {
        question: 'Ingrese el precio',
        inputType: 'number', // Tipo de entrada para ingresar el precio (number para números)
        inputValue: '',
      },
      {
        question: 'Creemos que los métodos de pago deben ser simples pero confiables, ingresa una imagen para que los huéspedes puedan verla',
        inputType: 'file', // Campo de entrada de tipo archivo para la imagen
        uploadedImage: null, // Imagen seleccionada
      },
      {
        question: '¡Eso es todo! Ahora espera a que lleguen las solicitudes...',
        linkText: 'Ir al home', // Texto del botón para el enlace
        linkUrl: 'https://tu-enlace.com',
      },
    ];

    this.state = {
      currentSlide: 0,
    };
  }


  
  handleOptionSelect = (optionIndex) => {
    const { currentSlide } = this.state;
    this.slides[currentSlide].selectedOption = optionIndex;

    if (currentSlide < this.slides.length - 1) {
      this.slider.slickNext();
      this.setState({ currentSlide: currentSlide + 1 });
    }
  };

  handleInputChange = (event) => {
    const { currentSlide } = this.state;
    const inputValue = event.target.value;

    // Actualiza el valor del campo de entrada
    this.slides[currentSlide].inputValue = inputValue;
  };
  handleImageUpload = (event) => {
    const image = event.target.files[0];
    this.setState({ uploadedImage: image });
  };
  handleDescriptionChange = (event, index) => {
    const { uploadedImages } = this.state;
    uploadedImages[index].description = event.target.value;
    this.setState({ uploadedImages });
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
              <h5>{slide.question}</h5>
              <div className="carousel-button-container">
                {slide.options ? (
                  slide.options.map((option, optionIndex) => (
                    <button
                      key={optionIndex}
                      className={`custom-button ${
                        slide.selectedOption === optionIndex ? 'active' : ''
                      }`}
                      onClick={() => this.handleOptionSelect(optionIndex)}
                    >
                     <img src={option.imageSrc} alt={option.value} className="wifi-image"   />
                      {option.value}
                    </button>
                  ))
                ) : (
                  <>
                    <input
                      type={slide.inputType}
                      value={slide.inputValue}
                      onChange={this.handleInputChange}
                      placeholder={slide.question}
                    />
                    {slide.inputType === 'file' && (
                      <input
                        type="file"
                        accept="image/*" // Asegura que solo se permitan archivos de imagen
                        onChange={this.handleImageUpload}
                      />
                    )}
                  </>
                )}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default RegisterInmue;