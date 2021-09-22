import React from 'react';
import Boton from '../elements/Boton';
//import Titulo from '../elements/Titulos';
import ForgotPass from '../elements/ForgotPass';
import TituloBienvenida from '../elements/TituloBienvenida';
import Formulario from '../elements/Formulario';
import ContenedorInputs from '../elements/ContenedorInputs';
import Input from '../elements/Input';

const FormularioInicioSesion = () => {
  const onSubmit = (e) => {};

  return (
    <>
      <TituloBienvenida>
        <h2 style={{ fontSize: 44, color: '#009673', marginBottom: 50 }}>
          ¡Bienvenido/a!
        </h2>
        <h3 style={{ fontSize: 30, color: '#009673' }}>Iniciar sesión</h3>
      </TituloBienvenida>

      <Formulario>
        <form action="" onSubmit={onSubmit}>
          <div>
            {/*<div className="input-inicio-sesion-email">
							<input type="text" placeholder="DNI" />
						</div>
						<div className="input-inicio-sesion-password">
							<input type="password" placeholder="Contraseña" />
						</div>*/}
            <ContenedorInputs>
              <Input type="text" placeholder="DNI" className="" />
            </ContenedorInputs>

            <ContenedorInputs>
              <Input type="password" placeholder="Contraseña" />
            </ContenedorInputs>
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
      </Formulario>
    </>
  );
};

export default FormularioInicioSesion;
