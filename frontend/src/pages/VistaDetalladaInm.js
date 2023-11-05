import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { sitios } from '../sitios';
import { inmuebles } from '../components/inmuebles';
import axios from "axios";
class VistaDetalladaInm extends Component {

  state = {
    currentImageIndex: 0,
    imageCarouselOpen: false,
    images: [
      'https://picsum.photos/280/280',
      'https://picsum.photos/280/280',
    ],
    imageDescriptions: [
      'Descripción de la imagen 1',
      'Descripción de la imagen 2',
    ],
  };
  openImageCarousel = () => {
    this.setState({ imageCarouselOpen: true });
  };

  closeImageCarousel = () => {
    this.setState({ imageCarouselOpen: false });
  };

  showNextImage = () => {
    this.setState((prevState) => ({
      currentImageIndex: (prevState.currentImageIndex + 1) % prevState.images.length,
    }));
  };

  showPreviousImage = () => {
    this.setState((prevState) => ({
      currentImageIndex:
        (prevState.currentImageIndex - 1 + prevState.images.length) % prevState.images.length,
    }));
  };

 
  render() {
    
    return (
      <>
        <body>
          <h1 className='tituloVista'>INKA PACHA Cabaña con dos camas y baño privado</h1>
          <div className='GridImagenes'>
            <div className='Columna1'>
                <img src="https://picsum.photos/280/280" alt='Imagen 1' />
            </div>
            <div className='Columna2'>
                <img src="https://picsum.photos/280/280" alt='Imagen 2-1' />
                <img src="https://picsum.photos/280/280" alt='Imagen 2-2' />
            </div>
            <div className='Columna3'>
                <img src="https://picsum.photos/280/280" alt='Imagen 3-1' />
                <div style={{ position: 'relative' }}>
                <img src="https://picsum.photos/280/280" alt='Imagen 3-2' />
                <button onClick={this.openImageCarousel} className="overlay-button">Ver carrusel</button>
              </div>
            </div>
        </div>
        <div className='GridInformacion'>
            <div className='Colum1'>
                <h className='title1'>Casa de huéspedes - Anfitrión: Martin</h>
                <h className='title2'>3 huéspedes - 1 habitación - 2 camas - 1 baño privado</h>
                <br></br>
                <div className="divisor-plomo"></div>
                <br></br>
                <div className='informacionAdicional'>
                <h className='title3'>Relájate en esta escapada única y tranquila. Somos una casa de Campo de la comunidad Yumani. Esta habitacion viene con baño privado y una vista increible al lago. Nuestro estilo es de origen Aymara, con objetos y pinturas de inspiración indígena ancestral. Disponemos de Servicio de Restaurante. Atendido por Martín y Justina, quienes te darán las mejores indicaciones para explorar la Isla sagrada.</h>
                </div>
            </div>
            <div className='Colum2'>

            </div>
        </div>
        </body>
        <Outlet />
        {this.state.imageCarouselOpen && (
          <div className="image-carousel">
            <img src={this.state.images[this.state.currentImageIndex]} alt='Imagen Carrusel' />
            <p className="image-description">
              {this.state.imageDescriptions[this.state.currentImageIndex]}
            </p>
            <button onClick={this.showPreviousImage}>Anterior</button>
            <button onClick={this.showNextImage}>Siguiente</button>
            <button onClick={this.closeImageCarousel}>Cerrar Carrusel</button>
          </div>
        )}
      </>
    );
  }
}

export default VistaDetalladaInm;