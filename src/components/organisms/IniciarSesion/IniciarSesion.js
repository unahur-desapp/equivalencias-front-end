import React from 'react';
import FormularioInicioSesion from '../../molecules/FormularioInicioSesion';
import Registro from '../../Registro';
import { SideRegistro } from './IniciarSesionStyled';
import { FormularioMain } from './IniciarSesionStyled';
import { Titulosh1 } from '../../atoms/Titulos';
import { BotonMUI } from '../../atoms/Boton/BotonMUI';
import { TarjetaLogin } from './IniciarSesionStyled';

const IniciarSesion = () => {
    const onClick = (e) => {
        return <Registro />;
    };

    return (
        <TarjetaLogin>
            <SideRegistro>
                <Titulosh1 centrar blanco tituloGrande>
                    Trámites de Equivalencias
                </Titulosh1>

                <BotonMUI variant="outlined" onClick={onClick}>
                    Registrarse
                </BotonMUI>
            </SideRegistro>

            <FormularioMain>
                <FormularioInicioSesion />
            </FormularioMain>
        </TarjetaLogin>
    );
};

export default IniciarSesion;
