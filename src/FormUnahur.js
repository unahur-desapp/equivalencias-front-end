import React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import {
    StandardInput,
    AutocompleteInput
} from './components/atoms/Input/InputMUI';
import { Titulos } from './components/atoms/Title/Titulos';

const FormUnahur = ({ formValue, carreras, handleChange }) => {
    return (
        <React.Fragment>
            <Grid
                item
                container
                direction="column"
                alignItems="flex-start"
                md={12}
                lg={5.8}
                sx={{
                    marginTop: '6px'
                }}
            >
                <Titulos titulolabel component="h2">
                    Datos Universidad Nacional de Hurlingham
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
                <Grid
                    item
                    container
                    direction="column"
                    alignItems="flex-start"
                    md={12}
                    lg={6}
                    marginTop={{
                        lg: '30px'
                    }}
                >
                    Seleccione la carrera UNAHUR para la que solicitará
                    equivalencias
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
                    <AutocompleteInput
                        size="small"
                        variant="outlined"
                        onSelect={handleChange}
                        disablePortal
                        options={carreras}
                        renderInput={(params) => (
                            <TextField
                                required
                                {...params}
                                label="Carreras UNAHUR"
                                name="carreraUnahur"
                                value={formValue.carreraUnahur || ''}
                            />
                        )}
                    />
                </Grid>
                <Grid md={12} marginTop="30px">
                    <Titulos titulolabel component="h2">
                        Materias solicitadas
                    </Titulos>
                </Grid>
                <Grid
                    item
                    container
                    direction="column"
                    alignItems="flex-start"
                    // md={6}
                    lg={5.8}
                    sx={{
                        marginTop: '6px'
                    }}
                >
                    <StandardInput
                        required
                        name="materiaSolicitada"
                        size="small"
                        label="Materia solicitada UNAHUR"
                        variant="outlined"
                        value={formValue.materiaSolicitada || ''}
                        onChange={handleChange}
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default FormUnahur;
