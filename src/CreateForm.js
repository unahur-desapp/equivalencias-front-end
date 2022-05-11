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
    const [idMateriaUno, setIdMateriaUno] = useState(nanoid());

    const [materias, setMaterias] =
        // <FormUniOrigen key={nanoid()} />
        // <FormUniOrigen key={nanoid()} />
        useState([
            {
                key: nanoid(),
                notaAprobacion: null,
                cargaHorariaTotal: null,
                anioAprobacion: '',
                materiaAprobada: '',
                universidadOrigen: '', // id de universidad
                certificado: null
            }
        ]);
    //Push de esto?
    // const materiasAprobadasArray = {

    // 		key: idMateriaUno,
    // 		materiaAprobada: '',
    // 		universidadOrigen: '',
    // 		anioAprobacion: '',
    // 		cargaHorariaTotal: '',
    // 		notaAprobacion: ''
    // })

    const [formValue, setformValue] = useState({
        materiaSolicitada: '',
        carreraUnahur: ''
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
        // setMaterias((materias) => [
        // 	...materias,
        // 	<FormUniOrigen key={nanoid()} />
        // ]);

        setMaterias((materias) => [
            ...materias,
            {
                key: nanoid(),
                notaAprobacion: null,
                cargaHorariaTotal: null,
                anioAprobacion: '',
                materiaAprobada: '',
                universidadOrigen: '', // id de universidad
                certificado: null
            }
        ]);

        // formValue.materiasAprobadas.push(formValueArray);

        console.log('Agregar Materias: ', materias);
    };

    const handleChange = (event) => {
        setformValue((formValue) => ({
            ...formValue,
            [event.target.name]: event.target.value
        }));
        console.log(event.target.key);
        console.log(event.target.value);
        console.log(event.target.name);
        console.log(formValue);
    };

    const handleChangeArray = (event, key) => {
        // const materia = materias.find(e => e.key === key)
        // setFormValueArray((formValueArray) => ({
        //     ...formValueArray,
        //     [event.target.name]: event.target.value
        // }));
        // setformValue((formValue));
        // console.log(event.target.key);
        // console.log(event.target.value);
        // console.log(event.target.name);
        // console.log(formValueArray);
        const indiceMateria = materias.findIndex((e) => e.key === key);
        console.log(materias);
        console.log(key);
        console.log(indiceMateria);
        console.log(materias[indiceMateria]);
        console.log({
            ...materias[indiceMateria],
            [event.target.name]: event.target.value
        });
        setMaterias((materias) => {
            return [
                ...materias.slice(0, indiceMateria),
                {
                    ...materias[indiceMateria],
                    [event.target.name]: event.target.value
                },
                ...materias.slice(indiceMateria + 1)
            ];
        });
    };
    console.log(materias);

    //TURNOS

    // const handleChangeHour = (id, event) => {
    //     const newInputFields = horarios.map((horario) => {
    //       if (id === horario.id) {
    //         horario[event.name] = event.value;
    //       }
    //       return horario;
    //     });

    //     setHorarios(newInputFields);
    //   };

    //NUESTRO

    // const handleChangeArray = (key, event) => {
    // 	// if(key === formValue.materiasAprobadas[formValues.key]) {
    // 		setformValue((formValues) => ({
    // 			...formValues,
    // 			if(key === formValues.materiasAprobadas[key]){
    // 				[event.target.name] : event.target.value
    // 			}

    // 		}))
    // }
    // }

    const handleSubmit = async () => {
        const equivalencia = {
            nombre: formValue.materiaSolicitada,
            carrera: formValue.carreraUnahur,
            instituto: 'Instituto de Tecnología e Ingeniería',
            array: materias.map((item) => {
                return {
                    ...item,
                    nota: item.notaAprobacion,
                    carga_horaria: item.cargaHorariaTotal,
                    año_aprobacion: item.anioAprobacion,
                    nombre_materia: item.materiaAprobada,
                    // UniversidadOrigenId: item.universidadOrigen
                    certificado: item.certificado
                };
            })
        };

        console.log(equivalencia);

        const res = await axios.post(
            'http://localhost:3001/api/equivalencias/createx3',
            equivalencia
        );

        res.data.data; // '{"name":"deven"}'
        res.data.headers['Content-Type']; // 'application/json;charset=utf-8',

        // store the states in the form data
        // const loginFormData = new FormData();
        // loginFormData.append('materiaSolicitada', formValue.materiaSolicitada);
        // loginFormData.append('carreraUnahur', formValue.carreraUnahur);
        // loginFormData.append('materiaAprobada', formValue.materiaAprobada);
        // loginFormData.append('universidadOrigen', formValue.universidadOrigen);
        // loginFormData.append('anioAprobacion', formValue.anioAprobacion);
        // loginFormData.append('cargaHorariaTotal', formValue.cargaHorariaTotal);
        // loginFormData.append('notaAprobacion', formValue.notaAprobacion);

        // const loginFormData = new FormData();
        // loginFormData.append('materiaSolicitada', formValue.materiaSolicitada);
        // loginFormData.append('carreraUnahur', formValue.carreraUnahur);
        // loginFormData.append('materiasAprobadas', materias);

        // try {
        //     // make axios post request
        //     const response = await axios({
        //         method: 'post',
        //         url: `${config.apiUrl}/materias_solicitadas`,
        //         data: loginFormData,
        //         headers: { 'content-type': 'text/json' }
        //     });

        //     console.log(loginFormData.get('materiaSolicitada'));
        //     console.log(loginFormData.get('carreraUnahur'));
        //     console.log(loginFormData.get('materiasAprobadas'));
        //     console.log(formValue);
        //     console.log(materias);
        //     for (var pair of loginFormData.entries()) {
        //         console.log(pair[0] + ', ' + pair[1]);
        //     }
        // } catch (Exception) {
        //     console.log(Exception);
        // }
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
                    </Grid>
                </Grid>

                {materias.map((materia) => {
                    console.log(materia.key);
                    return (
                        <>
                            <FormUniOrigen
                                key2={materia.key}
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
                                    console.log(formValue);

                                    if (materias.length > 1) {
                                        // const newMaterias = materias.filter(
                                        //     (x) => x.key !== materia.key
                                        // );
                                        // setMaterias([...newMaterias]);
                                        // console.log(materias);

                                        setMaterias((materias) =>
                                            materias.filter(
                                                (x) => x.key !== materia.key
                                            )
                                        );
                                    } else {
                                        notify();
                                    }
                                }}
                                handleChangeArray={handleChangeArray}
                                formValueArray={materia}
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
                    );
                })}

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
                        buttoncontainedaddmateria
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

const carreras = [
    { label: 'Informática', instituto: 'Instituto de Tecnología e Ingeniería' }
];

export { CreateForm };
