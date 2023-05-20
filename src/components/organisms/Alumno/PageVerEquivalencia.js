import { Container, Grid, TextareaAutosize } from '@mui/material';
import React, { useState, useMemo, useEffect } from 'react';
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
import Typography from '@mui/material/Typography';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import { getEquivalencia } from '../../../services/revision';
import { useParams } from 'react-router-dom';
import Chip from '@mui/material/Chip';
import axios from 'axios';
import { styled } from '@mui/material';
import { css } from '@mui/styled-engine';
import { Link } from 'react-router-dom';
import { config } from '../../../config/config';
import Box from '@mui/material/Box';

const ChipMedium = styled(Chip)`
    ${(props) =>
        props.chipMedium &&
        css`
            font-size: 14px;
        `}
`;

const columns = [
    { id: 'desc', label: 'Solicitante', minWidth: 170 },
    { id: 'state', label: 'DNI', minWidth: 170 },
    { id: 'carreer', label: 'Carrera', minWidth: 170 },
    { id: 'dateTime', label: 'Email', minWidth: 100 },
    { id: 'phone', label: 'Teléfono', minWidth: 170 },
    { id: 'actions', label: 'Fecha', minWidth: 170 }
];

function createData(solicitante, email, dni, fechaHora, telefono) {
    return { solicitante, email, dni, fechaHora, telefono };
}

function MyFormHelperText() {
    const { focused } = useFormControl() || {};

    const helperText = useMemo(() => {
        if (focused) {
            return 'This field is being focused';
        }

        return 'Helper text';
    }, [focused]);

    return <FormHelperText>{helperText}</FormHelperText>;
}

const horaConCero = (hora) => {
    if (hora < 10) {
        return `0${hora}`;
    } else {
        return hora;
    }
};

