import React from 'react';
import { Grid } from '@mui/material';
import { BotonMUI } from './components/atoms/Button/BotonMUI';

const OuterFormButtons = () => {
    return (
        <Grid
            item
            container
            xs={11.5}
            md={7}
            marginTop={{
                xs: '20px'
            }}
            sx={{
                padding: '20px 60px'
            }}
        >
            <Grid
                item
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                xs={6}
            >
                {/* <BotonMUI buttonContainedAddEq>
                    Agregar equivalencia
                </BotonMUI> */}
            </Grid>

            <Grid
                item
                container
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
                xs={6}
            >
                <BotonMUI
                    buttonContainedCancel
                >
                    Cancelar
                </BotonMUI>

                <BotonMUI
                    buttonContainedSmall
                    sx={{
                        marginLeft: '12px'
                    }}
                >
                    Enviar
                </BotonMUI>
            </Grid>
        </Grid>
    )
}

export {OuterFormButtons}