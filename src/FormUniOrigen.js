import { Grid } from '@mui/material';
import React from 'react';
import { DatosMateriaUniOrigen } from './DatosMateriaUniOrigen';
import { TituloUniOrigen } from './TituloUniOrigen';
import { addMateria, ExtrasUniOrigen } from './ExtrasUniOrigen';

const FormUniOrigen = () => {
    return (
        <Grid
            item
            container
            margin={{
                xs: '20px 30px',
                sm: '20px 60px'
            }}
        >
            <TituloUniOrigen />

            <DatosMateriaUniOrigen />

            <ExtrasUniOrigen/>
        </Grid>
    );
};

export { FormUniOrigen };
