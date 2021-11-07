import { Grid } from '@mui/material';
import React from 'react';
import { ExtrasUniOrigen } from './ExtrasUniOrigen';
import { MateriaUniOrigen } from './MateriaUniOrigen';
import { TituloUniOrigen } from './TituloUniOrigen';

const FormUniOrigen = () => {
    return (
        <Grid
            item
            container
            margin={{
                xs: '20px 30px',
                md: '20px 60px'
            }}
        >
            <TituloUniOrigen />

            <MateriaUniOrigen />

            <ExtrasUniOrigen />
        </Grid>
    );
};

export { FormUniOrigen };
