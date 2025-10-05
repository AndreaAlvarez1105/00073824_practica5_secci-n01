import React from 'react';   
import './EjercicioFinal.css';

const Perfiles = ({ nombre, imagen, profesion, logros, descubrimiento }) => {
  return (
    <div className="perfiles-ficha">
      <h2 className="nombre-perfil">{nombre}</h2>
      
      <img 
        src={imagen} 
        alt={nombre}
        className="perfil-imagen"
      />
      
      <ul className="info-perfil">
        <li>
          <strong>Profesión:</strong> {profesion}
        </li>
        <li>
          <strong>Premios:</strong> {logros}
        </li>
        <li>
          <strong>Descubrió:</strong> {descubrimiento}
        </li>
      </ul>
    </div>
  );
};

export default function mostrarFichasPerfiles() {
  const perfil = [
    {
      id: 1,
      nombre: 'Maria Skłodowska-Curie',
      imagen: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Marie_Curie_c._1920s.jpg',
      profesion: 'Física y química',
      logros: '4 (Premio Nobel de Física, Premio Nobel de Química, Medalla Davy, Medalla Matteucci)',
      descubrimiento: 'Polonio (elemento químico)'
    },
    {
      id: 2,
      nombre: 'Katsuko Saruhashi',
      imagen: 'https://upload.wikimedia.org/wikipedia/en/0/08/Katsuko_Saruhashi.jpg',
      profesion: 'Geoquímica',
      logros: '2 (Premio Miyake de geoquímica, Premio Tanaka)',
      descubrimiento: 'Un método para medir el dióxido de carbono en el agua de mar'
    }
  ];

  return (
    <div className="ejercicio-container">
      <h1 className="ejercicio-titulo">Científicas Notables</h1>
      
      {perfil.map(perfil => (
        <Perfiles
          key={perfil.id}
          nombre={perfil.nombre}
          imagen={perfil.imagen}
          profesion={perfil.profesion}
          logros={perfil.logros}
          descubrimiento={perfil.descubrimiento}
        />
      ))}
    </div>
  );
}