import { Grid } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Header } from '../../../Header';
import { Titulos } from '../../atoms/Title/Titulos';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { BotonMUI } from '../../atoms/Button/BotonMUI';
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
import { Chat } from '../../molecules/Chat';
import { Item } from '../../atoms/Item/Item';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const PageRevision = ({ rol }) => {
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
                    ? equivalenciasResponse.carrera
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
                    observaciones: equivalenciasResponse.observaciones,
                    instituto: equivalenciasResponse.instituto
                });
            }
        };
        fetchData();
    }, []);

    const cambiarEstado = (event, idMateria) => {
        const solicitudes = [].concat(formValue.materias);
        formValue.materias.find((materia) => materia.id === idMateria).estado =
            event.target.value;
        solicitudes.find((solicitud) => solicitud.id === idMateria).estado =
            event.target.value;
        setEquiv((equiv) => ({
            ...equiv,
            materiasSolicitadas: solicitudes
        }));
        setFormValue((formValue) => ({
            ...formValue,
            materias: solicitudes
        }));
    };

    const notifyExito = () => {
        toast.success('Equivalencia modificada con éxito', {
            containerId: 'home',
            position: 'bottom-left',
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
        });
        // Esperar 5 segundos
        setTimeout(() => {
            window.location = '/direccion/solicitudes';
        }, 1000);
    };

    // Modificar
    const handleSubmit = async () => {
        // TODO: Las equivalencias se tienen que cambiar de a varias, no de a una sola
        formValue.materias.forEach(async (materia) => {
            const equivalencia = {
                estado: materia.estado
            };
            if (equivalencia) {
                const response = await axios
                    .put(
                        `${config.apiUrl}/materias_solicitadas/` + materia.id,
                        equivalencia
                    )
                    .then((res) => {
                        try {
                            res.data.data;
                        } catch (error) {
                            console.error(error);
                        }
                    })
                    .catch(() => {});
            }
        });
        setTimeout(async () => {
            let state = '';
            if (equiv.materiasSolicitadas.length > 0) {
                const pendientes = equiv.materiasSolicitadas.filter(
                    (materia) => materia.estado === 'pendiente'
                );
                if (pendientes.length === 0) {
                    state = 'Cerrado';
                } else if (
                    pendientes.length === equiv.materiasSolicitadas.length
                ) {
                    state = 'Pendiente';
                } else {
                    state = 'Abierto';
                }
                const solicitud = {
                    estado: state,
                    observaciones: formValue.observaciones
                };
                const response = await axios
                    .put(`${config.apiUrl}/equivalencias/` + id, solicitud)
                    .then((res) => {
                        try {
                            res.data.data;
                            notifyExito();
                        } catch (error) {
                            console.error(error);
                        }
                    })
                    .catch(() => {});
            } else {
                notifyExito();
            }
        }, 1000);
    };

    return (
        <Box sx={{ flexGrow: 1 }} width="100vw" height="100vh">
            <Grid item container xs={12}>
                <Header
                    name="Equivalencias"
                    paginaPrincipal="/direccion/solicitudes"
                    botonSeleccionado="rgba(255, 255, 255, 0.1);"
                />
            </Grid>
            <Grid item container xs={12} paddingX={20} paddingTop={4}>
                <Grid item container xs={12}>
                    <Titulos component="h2" titulogrande>
                        Revisión
                    </Titulos>
                </Grid>
                <Grid container spacing={6} paddingTop={2}>
                    <Grid item xs={9}>
                        <Item>
                            <Grid item container width="100%" height="100%">
                                {/* Informacion */}
                                <Paper
                                    sx={{
                                        width: '100%',
                                        overflow: 'hidden',
                                        borderRadius: '10px 10px 0px 0px',
                                        boxShadow: 'none',
                                        height: '17%',
                                        borderBottom: '2px solid #dadce0'
                                    }}
                                >
                                    <TableContainer>
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
                                                                    column.minWidth,
                                                                backgroundColor:
                                                                    'Azure'
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
                                    borderBottom="2px solid #dadce0"
                                    width="100%"
                                >
                                    <Box
                                        container
                                        display="flex"
                                        paddingTop={0}
                                    >
                                        <Grid container paddingLeft="60px">
                                            <Titulos item titulolabel>
                                                Materias solicitadas de la
                                                UNAHUR
                                            </Titulos>
                                        </Grid>
                                        <Grid
                                            container
                                            sx={{
                                                justifyContent: 'end',
                                                marginRight: '11%'
                                            }}
                                        >
                                            <Titulos item titulolabel>
                                                Estado
                                            </Titulos>
                                        </Grid>
                                    </Box>

                                    <Grid
                                        container
                                        overflow="auto"
                                        maxHeight={170}
                                        padding={{
                                            xs: '0px 30px',
                                            sm: '0px 60px'
                                        }}
                                    >
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
                                                                            inputProps={{
                                                                                readOnly:
                                                                                    rol ===
                                                                                    'alumno'
                                                                                        ? true
                                                                                        : false
                                                                            }}
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

                                {/* Universidad Origen */}
                                <Grid>
                                    <Box
                                        container
                                        display="flex"
                                        paddingTop={2}
                                    >
                                        <Grid container paddingLeft="60px">
                                            <Titulos item titulolabel>
                                                Materias aprobadas
                                            </Titulos>
                                        </Grid>
                                    </Box>
                                    <Grid overflow="auto" maxHeight={230}>
                                        {equiv.materiasAprobadas !==
                                        undefined ? (
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
                                                                    xs:
                                                                        '0px 30px',
                                                                    sm:
                                                                        '10px 60px'
                                                                }}
                                                                sx={{
                                                                    height:
                                                                        'auto',
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
                                                                            xs={
                                                                                2
                                                                            }
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
                                                                            xs={
                                                                                2
                                                                            }
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
                                                                            xs={
                                                                                2
                                                                            }
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
                                                                            xs={
                                                                                5
                                                                            }
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
                            </Grid>
                        </Item>
                    </Grid>
                    {/* Chat */}
                    <Grid item xs={3}>
                        <Item>
                            <Chat
                                observaciones={formValue.observaciones}
                            ></Chat>
                        </Item>
                    </Grid>
                </Grid>
                {/* Footer */}
                <Grid item container xs={12}>
                    {rol === 'directivo' ? (
                        <OuterFormButtons
                            handleSubmit={handleSubmit}
                            path={'/direccion/solicitudes'}
                            titulo={'Descartar revisión'}
                            mensaje={
                                '¿Está seguro/a de que desea descartar la revisión de la solicitud?'
                            }
                            revision={true}
                        />
                    ) : (
                        <Grid item container xs={1} lg={1} marginTop="20px">
                            <Link
                                to={'/usuario/equivalencias/'}
                                style={{
                                    textDecoration: 'none',
                                    width: '100%'
                                }}
                                sx={{
                                    marginRight: '12px'
                                }}
                            >
                                <BotonMUI
                                    buttoncontainedsmall
                                    sx={{
                                        marginRight: '12px',
                                        width: '100%'
                                    }}
                                >
                                    Volver
                                </BotonMUI>
                            </Link>
                        </Grid>
                    )}
                </Grid>
            </Grid>
        </Box>
    );
};
export { PageRevision };
