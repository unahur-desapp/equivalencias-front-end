import React from 'react';
import Boton from '../elements/Boton';
import Titulo from '../elements/TitulosInicioSesion';
import ForgotPass from '../elements/ForgotPass';

const FormularioInicioSesion = () => {
  const onSubmit = (e) => {};

  return (
    <div className="main-inicio-sesion">
      <div className="titulo-bienvenida">
        <Titulo>¡Bienvenido/a!</Titulo>
        <Titulo inicio>Iniciar sesión</Titulo>
      </div>

      <div className="formulario-inicio-sesion">
        <form action="" onSubmit={onSubmit}>
          <div>
            <div className="input-inicio-sesion-email">
              <input type="text" placeholder="Email" />
            </div>
            <div className="input-inicio-sesion-password">
              <input type="password" placeholder="Contraseña" />
            </div>
          </div>

          <div className="olvidaste-password">
            <ForgotPass>¿Olvidaste tu contraseña?</ForgotPass>
          </div>

          <div>
            <Boton largo type="submit">
              Ingresar
            </Boton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormularioInicioSesion;
