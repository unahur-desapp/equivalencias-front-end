import React from 'react';
import FormularioInicioSesion from '../../molecules/FormularioInicioSesion';
import { Register } from '../../molecules/SideRegistro';
import {
    FormularioMain,
    TarjetaLogin,
    FatherContainer
} from './IniciarSesionStyled';

const IniciarSesion = () => {
    return (
        <FatherContainer>
            <TarjetaLogin>
                <Register />

                <FormularioMain>
                    <FormularioInicioSesion />
                </FormularioMain>
            </TarjetaLogin>
        </FatherContainer>
    );
};

export default IniciarSesion;
