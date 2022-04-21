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
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { OuterFormButtons } from './OuterFormButtons';
import { config } from '../src/config/config';

const CreateForm = () => {
    const [materias, setMaterias] = useState([
        <FormUniOrigen key={nanoid()} />
    ]);

    const [formValue, setformValue] = useState({
        materiaSolicitada: '',
        carreraUnahur: '',
        materiaAprobada: '',
        universidadOrigen: '',
        anioAprobacion: '',
        cargaHorariaTotal: '',
        notaAprobacion: ''
    });

    const notify = () => {
        toast.error('Tiene que enviar al menos una materia', {
            position: 'bottom-left',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
        });
    };

    const addMateria = () => {
        setMaterias((cualquiera) => [
            ...cualquiera,
            <FormUniOrigen key={nanoid()} />
        ]);
    };

    const handleChange = (event) => {
        setformValue({
            ...formValue,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async () => {
        // store the states in the form data
        // const loginFormData = new FormData();
        // loginFormData.append('materiaSolicitada', formValue.materiaSolicitada);
        // loginFormData.append('carreraUnahur', formValue.carreraUnahur);
        // loginFormData.append('materiaAprobada', formValue.materiaAprobada);
        // loginFormData.append('universidadOrigen', formValue.universidadOrigen);
        // loginFormData.append('anioAprobacion', formValue.anioAprobacion);
        // loginFormData.append('cargaHorariaTotal', formValue.cargaHorariaTotal);
        // loginFormData.append('notaAprobacion', formValue.notaAprobacion);

        const loginFormData = new FormData();
        loginFormData.append('materiaSolicitada', formValue.materiaSolicitada);
        loginFormData.append('carreraUnahur', formValue.carreraUnahur);

        try {
            // make axios post request
            const response = await axios({
                method: 'post',
                url: `${config.apiUrl}/materias_solicitadas`,
                data: loginFormData,
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

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
            <form onSubmit={handleSubmit}>
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
                                name="materiaSolicitada"
                                size="small"
                                label="Materia solicitada UNAHUR"
                                variant="outlined"
                                value={formValue.materiaSolicitada}
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
                            {/* <AutocompleteInput
                                size="small"
                                name="carreraUnahur"
                                variant="outlined"
                                disablePortal
                                options={top100Films}
                                value={formValue.carreraUnahur}
                                onChange={handleChange}
                                renderInput={(params) => (
                                    <TextField
                                        required
                                        {...params}
                                        label="Carreras UNAHUR"
                                    />
                                )}
                            /> */}
                        </Grid>
                    </Grid>
                </Grid>

                {materias.map((materia) => (
                    <>
                        <FormUniOrigen
                            key={materia.key}
                            // handledelete={
                            //     materias.length > 1
                            //         ? () => {
                            //               const newMaterias = materias.filter(
                            //                   (x) => x.key !== materia.key
                            //               );
                            //               setMaterias([...newMaterias]);
                            //               console.log(materias);
                            //           }
                            //         : () => {
                            //               console.log('Eliminar este console');
                            //           }
                            // }

                            handledelete={() => {
                                if (materias.length > 1) {
                                    const newMaterias = materias.filter(
                                        (x) => x.key !== materia.key
                                    );
                                    setMaterias([...newMaterias]);
                                    console.log(materias);
                                } else {
                                    notify();
                                }
                            }}
                            formValue={formValue}
                            handleChange={handleChange}
                        />
                        <ToastContainer
                            position="bottom-left"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                        />
                    </>
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

                <OuterFormButtons onSubmit={handleSubmit} />
            </form>
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
