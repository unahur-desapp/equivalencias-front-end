import React from 'react';
import { FormularioInicioSesion } from '../../molecules/FormularioInicioSesion';
import { Register } from '../../molecules/SideRegistro';
import { TarjetaLogin, FatherContainer } from './IniciarSesionStyled';

const IniciarSesion = () => {
    return (
        <FatherContainer>
            <TarjetaLogin>
                <Register />

                <FormularioInicioSesion />
            </TarjetaLogin>
        </FatherContainer>
    );
};

export default IniciarSesion;
