import React, { useEffect } from 'react';

const ScrollReverse = () => {
  // Almacena la posición de desplazamiento en sessionStorage
  const storeScrollPosition = () => {
    window.sessionStorage.setItem('scrollPosition', window.scrollY.toString());
  };

  // Restaura la posición de desplazamiento al cargar el componente
  useEffect(() => {
    // Obtén la posición almacenada en sessionStorage
    const storedPosition = window.sessionStorage.getItem('scrollPosition');

    // Si hay una posición almacenada, desplázate a esa posición
    if (storedPosition) {
      window.scrollTo(0, parseInt(storedPosition, 10));
    }

    // Agrega un event listener para actualizar la posición de desplazamiento
    const handleScroll = () => {
      storeScrollPosition();
    };
    window.addEventListener('scroll', handleScroll);

    // Elimina el event listener al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Se ejecuta solo una vez al cargar el componente

  return (
    <div>
      {/* Contenido de tu componente */}
    </div>
  );
};

export default ScrollReverse;

