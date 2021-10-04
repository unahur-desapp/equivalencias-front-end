import React from 'react';
import { TituloBienvenida, Titulosh2 } from '../atoms/Titulos';
import Formulario from '../../elements/Formulario';
import {
    OlvidastePassword,
    OlvidastePasswordLink
} from '../atoms/OlvidastePassword';
import LineaSeparacion from '../atoms/LineaSeparacion';
import { InputMUI, ContenedorInputs } from '../atoms/InputMUI';
import { BotonMUI, ContenedorBoton } from '../atoms/Boton/BotonMUI';

const FormularioInicioSesion = () => {
    const onSubmit = (e) => {};

    return (
        <>
            <TituloBienvenida>
                <Titulosh2 tituloh2Grande>¡Bienvenido/a!</Titulosh2>
                <Titulosh2 tituloh2Chico>Iniciar sesión</Titulosh2>
            </TituloBienvenida>

            <Formulario>
                <form
                    action=""
                    onSubmit={onSubmit}
                    style={{ height: '100%', textAlign: 'center' }}
                >
                    <div>
                        <ContenedorInputs>
                            <InputMUI
                                type="text"
                                id="outlined-basic"
                                label="DNI"
                                variant="outlined"
                            />
                        </ContenedorInputs>

                        <ContenedorInputs>
                            <InputMUI
                                type="password"
                                id="outlined-basic"
                                label="Contraseña"
                                variant="outlined"
                                margin="normal"
                            />
                        </ContenedorInputs>
                    </div>

                    <OlvidastePassword>
                        <OlvidastePasswordLink href="https://www.google.com.ar">
                            ¿Olvidaste tu contraseña?
                        </OlvidastePasswordLink>
                    </OlvidastePassword>

                    <LineaSeparacion></LineaSeparacion>

                    <ContenedorBoton>
                        <BotonMUI variant="contained" disableElevation>
                            Ingresar
                        </BotonMUI>
                    </ContenedorBoton>
                </form>
            </Formulario>
        </>
    );
};

export default FormularioInicioSesion;
