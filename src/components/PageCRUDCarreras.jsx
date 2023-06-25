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
    IconButton,
    Modal,
    Typography,
    Button
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import {
    StandardInput,
    AutocompleteInput
} from './atoms/Input/InputMUI';
import { GridTop } from '../GridTop';
import { Titulos } from './atoms/Title/Titulos';
import { HeaderSuperUsuario } from './HeaderSuperUsuario';
import { getCarreras, createCarrera, updateCarrera} from '../services/carrera_service';

const PageCRUDCarreras = () => {
    const [formValue, setformValue] = useState({
        nombre_carrera: '',
        nombre_instituto: ''
    });

    const [carreras, setCarreras] = useState([]);

    const columns = [
        {
            id: 'nombre_carrera',
            label: 'Carrera',
            minWidth: 140,
            align: 'center'
        },
        {
            id: 'nombre_instituto',
            label: 'Instituto',
            minWidth: 140,
            align: 'center'
        },
        {
            id: 'updatedAt',
            label: 'Fecha Actualizacion',
            minWidth: 140,
            align: 'center'
        }
    ];

    function formatearCelda(column, value) {
        if (column.id === 'updatedAt') {
            return convertUTCtoLocalTime(value);
        } else if (column.format && typeof value === 'number') {
            return column.format(value);
        } else {
            return value;
        }
    }

    function convertUTCtoLocalTime(utcDatetimeString) {
        const date = new Date(utcDatetimeString);
        return (
            date.toLocaleDateString() +
            ' - ' +
            date.toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true
            })
        );
    }

    useEffect(() => {
        const fetchCarreras = async () => {
            const carreras_input = await getCarreras();
            console.log(carreras_input.data)
            setCarreras(carreras_input.data);
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

    function createData(id, nombre_carrera, nombre_instituto, updatedAt) {
        return { id, nombre_carrera, nombre_instituto, updatedAt };
    }

    const rows = carreras.map((carrera) =>
        createData(
            carrera.id,
            carrera.nombre_carrera,
            carrera.nombre_instituto,
            carrera.updatedAt
        )
    );

    
    const [openAgregar, setOpenAgregar] = useState(false);
    const [openEditar, setOpenEditar] = useState(false);
    const [openEliminar, setOpenEliminar] = useState(false);

    const handleOpenAgregar = () => {
        setOpenAgregar(true);
    };
    const handleCloseAgregar = () => {
        setOpenAgregar(false);
    };
    const handleOpenEditar = () => {
        setOpenEditar(true);
    };
    const handleCloseEditar = () => {
        setOpenEditar(false);
    };
    const handleOpenEliminar = () => {
        setOpenEliminar(true);
    };
    const handleCloseEliminar = () => {
        setOpenEliminar(false);
    };


    const handleUpdate = (e) => {
        e.preventDefault();
        let objCarrera = {
            id: formValue.id,
            nombre_carrera: formValue.nombre_carrera,
            nombre_instituto: formValue.nombre_instituto
        };
        console.log(objCarrera);
        setOpenEditar(false)
        
        updateCarrera(objCarrera).then((rpta) => {
            console.log(rpta);
            setCarreras('');
        }); 
    };

    const handleDelete = (e) => {
        e.preventDefault();
        let objCarrera = {
            id: formValue.id
        };
        console.log(objCarrera);
        /*
        deleteCarrera(objCarrera).then((rpta) => {
            console.log(rpta);
            setCarreras('');
        }); */
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        let objCarrera = {
            nombre_carrera: formValue.nombre_carrera,
            nombre_instituto: formValue.nombre_instituto
        };
        console.log(objCarrera);
        setOpenAgregar(false)
        
        createCarrera(objCarrera).then((rpta) => {
            console.log(rpta);
            setCarreras('');
        });
        window.location.reload(false) 
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
                    sx={{ padding: '0px 20px' }}
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Grid item>
                        <Titulos component="h2" titulogrande>
                            Carreras
                        </Titulos>
                    </Grid>
                    <Grid item>
                        <Button
                            variant="contained"
                            color="success"
                            onClick={handleOpenAgregar}
                        >
                            Agregar Carrera
                        </Button>
                        <Modal
                            open={openAgregar}
                            onClose={handleCloseAgregar}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    width: 400,
                                    bgcolor: 'background.paper',
                                    border: '2px solid #000',
                                    boxShadow: 24,
                                    p: 4
                                }}
                            >
                                    <Grid container spacing={2}>
                                        <Titulos component="h2">
                                            Agregar Carrera
                                        </Titulos>
                                        <Grid item xs={12}>
                                            <StandardInput
                                                label="Nombre de la Carrera"
                                                name="nombre_carrera"
                                                value={formValue.nombre_carrera}
                                                onChange={handleChange}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <StandardInput
                                                label="Nombre del Instituto"
                                                name="nombre_instituto"
                                                value={
                                                    formValue.nombre_instituto
                                                }
                                                onChange={handleChange}
                                            />
                                        </Grid>
                                        <Grid item
                                            container
                                            justifyContent="space-between"

                                            xs={12}
                                        >
                                            <Button
                                                variant="contained"
                                                color="success"
                                                type="submit"
                                                onClick={handleSubmit}
                                            >
                                                Agregar
                                            </Button>

                                            <Button
                                                variant="contained"
                                                color="error"
                                                onClick={handleCloseAgregar}
                                            >
                                                Cancelar
                                            </Button>

                                        </Grid>

                                    </Grid>

                            </Box>
                        </Modal>
                    </Grid>

                </GridTop>


                <Grid
                    item
                    container
                    xs={11.5}
                    md={7}
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-end'
                    }}
                >
                    <Paper sx={{ width: '100%', overflow: 'hidden', boxShadow: 5 }}>
                        <TableContainer sx={{ maxHeight: 440 }}>
                            <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    {columns.map((column) => (
                                        <TableCell
                                            key={column.id}
                                            align={column.align}
                                            style={{
                                                minWidth: column.minWidth,
                                                fontWeight: 'bold'
                                            }}
                                        >
                                            {column.label}
                                        </TableCell>
                                    ))}

                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => {
                                        return (
                                            <TableRow
                                                hover
                                                tabIndex={-1}
                                                key={row.code}
                                            >
                                                {columns.map((column) => {
                                                    const value = row[column.id];
                                                    return (
                                                        <TableCell
                                                            key={column.id}
                                                            align={column.align}
                                                        >
                                                            {formatearCelda(column, value)}
                                                        </TableCell>
                                                    );
                                                })}
                                                <TableCell>

                                                    <IconButton onClick={handleOpenEditar} aria-label="edit">
                                                        <EditIcon 
                                                        />
                                                    </IconButton>
                                                    <Modal
                                                        open={openEditar}
                                                        onClose={handleCloseEditar}
                                                        aria-labelledby="modal-modal-title"
                                                        aria-describedby="modal-modal-description"
                                                    >
                                                        <Box
                                                            sx={{
                                                                position: 'absolute',
                                                                top: '50%',
                                                                left: '50%',
                                                                transform: 'translate(-50%, -50%)',
                                                                width: 400,
                                                                bgcolor: 'background.paper',
                                                                border: '2px solid #000',
                                                                boxShadow: 24,
                                                                p: 4
                                                            }}
                                                        >
                                                                <Grid container spacing={2}>
                                                                    <Titulos component="h2">
                                                                        Agregar Carrera
                                                                    </Titulos>
                                                                    <Grid item xs={12}>
                                                                        <StandardInput
                                                                            label="Nombre de la Carrera"
                                                                            name="nombre_carrera"
                                                                            value={formValue.nombre_carrera}
                                                                            onChange={handleChange}
                                                                        />
                                                                    </Grid>
                                                                    <Grid item xs={12}>
                                                                        <StandardInput
                                                                            label="Nombre del Instituto"
                                                                            name="nombre_instituto"
                                                                            value={
                                                                                formValue.nombre_instituto
                                                                            }
                                                                            onChange={handleChange}
                                                                        />
                                                                    </Grid>
                                                                    <Grid item
                                                                        container
                                                                        justifyContent="space-between"

                                                                        xs={12}
                                                                    >
                                                                        <Button
                                                                            variant="contained"
                                                                            color="success"
                                                                            type="submit"
                                                                            onClick={handleUpdate}
                                                                        >
                                                                            Agregar
                                                                        </Button>

                                                                        <Button
                                                                            variant="contained"
                                                                            color="error"
                                                                            onClick={handleCloseEditar}
                                                                        >
                                                                            Cancelar
                                                                        </Button>

                                                                    </Grid>

                                                                </Grid>
                                                        </Box>
                                                    </Modal>

                                                    <IconButton aria-label="delete">
                                                        <DeleteIcon />
                                                    </IconButton>
                                                </TableCell>
                                            </TableRow>
                                        );
                                    })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
    );
};

export { PageCRUDCarreras };