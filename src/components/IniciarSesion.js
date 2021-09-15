import React from 'react';
import FormularioInicioSesion from './FormularioInicioSesion';
import Registro from './Registro';

const IniciarSesion = () => {
  const onClick = (e) => {
    return <Registro />;
  };

  return (
    <div className="tarjeta-inicio-sesion">
      <div className="sidebar-registro">
        <div className="centrar-sidebar-registro">
          <h1 className="titulo-principal">Trámites de Equivalencias</h1>
          <button onClick={onClick}>Registrarse</button>
        </div>
      </div>

      <FormularioInicioSesion />
    </div>
  );
};

export default IniciarSesion;
