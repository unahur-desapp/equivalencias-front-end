import React from 'react';
import { TituloBienvenida, Titulosh2 } from '../atoms/Title/Titulos';
import {
    OlvidastePassword,
    OlvidastePasswordLink
} from '../atoms/OlvidastePassword';
import LineaSeparacion from '../atoms/LineaSeparacion';
import { InputMUI, ContenedorInputs } from '../atoms/Input/InputMUI';
import { BotonMUI } from '../atoms/Button/BotonMUI';
import styled from 'styled-components';
import { Grid } from '@mui/material';

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

                    <Grid>
                        <BotonMUI variant="contained" disableElevation>
                            Ingresar
                        </BotonMUI>
                    </Grid>
                </form>
            </Formulario>
        </>
    );
};

const Formulario = styled.div`
    width: 100%;
    max-width: 100%;
    height: 100%;
    margin-top: 40px;
`;

export default FormularioInicioSesion;
