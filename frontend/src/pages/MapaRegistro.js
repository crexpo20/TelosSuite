import React, { useContext } from 'react';
import { GoogleMap, useJsApiLoader, Marker} from '@react-google-maps/api';

//Declaramos el componente de la funcion mapa que recibe la latitud y longitud de la ubicación
const MapaRegistro = ({ lat, lng, updateMarker}) => {
    console.log(lat)
    console.log(lng)
    //inicializamos los estados de map y marker
    const [map, setMap] = React.useState(null)
    const [marker, setMarker] = React.useState([]);

    //Maneja el marker cuando hacemos click en el mapa
    const onMapClick = (e) => {
        setMarker(() => { 
           const markerData = {
            lat: e.latLng.lat(),
            lng: e.latLng.lng()
           }
           updateMarker(markerData)
           return  markerData
          }
        );
      };
    
      //El mapa se carga
    const onLoad = React.useCallback(function callback(map) {
        //Controlamos el zoom del mapa
        map.setZoom(12); 
        setMap(map);
      }, []);
    
    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    //Hook useJsApiLoader para cargar la API de Google Maps
    const { isLoaded } = useJsApiLoader({
        id:"297878562058-b1kq496r98fnk5ctcgtunjmgt5erbp6o.apps.googleusercontent.com",
        googleMapsApiKey: 'AIzaSyDNevJ_JORRAmI5u-wPZCtznZzHgSbuqrw',
    });

    //Imprime si la API de Google Maps está cargada
    console.log(isLoaded)
    //Definición de las coordenadas centrales del mapa
        const center = {
        lat: parseFloat(lat),
        lng: parseFloat(lng),
    };

    //Estilos del mapa
    const containerStyle = {
        width: '700px',
        height: '350px'
    };

  return  isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      
      center={center}
      onLoad={onLoad}
      onUnmount={onUnmount}
      onClick={onMapClick}
    >
    {/* Componente Marker que representa un marcador en el mapa. */}
    {
        <Marker 
          position={{ 
            lat: marker.lat,
            lng: marker.lng 
          }} />
    }

    </GoogleMap>) : null // Devuelve null si la API de Google Maps no está cargada.
};

export default MapaRegistro;
