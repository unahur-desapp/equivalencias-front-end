import React from 'react';
import FormularioInicioSesion from './FormularioInicioSesion';
import Registro from './Registro';
import SideRegistro from '../elements/SideRegistro';
import TarjetaLogin from '../elements/TarjetaLogin';
import FormularioMain from '.././elements/FormularioMain';
import Titulos from '../elements/Titulos';
import Boton from '../elements/Boton';

const IniciarSesion = () => {
  const onClick = (e) => {
    return <Registro />;
  };

  return (
    <TarjetaLogin>
      <SideRegistro>
        <Titulos centrar blanco>
          Trámites de Equivalencias
        </Titulos>
        <Boton border hover onClick={onClick}>
          Registrarse
        </Boton>
      </SideRegistro>

      <FormularioMain>
        <FormularioInicioSesion />
      </FormularioMain>
    </TarjetaLogin>
  );
};

export default IniciarSesion;
