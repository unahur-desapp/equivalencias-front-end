import { Grid } from '@mui/material';
import React from 'react';
import { StandardInput } from './components/atoms/Input/InputMUI';

const ExtrasUniOrigen = () => {
    return (
        <Grid
            item
            container
            xs={12}
            sx={{
                marginTop: '6px'
            }}
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
        >
            <Grid
                item
                container
                md={12}
                lg={5.8}
                direction="row"
                justifyContent="space-between"
                alignItems="flex-start"
            >
                <Grid item container xs={5.6}>
                    <StandardInput
                        required
                        size="normal"
                        label="Año aprobación"
                        variant="standard"
                        type="number"
                    />
                </Grid>

                <Grid item container xs={5.6}>
                    <StandardInput
                        required
                        size="normal"
                        label="Carga horaria total"
                        variant="standard"
                        type="number"
                    />
                </Grid>
            </Grid>
        </Grid>
    );
};

export { ExtrasUniOrigen };
