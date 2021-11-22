import { Grid } from '@mui/material';
import React from 'react';
import { Titulos } from './components/atoms/Title/Titulos';

const TituloUniOrigen = () => {
    return (
        <Grid
            item
            container
            xs={12}
            direction="column"
            justifyContent="space-evenly"
            alignItems="flex-start"
        >
            <Titulos tituloLabel component="h2">
                Universidad Origen
            </Titulos>
        </Grid>
    );
};

export { TituloUniOrigen };
