import React, { useEffect, useState } from 'react';
import {
    Box,
    FormControl,
    Grid,
    InputAdornment,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Button
} from '@mui/material';
import {
    StandardInput,
    AutocompleteInput
} from './atoms/Input/InputMUI';
import { GridTop } from '../GridTop';
import { Titulos } from './atoms/Title/Titulos';
import { HeaderSuperUsuario } from './HeaderSuperUsuario';
import { getCarreras, createCarrera } from '../services/carrera_service';

const PageCRUDCarreras = () => {
    const [formValue, setformValue] = useState({
        nombre_carrera: '',
        nombre_instituto: ''
    });

    const [carreras, setCarreras] = useState([]);

    useEffect(() => {
        const fetchCarreras = async () => {
            const carreras = await getCarreras();
            setCarreras(carreras);
        };
        fetchCarreras();
    }, []);

    const handleChange = (event) => {
        try {
            setformValue((formValue) => ({
                ...formValue,
                [event.target.name]: event.target.value
            }));
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let objCarrera = {
            nombre_carrera: formValue.nombre_carrera,
            nombre_instituto: formValue.nombre_instituto
        };
        console.log(objCarrera);
        /*
        createCarrera(objCarrera).then((rpta) => {
            console.log(rpta);
            setCarreras('');
        }); */
    };

    return (
        <Grid container>
            <Grid item container xs={12}>
                <HeaderSuperUsuario />
            </Grid>

            <Grid
                item
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{ padding: '40px 0px' }}
            >
                <GridTop
                    item
                    container
                    xs={11.5}
                    md={7}
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Grid item xs={12}>
                        <Titulos component="h2" titulogrande>
                            CRUD Carreras
                        </Titulos>
                    </Grid>
                </GridTop>

            
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
                        name="nombre_carrera"
                        size="small"
                        label="Nombre Carrera"
                        variant="outlined"
                        value={formValue.nombre_carrera || ''}
                        onChange={handleChange}
                    />
                </Grid>

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
                        name="nombre_instituto"
                        size="small"
                        label="Nombre Instituto"
                        variant="outlined"
                        value={formValue.nombre_instituto || ''}
                        onChange={handleChange}
                    />
                </Grid>

                <Button
                    variant="contained"
                    color="primary"
                    sx={{
                        marginTop: '6px'
                    }}
                    onClick={handleSubmit}
                >
                    Crear Carrera
                </Button>
            </Grid>
        </Grid>
    );
};

export { PageCRUDCarreras };