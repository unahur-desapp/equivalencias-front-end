import React from 'react';
import { TituloBienvenida, Titulos } from '../atoms/Title/Titulos';
import {
    OlvidastePassword,
    OlvidastePasswordLink
} from '../atoms/OlvidastePassword';
import LineaSeparacion from '../atoms/LineaSeparacion';
import { InputMUI, ContenedorInputs } from '../atoms/Input/InputMUI';
import { BotonMUI } from '../atoms/Button/BotonMUI';
import { Grid, styled } from '@mui/material';
import { Formulario } from '../atoms/Formulario/Formulario';

const FormularioInicioSesion = () => {
    const onSubmit = (e) => {};

    return (
        <FormularioMain>
            <TituloBienvenida>
                <Titulos tituloGrande tituloMarginBotton component="h2">
                    ¡Bienvenido/a!
                </Titulos>
                <Titulos tituloChico tituloLight component="h2">
                    Iniciar sesión
                </Titulos>
            </TituloBienvenida>

            <Formulario sx={{ marginTop: '40px' }}>
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
                        <BotonMUI
                            variant="contained"
                            buttonContained
                            disableElevation
                        >
                            Ingresar
                        </BotonMUI>
                    </Grid>
                </form>
            </Formulario>
        </FormularioMain>
    );
};

const FormularioMain = styled(Grid)`
    width: 65%;
    max-width: 65%;
    height: 100%;
    padding: 50px 0px;
    border-radius: 20px;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export { FormularioMain, FormularioInicioSesion };
