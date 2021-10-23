import { Grid } from '@mui/material';
import React from 'react';
import { StandardInput } from './components/atoms/Input/InputMUI';
import { Titulos } from './components/atoms/Title/Titulos';

const MateriaUniOrigen = () => {
    return (
        <Grid item container sx={{ margin: '20px 60px' }}>
            <Grid
                item
                container
                xs={6}
                direction="column"
                justifyContent="space-evenly"
                alignItems="flex-start"
            >
                <Titulos tituloLabel component="h2">
                    Universidad Nacional de Hurlingham
                </Titulos>
            </Grid>

            <Grid
                item
                container
                xs={12}
                direction="row"
                justifyContent="space-between"
                alignItems="flex-start"
            >
                <Grid item container xs={12} sm={6}>
                    <StandardInput
                        required
                        size="normal"
                        label="Materia solicitada UNAHUR"
                        variant="standard"
                    />
                </Grid>

                <Grid item container xs={12} sm={6}>
                    <StandardInput
                        required
                        size="normal"
                        label="Materia solicitada UNAHUR"
                        variant="standard"
                    />
                </Grid>
            </Grid>
        </Grid>
    );
};

export { MateriaUniOrigen };
