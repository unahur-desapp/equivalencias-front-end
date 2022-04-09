import { Grid, TextField } from '@mui/material';
import {
    StandardInput,
    AutocompleteInput
} from './components/atoms/Input/InputMUI';
import { Titulos } from './components/atoms/Title/Titulos';
import React, { useState } from 'react';
import { GridTop } from './GridTop';
import { FormUniOrigen } from './FormUniOrigen';
import { BotonMUI } from './components/atoms/Button/BotonMUI';
import { ExtrasUniOrigen } from './ExtrasUniOrigen';

const CreateForm = () => {
    const [materia, setMateria] = useState([]);

    function addMateria() {
        setMateria([...materia, <FormUniOrigen key={0} />]);
    }

    return (
        <GridTop
            item
            container
            blanco
            xs={11.5}
            md={7}
            marginTop={{
                xs: '30px'
            }}
            sx={{
                height: 'auto'
            }}
        >
            <Grid
                item
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                sm={12}
                padding={{
                    xs: '20px 30px',
                    sm: '20px 60px'
                }}
                sx={{
                    height: 'auto',
                    borderRadius: '10px 10px 0px 0px'
                }}
            >
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
                        lg={5.8}
                        sx={{
                            marginTop: '6px'
                        }}
                    >
                        <Titulos tituloLabel component="h2">
                            Datos Universidad Nacional de Hurlingham
                        </Titulos>
                    </Grid>
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
                        lg={5.8}
                        sx={{
                            marginTop: '6px'
                        }}
                    >
                        <StandardInput
                            required
                            size="small"
                            label="Materia solicitada UNAHUR"
                            variant="outlined"
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
                        <AutocompleteInput
                            required
                            size="small"
                            label="Carrera UNAHUR"
                            variant="outlined"
                            disablePortal
                            options={top100Films}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Carreras UNAHUR"
                                />
                            )}
                        />
                    </Grid>
                </Grid>
            </Grid>

            <FormUniOrigen />

            {materia.map((item, i = 1) => (
                <span key={i}> {item} </span>
            ))}

            <Grid
                item
                container
                xs={12}
                sx={{
                    borderTop: '1px solid #DADCE0',
                    marginTop: '20px ',
                    padding: '0px 40px'
                }}
            >
                <BotonMUI
                    buttonContainedAddMateria
                    variant="outlined"
                    sx={{ margin: '10px 0px' }}
                    onClick={addMateria}
                >
                    Agregar materia
                </BotonMUI>
            </Grid>
        </GridTop>
    );
};

const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 }
];

export { CreateForm };
