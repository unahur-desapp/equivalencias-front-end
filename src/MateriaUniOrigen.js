import { Grid } from '@mui/material';
import React from 'react';
import { StandardInput } from './components/atoms/Input/InputMUI';

const MateriaUniOrigen = () => {
    return (
        <Grid
            item
            container
            xs={12}
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
        >
            <Grid
                item
                container
                md={12}
                lg={5.8}
                sx={{
                    marginTop: '6px'
                }}
            >
                <StandardInput
                    required
                    size="normal"
                    label="Materia aprobada"
                    variant="standard"
                />
            </Grid>

            <Grid
                item
                container
                md={12}
                lg={5.8}
                sx={{
                    marginTop: '6px'
                }}
            >
                <StandardInput
                    required
                    size="normal"
                    label="Universidad de Origen"
                    variant="standard"
                />
            </Grid>
        </Grid>
    );
};

export { MateriaUniOrigen };
