import React from 'react';
import FormularioInicioSesion from '../../molecules/FormularioInicioSesion';
import { Register } from '../../molecules/SideRegistro';
import { FormularioMain } from './IniciarSesionStyled';
import { TarjetaLogin } from './IniciarSesionStyled';

const IniciarSesion = () => {
    return (
        <TarjetaLogin>
            <Register />

            <FormularioMain>
                <FormularioInicioSesion />
            </FormularioMain>
        </TarjetaLogin>
    );
};

export default IniciarSesion;
