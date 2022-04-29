import { Grid } from '@mui/material';
import React from 'react';
import { StandardInput } from './components/atoms/Input/InputMUI';
import { nanoid } from 'nanoid';

const MateriaUniOrigen = ({ formValue, handleChangeArray, formValueArray, key2 }) => {
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
                    name="materiaAprobada"
                    size="small"
                    label="Materia aprobada"
                    variant="outlined"
                    value={formValueArray.materiaAprobada}
                    onChange={(event) => handleChangeArray(event, key2)}
                    //(event) => handleChangeArray(event)
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
                    key={formValueArray.key}
                    required
                    name="universidadOrigen"
                    size="small"
                    label="Universidad de Origen"
                    variant="outlined"
                    value={formValueArray.universidadOrigen}
                    onChange={(event) => handleChangeArray(event, key2)}
                />
            </Grid>
        </Grid>
    );
};

export { MateriaUniOrigen };
