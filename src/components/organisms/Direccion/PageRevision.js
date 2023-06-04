import { Grid } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Header } from '../../../Header';
import { Titulos } from '../../atoms/Title/Titulos';
import { GridTop } from '../../../GridTop';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { BotonMUI } from '../../atoms/Button/BotonMUI';
import { TextField } from '@mui/material';
import { StandardInput } from '../../atoms/Input/InputMUI';
import { OuterFormButtons } from '../../../OuterFormButtons';
import FormControl from '@mui/material/FormControl';
import { getEquivalencia } from '../../../services/revision';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { config } from '../../../config/config';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';

const PageRevision = () => {
    const { id } = useParams();
    const [user, setUser] = useState([]);
    const [equiv, setEquiv] = useState({});
    const [formValue, setFormValue] = useState({
        materias: [
            {
                id: '',
                estado: ''
            }
        ],
        observaciones: ''
    });
    const columns = [
        { id: 'desc', label: 'Solicitante', minWidth: 170 },
        { id: 'state', label: 'DNI', minWidth: 170 },
        { id: 'carreer', label: 'Carrera', minWidth: 170 },
        { id: 'dateTime', label: 'Email', minWidth: 100 },
        { id: 'phone', label: 'Teléfono', minWidth: 170 },
        { id: 'actions', label: 'Fecha', minWidth: 170 }
    ];

    const createData = (
        solicitante,
        email,
        carrera,
        dni,
        fechaHora,
        telefono
    ) => {
        return { solicitante, email, carrera, dni, fechaHora, telefono };
    };

    useEffect(() => {
        const fetchData = async () => {
            const equivalenciasResponse = await getEquivalencia(id);
            let dateAux = new Date(equivalenciasResponse.createdAt);
            let date =
                dateAux.getDate() +
                '/' +
                (dateAux.getMonth() + 1) +
                '/' +
                dateAux.getFullYear();
            const carrera =
                equivalenciasResponse.Materias_solicitadas.length > 0
                    ? equivalenciasResponse.Materias_solicitadas[0].carrera
                    : '';

            const userData = createData(
                equivalenciasResponse.Usuario.nombre +
                    ' ' +
                    equivalenciasResponse.Usuario.apellido,
                equivalenciasResponse.Usuario.email,
                carrera,
                equivalenciasResponse.Usuario.dni,
                date,
                equivalenciasResponse.Usuario.telefono
            );
            setUser(userData);

            const equivData = {
                materiasAprobadas: equivalenciasResponse.Materias_aprobadas,
                materiasSolicitadas: equivalenciasResponse.Materias_solicitadas,
                observaciones: equivalenciasResponse.observaciones
            };
            setEquiv(equivData);

            if (equivalenciasResponse.Materias_solicitadas.length > 0) {
                const materias = [];
                equivalenciasResponse.Materias_solicitadas.forEach(
                    (materia) => {
                        materias.push({
                            id: materia.id,
                            estado: materia.estado
                        });
                    }
                );
                setFormValue({
                    materias: materias,
                    observaciones: equivalenciasResponse.observaciones
                });
            }
        };
        fetchData();
    }, []);

    // TODO: Arreglar funcionamiento del chat
    const chat = (event) => {
        setFormValue((equiv) => ({
            ...equiv,
            observaciones: event.target.value
        }));
    };

    const cambiarEstado = (event, idMateria) => {
        const solicitudes = [].concat(equiv.materiasSolicitadas);
        solicitudes[idMateria - 1].estado = event.target.value;
        setEquiv((equiv) => ({
            ...equiv,
            materiasSolicitadas: solicitudes
        }));
    };

    // Modificar
    const handleSubmit = async () => {
        // TODO: Las equivalencias se tienen que cambiar de a varias, no de a una sola
        formValue.materias.forEach(async (materia) => {
            const equivalencia = {
                observaciones: formValue.observaciones,
                estado: materia.estado
            };
            if (equivalencia) {
                console.log(equivalencia);
                const response = await axios
                    .put(
                        `${config.apiUrl}/equivalencias/` + materia.id,
                        equivalencia
                    )
                    .then((res) => {
                        try {
                            console.log(res);
                            res.data.data;
                            //window.location = '/direccion/solicitudes';
                        } catch (error) {
                            console.log(error);
                        }
                    })
                    .catch(() => {});
            }
        });
    };

    return (
        <>
            <Grid container direction="column">
                <Grid item container xs={12}>
                    <Header
                        name="Equivalencias"
                        paginaPrincipal="/direccion/solicitudes"
                        botonSeleccionado="rgba(255, 255, 255, 0.1);"
                    />
                </Grid>

                <Grid item container direction="row">
                    <GridTop
                        item
                        container
                        xs={11.5}
                        md={7}
                        alignItems="end"
                        sx={{
                            margin: '0% 7%'
                        }}
                    >
                        <Grid item>
                            <Titulos component="h2" titulogrande>
                                Revisión
                            </Titulos>
                        </Grid>
                    </GridTop>
                    <GridTop item container xs={12} flexDirection="column">
                        {/* Revision */}
                        <GridTop
                            item
                            container
                            blanco
                            xs={11.5}
                            md={7}
                            marginTop={{
                                xs: '5px'
                            }}
                            sx={{
                                height: 'auto',
                                marginLeft: '100px'
                            }}
                        >
                            {/* Informacion */}
                            <Paper
                                sx={{
                                    width: '100%',
                                    overflow: 'hidden',
                                    borderRadius: '10px 10px 0px 0px',
                                    boxShadow: 'none',
                                    borderBottom: '1px solid #dadce0'
                                }}
                            >
                                <TableContainer sx={{ maxHeight: 440 }}>
                                    <Table
                                        stickyHeader
                                        aria-label="sticky table"
                                    >
                                        <TableHead>
                                            <TableRow>
                                                {columns.map((column) => (
                                                    <TableCell
                                                        key={column.id}
                                                        align="center"
                                                        style={{
                                                            minWidth:
                                                                column.minWidth
                                                        }}
                                                        sx={{
                                                            backgroundColor:
                                                                'Azure',
                                                            padding: '16px 60px'
                                                        }}
                                                    >
                                                        {column.label}
                                                    </TableCell>
                                                ))}
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow
                                                key={user.dni}
                                                sx={{
                                                    '&:last-child td, &:last-child th': {
                                                        border: 0
                                                    }
                                                }}
                                            >
                                                <TableCell
                                                    align="center"
                                                    component="th"
                                                    scope="row"
                                                >
                                                    {user.solicitante}
                                                </TableCell>
                                                <TableCell
                                                    align="center"
                                                    component="th"
                                                    scope="row"
                                                >
                                                    {user.dni}
                                                </TableCell>
                                                <TableCell
                                                    aling="center"
                                                    component="th"
                                                    scope="row"
                                                >
                                                    {user.carrera}
                                                </TableCell>
                                                <TableCell
                                                    align="center"
                                                    component="th"
                                                    scope="row"
                                                >
                                                    {user.email}
                                                </TableCell>
                                                <TableCell
                                                    align="center"
                                                    component="th"
                                                    scope="row"
                                                >
                                                    {user.telefono}
                                                </TableCell>
                                                <TableCell
                                                    align="center"
                                                    component="th"
                                                    scope="row"
                                                >
                                                    {user.fechaHora}
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Paper>

                            {/* Universidad Unahur */}
                            <Grid
                                item
                                container
                                direction="row"
                                sm={12}
                                padding={{
                                    xs: '20px 30px',
                                    sm: '20px 60px'
                                }}
                                sx={{
                                    height: 'auto',
                                    borderRadius: '10px 10px 0px 0px',
                                    borderBottom: '1px solid #dadce0'
                                }}
                            >
                                <Grid container>
                                    <Grid
                                        item
                                        container
                                        lg={9}
                                        sx={{
                                            paddingRight: '12px',
                                            justifyContent: 'start'
                                        }}
                                    >
                                        <Titulos titulolabel>
                                            Materias solicitadas de la UNAHUR
                                        </Titulos>
                                    </Grid>
                                    <Grid
                                        item
                                        container
                                        lg={3}
                                        sx={{
                                            paddingRight: '12px',
                                            justifyContent: 'end'
                                        }}
                                    >
                                        <Titulos titulolabel>Estado</Titulos>
                                    </Grid>
                                </Grid>

                                <Grid
                                    item
                                    container
                                    overflow="auto"
                                    maxHeight={120}
                                >
                                    <Grid item container>
                                        {equiv.materiasSolicitadas !==
                                        undefined ? (
                                            equiv.materiasSolicitadas.map(
                                                (materia) => {
                                                    return (
                                                        <>
                                                            <Grid
                                                                item
                                                                container
                                                                direction="column"
                                                                alignItems="flex-start"
                                                                md={12}
                                                                lg={9}
                                                                sx={{
                                                                    marginTop:
                                                                        '1px'
                                                                }}
                                                            >
                                                                <StandardInput
                                                                    inputFocused
                                                                    name="materiaSolicitada"
                                                                    value={
                                                                        materia.nombre
                                                                    }
                                                                    variant="outlined"
                                                                    focused={
                                                                        true
                                                                    }
                                                                    size="small"
                                                                    InputProps={{
                                                                        readOnly: true
                                                                    }}
                                                                />
                                                            </Grid>

                                                            <Grid
                                                                item
                                                                container
                                                                lg={3}
                                                                sx={{
                                                                    marginTop:
                                                                        '15px',
                                                                    paddingRight:
                                                                        '12px',
                                                                    justifyContent:
                                                                        'end'
                                                                }}
                                                            >
                                                                <Box>
                                                                    <FormControl
                                                                        fullWidth
                                                                    >
                                                                        <InputLabel id="demo-simple-select-label"></InputLabel>
                                                                        <Select
                                                                            labelId="demo-simple-select-label"
                                                                            id="demo-simple-select"
                                                                            onChange={(
                                                                                event
                                                                            ) =>
                                                                                cambiarEstado(
                                                                                    event,
                                                                                    materia.id
                                                                                )
                                                                            }
                                                                            defaultValue="pendiente"
                                                                            value={
                                                                                materia.estado
                                                                            }
                                                                            size="small"
                                                                            sx={{
                                                                                width:
                                                                                    '145px', // Ajusta el ancho según tus necesidades
                                                                                backgroundColor:
                                                                                    materia.estado ===
                                                                                    'aceptado'
                                                                                        ? '#009673'
                                                                                        : materia.estado ===
                                                                                          'rechazado'
                                                                                        ? '#DB0505'
                                                                                        : '#2A74E4',
                                                                                color:
                                                                                    '#FFFFFF'
                                                                            }}
                                                                        >
                                                                            <MenuItem value="aceptado">
                                                                                Aceptado
                                                                            </MenuItem>
                                                                            <MenuItem value="pendiente">
                                                                                Pendiente
                                                                            </MenuItem>
                                                                            <MenuItem value="rechazado">
                                                                                Rechazado
                                                                            </MenuItem>
                                                                        </Select>
                                                                    </FormControl>
                                                                </Box>
                                                            </Grid>
                                                        </>
                                                    );
                                                }
                                            )
                                        ) : (
                                            <></>
                                        )}
                                    </Grid>
                                </Grid>
                            </Grid>

                            {/* Universidad Origen */}
                            <Grid>
                                <Box
                                    sx={{
                                        marginTop: '35px',
                                        marginLeft: '75px',
                                        flexGrow: 1
                                    }}
                                >
                                    <Grid container spacing={2}>
                                        <Grid xs={6.2}>
                                            <Titulos titulolabel>
                                                Materias aprobadas
                                            </Titulos>
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Grid overflow="auto" maxHeight={240}>
                                    {equiv.materiasAprobadas !== undefined ? (
                                        equiv.materiasAprobadas.map(
                                            (materiaAprobada) => {
                                                return (
                                                    <>
                                                        <Grid
                                                            item
                                                            container
                                                            direction="row"
                                                            justifyContent="flex-start"
                                                            alignItems="center"
                                                            className="universidad-origen"
                                                            sm={12}
                                                            padding={{
                                                                xs: '0px 30px',
                                                                sm: '10px 60px'
                                                            }}
                                                            sx={{
                                                                height: 'auto',
                                                                borderRadius:
                                                                    '10px 10px 0px 0px',
                                                                borderBottom:
                                                                    '1px solid #dadce0'
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
                                                                        marginTop:
                                                                            '6px'
                                                                    }}
                                                                >
                                                                    <StandardInput
                                                                        inputFocused
                                                                        name="materiaAprobada"
                                                                        size="small"
                                                                        label="Materia aprobada"
                                                                        value={
                                                                            materiaAprobada.nombre_materia
                                                                        }
                                                                        variant="outlined"
                                                                        focused={
                                                                            true
                                                                        }
                                                                        InputProps={{
                                                                            readOnly: true
                                                                        }}
                                                                    />
                                                                </Grid>

                                                                <Grid
                                                                    item
                                                                    container
                                                                    md={12}
                                                                    lg={5.8}
                                                                    sx={{
                                                                        marginTop:
                                                                            '6px'
                                                                    }}
                                                                >
                                                                    {/* nota: obtainedEquivalenciaData.Materias_aprobadas[0].nota,
                                    carga_horaria: obtainedEquivalenciaData.Materias_aprobadas[0].carga_horaria,
                                    año_aprobacion: obtainedEquivalenciaData.Materias_aprobadas[0].año_aprobacion,
                                    nombre_materia: obtainedEquivalenciaData.Materias_aprobadas[0].nombre_materia,
                                    // UniversidadOrigenId: item.universidadOrigen
                                    certificado: obtainedEquivalenciaData.Materias_aprobadas[0].certificado */}

                                                                    <StandardInput
                                                                        inputFocused
                                                                        label="Universidad de Origen"
                                                                        name="universidadOrigen"
                                                                        value={
                                                                            'Universidad de la Matanza'
                                                                        }
                                                                        variant="outlined"
                                                                        size="small"
                                                                        focused={
                                                                            true
                                                                        }
                                                                        InputProps={{
                                                                            readOnly: true
                                                                        }}
                                                                    />
                                                                </Grid>
                                                            </Grid>

                                                            {/* Datos extra */}
                                                            <Grid
                                                                item
                                                                container
                                                                xs={12}
                                                                direction="row"
                                                                alignItems="flex-start"
                                                                width="100%"
                                                            >
                                                                <Grid
                                                                    item
                                                                    container
                                                                    md={12}
                                                                    lg={12}
                                                                    xs={12}
                                                                    direction="row"
                                                                    alignItems="flex-start"
                                                                    sx={{
                                                                        marginTop:
                                                                            '10px',
                                                                        marginRight:
                                                                            '10px'
                                                                    }}
                                                                    width="100%"
                                                                >
                                                                    <Grid
                                                                        item
                                                                        container
                                                                        xs={2}
                                                                        alignItems="flex-start"
                                                                    >
                                                                        <StandardInput
                                                                            inputFocused
                                                                            label="Año aprobación"
                                                                            name="anioAprobacion"
                                                                            value={new Date(
                                                                                materiaAprobada.año_aprobacion
                                                                            ).getFullYear()}
                                                                            variant="outlined"
                                                                            size="small"
                                                                            focused={
                                                                                true
                                                                            }
                                                                            InputProps={{
                                                                                readOnly: true
                                                                            }}
                                                                        />
                                                                    </Grid>

                                                                    <Grid
                                                                        item
                                                                        container
                                                                        xs={2}
                                                                        alignItems="flex-start"
                                                                        marginLeft="2%"
                                                                        width="100%"
                                                                    >
                                                                        <StandardInput
                                                                            inputFocused
                                                                            label="Nota aprobación"
                                                                            name="notaAprobacion"
                                                                            value={
                                                                                materiaAprobada.nota
                                                                            }
                                                                            variant="outlined"
                                                                            size="small"
                                                                            focused={
                                                                                true
                                                                            }
                                                                            InputProps={{
                                                                                readOnly: true
                                                                            }}
                                                                        />
                                                                    </Grid>
                                                                    <Grid
                                                                        item
                                                                        container
                                                                        xs={2}
                                                                        alignItems="flex-start"
                                                                        marginLeft="2%"
                                                                        width="100%"
                                                                    >
                                                                        <StandardInput
                                                                            inputFocused
                                                                            label="Certificado"
                                                                            name="notaAprobacion"
                                                                            value={
                                                                                materiaAprobada.certificado
                                                                                    ? 'Sí'
                                                                                    : 'No'
                                                                            }
                                                                            variant="outlined"
                                                                            size="small"
                                                                            focused={
                                                                                true
                                                                            }
                                                                            InputProps={{
                                                                                readOnly: true
                                                                            }}
                                                                        />
                                                                    </Grid>
                                                                    <Grid
                                                                        item
                                                                        container
                                                                        xs={5}
                                                                        marginTop="20px"
                                                                        width="100%"
                                                                    >
                                                                        <Grid
                                                                            item
                                                                            container
                                                                            alignItems="flex-start"
                                                                            width="100%"
                                                                            marginLeft="10%"
                                                                        >
                                                                            <Titulos
                                                                                titulolabel
                                                                                variant="h5"
                                                                                fontSize={{
                                                                                    xs:
                                                                                        '16px',
                                                                                    sm:
                                                                                        '18px'
                                                                                }}
                                                                                marginTop="2px"
                                                                                marginRight="5px"
                                                                            >
                                                                                Programa:
                                                                            </Titulos>
                                                                            <label htmlFor="contained-button-file">
                                                                                <BotonMUI
                                                                                    buttondownload
                                                                                    variant="outlined"
                                                                                >
                                                                                    Descargar
                                                                                </BotonMUI>
                                                                            </label>
                                                                        </Grid>
                                                                    </Grid>
                                                                </Grid>

                                                                {/* <AgregarMateriaUniOrigen /> */}
                                                            </Grid>
                                                        </Grid>
                                                    </>
                                                );
                                            }
                                        )
                                    ) : (
                                        <></>
                                    )}
                                </Grid>
                            </Grid>

                            {/* Textarea */}
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
                                    justifyContent="flex-start"
                                    alignItems="center"
                                    sm={12}
                                >
                                    <OuterFormButtons
                                        handleSubmit={handleSubmit}
                                        path={'/direccion/solicitudes'}
                                        titulo={'Descartar revisión'}
                                        mensaje={
                                            '¿Está seguro/a de que desea descartar la revisión de la solicitud?'
                                        }
                                    />
                                </Grid>
                            </Grid>
                        </GridTop>

                        {/* Chat */}
                        <GridTop
                            item
                            container
                            blanco
                            md={6}
                            xs={12}
                            marginTop={{
                                xs: '5px'
                            }}
                            sx={{
                                height: 'auto'
                            }}
                        >
                            <Grid
                                backgroundColor="Azure"
                                width="100%"
                                height="14%"
                                borderBottom="1px solid #dadce0"
                            >
                                <Titulos
                                    fontFamily="Roboto"
                                    textAlign="center"
                                    marginTop="15px"
                                    fontWeight="medium"
                                    fontSize={'20px'}
                                >
                                    Chat
                                </Titulos>
                            </Grid>
                            <Grid
                                item
                                container
                                direction="row"
                                sm={12}
                                padding="20px"
                                sx={{
                                    height: '340px',
                                    marginBottom: '20px',
                                    borderRadius: '10px 10px 0px 0px'
                                }}
                            >
                                <Grid item container direction="column" sm={12}>
                                    <Grid
                                        item
                                        container
                                        direction="row"
                                        sx={{
                                            width: '100%'
                                        }}
                                        sm={12}
                                    >
                                        <TextField
                                            id="filled-basic"
                                            label="Profesor"
                                            variant="filled"
                                            multiline
                                            value={formValue.observaciones}
                                            name="observaciones"
                                            focused={false}
                                            InputProps={{
                                                readOnly: true
                                            }}
                                            onChange={chat}
                                            rows={9}
                                            sx={{
                                                width: '100%',
                                                paddingTop: '10px'
                                            }}
                                        />
                                        <TextField
                                            id="filled-basic"
                                            placeholder="Escriba su mensaje aqui..."
                                            variant="filled"
                                            multiline
                                            name="observaciones"
                                            onChange={chat}
                                            rows={1}
                                            sx={{
                                                width: '100%'
                                            }}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </GridTop>
                    </GridTop>
                </Grid>
            </Grid>
        </>
    );
};
export { PageRevision };