const PageVerEquivalencia = () => {
    const { id } = useParams();
    const [rows, setRows] = useState([]);
    const [equiv, setEquiv] = useState({});
    const [alignment, setAlignment] = useState('web');
    const [formValue, setFormValue] = useState({});

    useEffect(() => {
        const fetchUsuarioData = async () => {
            const obtainedUsuarioData = await getEquivalencia(id);
            let arrayData = [];

            let d = new Date(obtainedUsuarioData.createdAt);
            let dateTime =
                d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear();

            arrayData.push(
                createData(
                    obtainedUsuarioData.Usuario.nombre +
                        ' ' +
                        obtainedUsuarioData.Usuario.apellido,
                    obtainedUsuarioData.Usuario.email,
                    obtainedUsuarioData.Usuario.dni,
                    dateTime,
                    obtainedUsuarioData.Usuario.telefono,
                    obtainedUsuarioData.Materias_aprobadas[0].certificado
                )
            );

            setRows(arrayData);

            console.log(
                'obtainedusuario:',
                obtainedUsuarioData.Materias_aprobadas[0].certificado
            );
        };

        fetchUsuarioData();
    }, []);

    useEffect(() => {
        const fetchEquivalenciaData = async () => {
            const obtainedEquivalenciaData = await getEquivalencia(id);

            let arrayData = {
                nombre: obtainedEquivalenciaData.Materias_solicitadas[0].nombre,

                carrera:
                    obtainedEquivalenciaData.Materias_solicitadas[0].carrera,

                materiasAprobadas: obtainedEquivalenciaData.Materias_aprobadas,

                observaciones: obtainedEquivalenciaData.observaciones,

                estado: obtainedEquivalenciaData.estado
            };

            setEquiv(arrayData);
        };

        fetchEquivalenciaData();
    }, []);

    const handleChange = (event) => {
        setFormValue((equiv) => ({
            ...equiv,
            [event.target.name]: event.target.value
        }));
        console.log(formValue);
    };

    const handleChangeToggle = (event, newAlignment) => {
        setFormValue((equiv) => ({
            ...equiv,
            [event.target.id]: event.target.value
        }));
        console.log(formValue);

        setAlignment(newAlignment);
    };

    const handleSubmit = async () => {
        const equivalencia = {
            observaciones: formValue.observaciones,
            estado: formValue.estado
        };

        console.log(equivalencia);

        const res = await axios
            .put(`${config.apiUrl}/equivalencias/` + id, equivalencia)
            .then((res) => {
                try {
                    res.data.data; // '{"name":"deven"}'

                    window.location = '/usuario/equivalencias';
                } catch (error) {
                    console.log(error);
                }
            })
            .catch(() => {});
    };

    return (
        <>
            <Grid container direction="column">
                <Grid item container xs={12}>
                    <Header
                        name="Mis equivalencias"
                        paginaPrincipal="/usuario/equivalencias/"
                    />
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
                        sx={{
                            padding: '0px 20px'
                        }}
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Grid item>
                            <Titulos component="h2" titulogrande>
                                Detalle de pedido de equivalencia
                            </Titulos>
                        </Grid>
                    </GridTop>
                    <GridTop item container xs={12} flexDirection="column">
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
                                height: 'auto',
                                marginLeft: '100px'
                            }}
                        >
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
                                            {rows.map((row) => (
                                                <TableRow
                                                    key={row.solicitante}
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
                                                        {row.solicitante}
                                                    </TableCell>
                                                    <TableCell align="center">
                                                        {row.dni}
                                                    </TableCell>
                                                    <TableCell align="center">
                                                        {row.carrera}
                                                    </TableCell>
                                                    <TableCell align="center">
                                                        {row.email}
                                                    </TableCell>
                                                    <TableCell align="center">
                                                        {row.telefono}
                                                    </TableCell>
                                                    <TableCell align="center">
                                                        {row.fechaHora}
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Paper>

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
                                    borderRadius: '10px 10px 0px 0px',
                                    borderBottom: '1px solid #dadce0'
                                }}
                            >
                                <Box
                                    sx={{
                                        marginTop: '20px',
                                        marginLeft: '15px',
                                        flexGrow: 1
                                    }}
                                >
                                    <Grid container spacing={2}>
                                        <Grid xs={10.6}>
                                            <Titulos titulolabel>
                                                Materias solicitadas de la
                                                UNAHUR
                                            </Titulos>
                                        </Grid>
                                        <Grid xs={1.4}>
                                            <Titulos titulolabel>
                                                Estado
                                            </Titulos>
                                        </Grid>
                                    </Grid>
                                </Box>

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
                                        lg={10}
                                        sx={{
                                            marginTop: '6px'
                                        }}
                                    >
                                        <StandardInput
                                            inputFocused
                                            name="materiaSolicitada"
                                            value={equiv.nombre}
                                            variant="outlined"
                                            focused={true}
                                            size="small"
                                            InputProps={{
                                                readOnly: true
                                            }}
                                        />
                                    </Grid>

                                    <Grid
                                        item
                                        container
                                        md={12}
                                        lg={1.5}
                                        sx={{
                                            marginTop: '23px',
                                            marginLeft: '20px',
                                            marginRight: '0px'
                                        }}
                                    >
                                        <ChipMedium
                                            size="medium"
                                            chipMedium
                                            label={equiv.estado}
                                            sx={
                                                equiv.estado === 'Aceptado'
                                                    ? {
                                                          backgroundColor:
                                                              '#009673',
                                                          color: '#FFFFFF'
                                                      }
                                                    : equiv.estado ===
                                                      'Rechazado'
                                                    ? {
                                                          backgroundColor:
                                                              '#DB0505',
                                                          color: '#FFFFFF'
                                                      }
                                                    : {
                                                          backgroundColor:
                                                              '#2A74E4',
                                                          color: '#FFFFFF'
                                                      }
                                            }
                                        ></ChipMedium>
                                    </Grid>
                                </Grid>
                            </Grid>
                            {/* Universidad Origen */}
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
                                                                marginTop: '6px'
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
                                                                focused={true}
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
                                                                marginTop: '6px'
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
                                                                focused={true}
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

                            {/* Textarea */}

                            <Grid
                                item
                                container
                                xs={11.5}
                                md={7}
                                marginTop={{
                                    xs: '20px'
                                }}
                                sx={{
                                    padding: '20px 60px'
                                }}
                            >
                                <Grid
                                    item
                                    container
                                    direction="row"
                                    justifyContent="flex-start"
                                    alignItems="center"
                                    xs={12}
                                    lg={6}
                                >
                                    <Grid item container xs={6} lg={4}>
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
                                </Grid>
                            </Grid>
                        </GridTop>
                        <GridTop
                            item
                            container
                            blanco
                            md={6}
                            xs={12}
                            marginTop={{
                                xs: '30px'
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
                                            value={equiv.observaciones}
                                            name="observaciones"
                                            onChange={handleChange}
                                            focused={false}
                                            rows={9}
                                            InputProps={{
                                                readOnly: true
                                            }}
                                            sx={{
                                                width: '100%',
                                                paddingTop: '5px'
                                            }}
                                        />
                                        <TextField
                                            id="filled-basic"
                                            placeholder="Escriba su mensaje aqui..."
                                            variant="filled"
                                            multiline
                                            name="observaciones"
                                            onChange={handleChange}
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

export { PageVerEquivalencia };
