import React from 'react';

const FormularioInicioSesion = () => {
  const onSubmit = (e) => {};

  return (
    <div className="main-inicio-sesion">
      <div className="titulo-bienvenida">
        <h2>¡Bienvenido/a!</h2>
        <h3>Iniciar sesión</h3>
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
            <p>¿Olvidaste tu contraseña?</p>
          </div>

          <div>
            <button type="submit">Ingresar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormularioInicioSesion;
