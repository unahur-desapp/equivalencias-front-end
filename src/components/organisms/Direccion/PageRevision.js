import { Grid, TextareaAutosize } from '@mui/material';
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
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { OuterFormButtons } from '../../../OuterFormButtons';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import { getEquivalencia } from '../../../services/revision';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { config } from '../../../config/config';
import Chip from '@mui/material/Chip';
import { styled } from '@mui/material';
import { css } from '@mui/styled-engine';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';

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

const BasicMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
};

const PageRevision = () => {
    const { id } = useParams();
    const [rows, setRows] = useState([]);
    const [equiv, setEquiv] = useState({});
    const [alignment, setAlignment] = useState('web');
    const [formValue, setFormValue] = useState({});
    const [unEstado, setState] = React.useState('');

    const handleChange2 = (event) => {
        setState(event.target.value);
    };

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

            setFormValue({
                observaciones: obtainedEquivalenciaData.observaciones,
                estado: obtainedEquivalenciaData.estado
            });

            console.log(obtainedEquivalenciaData);

            console.log('Hola' + arrayData.nombre_materia);
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
        const newValue = event.target.value;
        setFormValue((equiv) => ({
            ...equiv,
            estado: newValue
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

                    window.location = '/direccion/solicitudes';
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
                        name="Equivalencias"
                        paginaPrincipal="/direccion/solicitudes"
                        botonSeleccionado="rgba(255, 255, 255, 0.1);"
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
                                Revisión
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
                                                    <TableCell aling="center">
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
                                <Grid container spacing={2}>
                                    <Grid xs={10.6}>
                                        <Titulos titulolabel marginLeft="16px">
                                            Materias solicitadas de la UNAHUR
                                        </Titulos>
                                    </Grid>
                                    <Grid xs={1.4}>
                                        <Titulos titulolabel marginLeft="-5px">
                                            Estado
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
                                        lg={10}
                                        sx={{
                                            marginTop: '1px'
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
                                            marginTop: '15px',
                                            marginLeft: '20px',
                                            marginRight: '0px'
                                        }}
                                    >
                                        <Box sx={{ minWidth: 120 }}>
                                            <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label"></InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={formValue.estado}
                                                    onChange={
                                                        handleChangeToggle
                                                    }
                                                    size="small"
                                                    sx={
                                                        formValue.estado ===
                                                        'Aceptado'
                                                            ? {
                                                                  backgroundColor:
                                                                      '#009673',
                                                                  color:
                                                                      '#FFFFFF'
                                                              }
                                                            : formValue.estado ===
                                                              'Rechazado'
                                                            ? {
                                                                  backgroundColor:
                                                                      '#DB0505',
                                                                  color:
                                                                      '#FFFFFF'
                                                              }
                                                            : formValue.estado ===
                                                              'Pendiente'
                                                            ? {
                                                                  backgroundColor:
                                                                      '#2A74E4',
                                                                  color:
                                                                      '#FFFFFF'
                                                              }
                                                            : {}
                                                    }
                                                >
                                                    <MenuItem value="Aceptado">
                                                        Aceptado
                                                    </MenuItem>
                                                    <MenuItem value="Pendiente">
                                                        Pendiente
                                                    </MenuItem>
                                                    <MenuItem value="Rechazado">
                                                        Rechazado
                                                    </MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
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
                                    <Grid
                                        item
                                        container
                                        direction="row"
                                        justifyContent="center"
                                        alignItems="center"
                                        sm={12}
                                        sx={{
                                            marginTop: '20px'
                                        }}
                                    ></Grid>
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
                                            value={formValue.observaciones}
                                            name="observaciones"
                                            focused={false}
                                            InputProps={{
                                                readOnly: true
                                            }}
                                            onChange={handleChange}
                                            rows={9}
                                            sx={{
                                                width: '100%'
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
export { PageRevision };
