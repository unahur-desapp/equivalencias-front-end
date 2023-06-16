// import * as React from 'react';
import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import {
    getEquivalencia,
    getEquivalenciaUsuario
} from '../../services/equivalencia_service';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import { ActionButtons } from '../../ActionButtons';

export default function TablaEquivalencias({ searchQuery, rol }) {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [rows, setRows] = useState([]);
    console.log(rol);
    const getColumns = () => {
        if (rol === 'directivo') {
            return [
                { id: 'dni', label: 'DNI', minWidth: 100 },
                { id: 'solicitante', label: 'Solicitante', minWidth: 170 },
                { id: 'materia', label: 'Materias Solicitadas', minWidth: 170 },
                { id: 'dateTime', label: 'Fecha', minWidth: 100 },
                { id: 'estado', label: 'Estado', minWidth: 170 },
                { id: 'actions', label: 'Acciones', minWidth: 100 }
            ];
        } else {
            return [
                { id: 'carrera', label: 'Carrera', minWidth: 170 },
                { id: 'materia', label: 'Materias solicitadas', minWidth: 170 },
                { id: 'dateTime', label: 'Fecha', minWidth: 100 },
                { id: 'estado', label: 'Estado', minWidth: 170 },
                { id: 'actions', label: 'Visualizar', minWidth: 170 }
            ];
        }
    };
    const columns = getColumns();

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const createData = (
        materia,
        dateTime,
        estado,
        solicitante,
        dni,
        id,
        carrera
    ) => {
        const actions = (
            <Grid
                container
                item
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                {rol === 'directivo' ? (
                    <Link
                        to={'/direccion/revision/' + id}
                        style={{ textDecoration: 'none' }}
                    >
                        <ActionButtons></ActionButtons>
                    </Link>
                ) : (
                    <Link
                        to={'/usuario/visualizar/' + id}
                        style={{ textDecoration: 'none' }}
                    >
                        <ActionButtons></ActionButtons>
                    </Link>
                )}
            </Grid>
        );
        if (rol === 'directivo') {
            return { solicitante, dni, materia, dateTime, actions, estado };
        } else {
            return { carrera, materia, dateTime, estado, actions };
        }
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    useEffect(() => {
        const fetchEquivalenciaData = async () => {
            let obtainedEquivalenciaData = [];
            if (rol === 'directivo') {
                obtainedEquivalenciaData = await getEquivalencia();
            } else {
                const usuarioId = parseInt(
                    JSON.parse(localStorage.getItem('id'))
                );
                obtainedEquivalenciaData = await getEquivalenciaUsuario(
                    usuarioId
                );
            }

            let array = [];

            obtainedEquivalenciaData.forEach(function (arrayItem) {
                let d = new Date(arrayItem.Materias_solicitadas[0].createdAt);
                let dateTime =
                    d.getDate() +
                    '/' +
                    (d.getMonth() + 1) +
                    '/' +
                    d.getFullYear();
                let carrera = arrayItem.carrera;
                var status = arrayItem.estado.toUpperCase();
                array.push(
                    createData(
                        arrayItem.Materias_solicitadas[0].nombre,
                        dateTime,
                        status,
                        arrayItem.Usuario.nombre +
                            ' ' +
                            arrayItem.Usuario.apellido,
                        arrayItem.Usuario.dni,
                        arrayItem.id,
                        carrera
                    )
                );
                if (rol === 'directivo') {
                    let dataFilter = array;
                    switch (searchQuery.column) {
                        case 'dni':
                            dataFilter = array.filter((d) =>
                                d.dni
                                    .toString()
                                    .toLowerCase()
                                    .includes(searchQuery.value.toLowerCase())
                            );
                            break;
                        case 'solicitante':
                            dataFilter = array.filter((d) =>
                                d.solicitante
                                    .toLowerCase()
                                    .includes(searchQuery.value.toLowerCase())
                            );
                            break;
                        case 'materia':
                            dataFilter = array.filter((d) =>
                                d.materia
                                    .toLowerCase()
                                    .includes(searchQuery.value.toLowerCase())
                            );
                            break;
                        case 'estado':
                            dataFilter = array.filter((d) =>
                                d.estado
                                    .toLowerCase()
                                    .includes(searchQuery.value.toLowerCase())
                            );
                            break;
                        default:
                            dataFilter = array;
                            break;
                    }
                    if (searchQuery) {
                        setRows(dataFilter);
                        setPage(0);
                    } else {
                        setRows([...array]);
                    }
                } else {
                    setRows([...array]);
                }
            });
            console.table([columns, array]);
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