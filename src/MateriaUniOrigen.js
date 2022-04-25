import { Grid } from '@mui/material';
import React from 'react';
import { StandardInput } from './components/atoms/Input/InputMUI';
import { nanoid } from 'nanoid';

let materiaAprobadaVar = nanoid();
let universidadOrigenVar = nanoid();

const MateriaUniOrigen = ({ formValue, handleChange }) => {
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
                    key={materiaAprobadaVar}
                    required
                    name="materiaAprobada"
                    size="small"
                    label="Materia aprobada"
                    variant="outlined"
                    value={formValue.materiaAprobadaVar}
                    onChange={handleChange}
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
                    key={universidadOrigenVar}
                    required
                    name="universidadOrigen"
                    size="small"
                    label="Universidad de Origen"
                    variant="outlined"
                    value={formValue.universidadOrigenVar}
                    onChange={handleChange}
                />
            </Grid>
        </Grid>
    );
};

export { MateriaUniOrigen };
