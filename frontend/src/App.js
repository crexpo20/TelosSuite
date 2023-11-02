import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { default as AppRouter } from './router/AppRouter';

function App() {
  // Estado local para almacenar los datos del localStorage
  const [localStorageData, setLocalStorageData] = useState({
    destino: "CualquierLUgar",
    huespedes: 1,
    niños: 0,
    mascotas: 0,
    tipo: "cualquiera",
    precioMinimo: 50,
    precioMaximo: 200,
    fechaInicio: "vacio",
    fechaFin: "alalal",
    camas: 1,
    servicios: "ninguno",
    calificacion: 0,
  });

  // Función para establecer valores iniciales en el localStorage si no existen
  const setInitialLocalStorageValues = () => {
    // Verifica si los valores ya existen en el localStorage
    const destino = localStorage.getItem('destino');
    const huespedes = localStorage.getItem('huespedes');
    const niños = localStorage.getItem('niños');
    const mascotas = localStorage.getItem('mascotas');
    const tipo = localStorage.getItem('tipo');
    const precioMinimo = localStorage.getItem('precioMinimo');
    const precioMaximo = localStorage.getItem('precioMaximo');
    const fechaInicio = localStorage.getItem('fechaInicio');
    const fechaFin = localStorage.getItem('fechaFin');
    const extra = localStorage.getItem('extra');

    // Si algún valor no existe en el localStorage, configura los valores iniciales
    if (destino === null) {
      localStorage.setItem('destino', 'CualquierLUgar');
    }
    if (huespedes === null) {
      localStorage.setItem('huespedes', 1);
    }
    if (niños === null) {
      localStorage.setItem('niños', 0);
    }
    if (mascotas === null) {
      localStorage.setItem('mascotas', 0);
    }
    if (tipo === null) {
      localStorage.setItem('tipo', 'cualquiera');
    }
    if (precioMinimo === null) {
      localStorage.setItem('precioMinimo', 50);
    }
    if (precioMaximo === null) {
      localStorage.setItem('precioMaximo', 200);
    }
    if (fechaInicio === null) {
      localStorage.setItem('fechaInicio', 'vacio');
    }
    if (fechaFin === null) {
      localStorage.setItem('fechaFin', 'alalal');
    }
    if (extra === null) {
      localStorage.setItem('extra', 'valorPorDefecto'); // Aquí puedes configurar el valor por defecto para "extra"
    }
  };

  // Restablecer valores del localStorage al cerrar la página
  const handleBeforeUnload = () => {
    setInitialLocalStorageValues();
  };

  // Agregar un listener de eventos beforeunload
  useEffect(() => {
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  // Copiar los datos del localStorage al estado local cuando se carga la aplicación
  useEffect(() => {
    setInitialLocalStorageValues();

    const storedData = {
      destino: localStorage.getItem('destino') || "CualquierLUgar",
      huespedes: parseInt(localStorage.getItem('huespedes')) || 1,
      niños: parseInt(localStorage.getItem('niños')) || 0,
      mascotas: parseInt(localStorage.getItem('mascotas')) || 0,
      tipo: localStorage.getItem('tipo') || "cualquiera",
      precioMinimo: parseInt(localStorage.getItem('precioMinimo')) || 50,
      precioMaximo: parseInt(localStorage.getItem('precioMaximo')) || 200,
      fechaInicio: localStorage.getItem('fechaInicio') || "vacio",
      fechaFin: localStorage.getItem('fechaFin') || "alalal",
      camas: parseInt(localStorage.getItem('camas')) || 1,
      servicios: localStorage.getItem('servicios') || "ninguno",
      calificacion: parseFloat(localStorage.getItem('calificacion')) || 0,
    };
    console.log("Valores en el localStorage:", storedData);

    setLocalStorageData(storedData);
  }, []);

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
