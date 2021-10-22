import { Grid } from '@mui/material';
import {
    StandardInput,
    ContenedorInputs
} from './components/atoms/Input/InputMUI';
import { Titulos } from './components/atoms/Title/Titulos';
import React from 'react';
import { PaddingTwoTone } from '@mui/icons-material';

const CreateForm = () => {
    return (
        <Grid
            item
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            sm={12}
            sx={{
                height: '150px',
                bgcolor: '#FBFBFB',
                borderBottom: '1px solid #DADCE0',
                borderRadius: '10px',
                padding: '0px 60px'
            }}
        >
            <Grid
                item
                container
                direction="column"
                justifyContent="space-evenly"
                alignItems="flex-start"
            >
                <Titulos tituloLabel>
                    Datos Universidad Nacional de Hurlingham
                </Titulos>
                <StandardInput
                    required
                    size="normal"
                    label="Materia solicitada"
                    variant="standard"
                />
            </Grid>
        </Grid>
    );
};

export { CreateForm };
