import React from 'react';
import './Home.css'; // Importamos el archivo CSS para este componente

function HomePage() {
  return (
    <div className="homepage-container">
      <header className="homepage-header">
        <h1>¡Bienvenido a Mi Aplicación React!</h1>
        <p>Tu punto de partida para una experiencia frontend increíble.</p>
      </header>
      <section className="homepage-content">
        <h2>Explora lo que podemos hacer</h2>
        <p>
          Aquí podrás añadir enlaces, tarjetas de productos, información
          relevante o cualquier contenido que necesites mostrar en tu
          página de inicio.
        </p>
        <button className="call-to-action-button">Empezar Ahora</button>
      </section>
      <footer className="homepage-footer">
        <p>&copy; 2025 Mi Aplicación React. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default HomePage;