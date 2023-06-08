// import * as React from 'react';
import React, { useState, useMemo, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { getEquivalencia } from '../../../services/equivalencia_service';
import { getUsuario } from '../../../services/usuario_service';
// import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
// import { OuterFormButtons } from '../../../OuterFormButtons';
import FormHelperText from '@mui/material/FormHelperText';
import { useFormControl } from '@mui/material/FormControl';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';

// import TextField from '@mui/material/TextField';
// import Stack from '@mui/material/Stack';
// import Autocomplete from '@mui/material/Autocomplete';
// import { getEquivalencia } from './services/equivalencia_service';

export const columns = [
    { id: 'dni', label: 'DNI', minWidth: 100 },
    { id: 'solicitante', label: 'Solicitante', minWidth: 170 },
    { id: 'materia', label: 'Materia', minWidth: 170 },
    { id: 'dateTime', label: 'Fecha y Hora', minWidth: 100 },
    { id: 'estado', label: 'Estado', minWidth: 170 },
    { id: 'actions', label: 'Acciones', minWidth: 100 } // Columna estado agregada!
];

function createData(solicitante, dni, materia, id, dateTime, estado) {
    const actions = (
        <Grid
            container
            item
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            <Link
                to={'/direccion/revision/' + id}
                style={{ textDecoration: 'none' }}
            >
                <Button>Revisar</Button>
            </Link>
        </Grid>
    ); //acciones lleva a pantalla revision de ese id
    return { solicitante, dni, materia, dateTime, actions, estado };
}

const horaConCero = (hora) => {
    if (hora < 10) {
        return `0${hora}`;
    } else {
        return hora;
    }
};

const getEstado = () => {};

export default function StickyHeadTable({ searchQuery }) {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [rows, setRows] = useState([]);
    const [arrayData, setArrayData] = useState([]);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    // const [searchQuery, setSearchQuery] = useState('');
    // console.log(searchQuery);

    useEffect(() => {
        const fetchEquivalenciaData = async () => {
            const obtainedEquivalenciaData = await getEquivalencia();

            let array = [];

            obtainedEquivalenciaData.forEach(function (arrayItem) {
                let d = new Date(arrayItem.Materias_solicitadas[0].createdAt); //tengo que traer solicitantes
                let dateTime =
                    // d.getDate() + '/' + d.getMonth() + '/' + d.getFullYear();
                    d.getDate() +
                    '/' +
                    (d.getMonth() + 1) +
                    '/' +
                    d.getFullYear() +
                    ' - ' +
                    d.getHours() +
                    ':' +
                    horaConCero(d.getMinutes());
                var status = arrayItem.estado.toUpperCase();
                array.push(
                    createData(
                        // arrayItem.Materias_solicitadas[0].nombre ----falta esto
                        // arrayItem.Materias_solicitadas[0].Usuario.id,
                        // arrayItem.Materias_solicitadas[0].usuario.dni,
                        // arrayItem.Materias_solicitadas[0].id,
                        arrayItem.Usuario.nombre +
                            ' ' +
                            arrayItem.Usuario.apellido,
                        arrayItem.Usuario.dni,
                        arrayItem.Materias_solicitadas[0].nombre,
                        arrayItem.id,
                        // arrayItem.Materias_solicitadas[0],
                        dateTime,
                        status
                        //fecha actual de cuando se genero la equivalencia
                        //arrayItem.Estado[0].status
                    )
                );
                let dataFilter = array;
                switch (searchQuery.column) {
                    case 'dni':
                        dataFilter = array.filter((d) =>
                            d.dni
                                .toString()
                                .toLowerCase()
                                .includes(searchQuery.value.toLowerCase())
                        );
                        console.log(
                            'entro a dni',
                            searchQuery.value,
                            dataFilter
                        );
                        break;
                    case 'solicitante':
                        dataFilter = array.filter((d) =>
                            d.solicitante
                                .toLowerCase()
                                .includes(searchQuery.value.toLowerCase())
                        );
                        console.log(
                            'entro a solicitante',
                            searchQuery.value,
                            dataFilter
                        );
                        break;
                    case 'materia':
                        dataFilter = array.filter((d) =>
                            d.materia
                                .toLowerCase()
                                .includes(searchQuery.value.toLowerCase())
                        );
                        console.log(
                            'entro a materia',
                            searchQuery.value,
                            dataFilter
                        );
                        break;
                    case 'estado':
                        dataFilter = array.filter((d) =>
                            d.estado
                                .toLowerCase()
                                .includes(searchQuery.value.toLowerCase())
                        );
                        console.log(
                            'entro a estado',
                            searchQuery.value,
                            dataFilter
                        );
                        break;
                    default:
                        dataFilter = array;
                        console.log(
                            'entro a default',
                            searchQuery.value,
                            dataFilter
                        );
                        break;
                }
                if (searchQuery) {
                    setRows(dataFilter);
                    setPage(0);
                } else {
                    setRows([...array]);
                }
            });
        };
        fetchEquivalenciaData();
    }, [searchQuery]);

    return (
        <Paper
            sx={{
                width: '100%',
                overflow: 'hidden',
                borderRadius: '10px',
                boxShadow: 'none'
            }}
        >
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={
                                        column.label === 'Acciones'
                                            ? 'center'
                                            : 'left'
                                    }
                                    style={{ minWidth: column.minWidth }}
                                    sx={{
                                        backgroundColor: 'azure',
                                        padding: '16px 40px',
                                        fontSize: '1.2rem'
                                    }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(
                                page * rowsPerPage,
                                page * rowsPerPage + rowsPerPage
                            )
                            .map((row) => {
                                return (
                                    <TableRow
                                        hover
                                        role="checkbox"
                                        tabIndex={-1}
                                        key={row.code}
                                    >
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell
                                                    key={column.id}
                                                    align={column.align}
                                                    sx={{
                                                        padding: '16px 40px'
                                                    }}
                                                >
                                                    {column.format &&
                                                    typeof value === 'number'
                                                        ? column.format(value)
                                                        : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={rows.length}
                labelRowsPerPage="Filas por página:"
                labelDisplayedRows={({ from, to, count }) =>
                    `${from}-${to} de ${count}`
                }
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
