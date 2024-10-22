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
import { getUsuario_carrera } from '../../services/usuarios_carreras_service';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import { ActionButtons } from '../atoms/Button/ActionButtons';
import NotificationsActiveTwoToneIcon from '@mui/icons-material/NotificationsActiveTwoTone';

export default function TablaEquivalencias({ searchQuery }) {
    const rol = JSON.parse(localStorage.getItem('rol'));
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [rows, setRows] = useState([]);
    //console.log(rol);
    const getColumns = () => {
        if (rol === 'directivo' || rol === 'superusuario') {
            return [ 
                { id: 'UnviersidadOrigen', label: 'Universidad', minWidth: 170 }, 
                { id: 'Materia_aprobada', label: 'Materia Aprobada', minWidth: 170 }, 
                { id: 'Materia_solicitada', label: 'Materia equivalente UNAHUR', minWidth: 170 },
                { id: 'updatedAt', label: 'Fecha ultima incorporación', minWidth: 100 }, 
            ];
        } else {
            return [ //rol alumno, falta modificar ids y pensar si el formato es el que queremos mostrar
                { id: 'UnviersidadOrigen', label: 'Universidad', minWidth: 170 }, // Mostrar universidad de donde proviene el alumno
                { id: 'Materia_aprobada', label: 'Materia Aprobada', minWidth: 170 }, // Materia que aprobo el alumno en su universidad anterior
                { id: 'Materia_solicitada', label: 'Materia equivalente UNAHUR', minWidth: 170 }, //Materia unahur con la que ya se realizo equivalencia previa
                { id: 'updatedAt', label: 'Fecha ultima incorporación', minWidth: 100 }, // Fecha de la ultima vez que se realizo esta equivalencia para algun alumno
            ];
        }
    };
    const columns = getColumns();

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const createData = (
        UnviersidadOrigen,
        Materia_aprobada,
        Materia_solicitada,
        updatedAt,
    ) => {
        if (rol === 'directivo' || rol === 'superusuario') {
            return {
                UnviersidadOrigen,
                Materia_aprobada,
                Materia_solicitada,
                updatedAt,
            };
        } else {
            return { UnviersidadOrigen, Materia_aprobada, Materia_solicitada, updatedAt, };
        }
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    const carre = [];

    const fetchCarrerasData = async () => {
        //if (rol === 'directivo') {
            carre.push(
                await getUsuario_carrera(JSON.parse(localStorage.getItem('id')))
            );
        //} No necesitariamos especificar por rol ya que en primera instancia todos tendran acceso a la misma información 
    };
    fetchCarrerasData();

    useEffect(() => {
        const fetchEquivalenciaData = async () => {

            let obtainedEquivalenciaData = [];

            //Siguen los roles por separado para facilitar las modificaciones a futuro
            if (rol === 'directivo') {
                obtainedEquivalenciaData = await getEquivalencia(); //Seguramente el get sea distinto
            } else if (rol === 'superusuario') {
                obtainedEquivalenciaData = await getEquivalencia();
            } else {
                obtainedEquivalenciaData = await getEquivalencia();
            }

            let array = [];

            obtainedEquivalenciaData.forEach(function (arrayItem) {
                let d = new Date(arrayItem.Materia_solicitadas[0].createdAt);
                
                
                let carrera = arrayItem.Materia_solicitadas[0].carrera;

                
                
                let array2 = [];

                array.push(
                    createData(
                        filterNameMat(arrayItem.Materia_solicitadas),
                        dateTime,
                        arrayItem.Usuario.nombre +
                            ' ' +
                            arrayItem.Usuario.apellido,
                        arrayItem.Usuario.dni,
                        actions,
                        carrera
                    )
                );
                if (rol === 'directivo') {
                    let carreras = carre[0].map(
                        (carrera) => carrera.Carrera.nombre_carrera
                    ); //mapea las carreras del directivo
                    let dataFilter = [];
                    array2 = array.filter((usuario) =>
                        carreras.includes(usuario.carrera)
                    );
                    switch (searchQuery.column) {
                        case 'Unviersidad':
                            dataFilter = array2.filter((d) =>
                                d.UnviersidadOrigen
                                    .toString()
                                    .toLowerCase()
                                    .includes(searchQuery.value.toLowerCase())
                            );
                            break;
                        case 'Materia Aprobada':
                            dataFilter = array2.filter((d) =>
                                d.Materia_aprobada
                                    .toLowerCase()
                                    .includes(searchQuery.value.toLowerCase())
                            );
                            break;
                        case 'Materia UNAHUR':
                            dataFilter = array2.filter((d) =>
                                d.Materia_solicitada
                                    .toLowerCase()
                                    .includes(searchQuery.value.toLowerCase())
                            );
                            break;
                            case 'Fecha ultima incorporacion':
                            dataFilter = array2.filter((d) =>
                                d.updatedAt
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
                } else if (rol == 'superusuario') {
                    let dataFilter = [];
                    switch (searchQuery.column) {
                        case 'Unviersidad':
                            dataFilter = array2.filter((d) =>
                                d.UnviersidadOrigen
                                    .toString()
                                    .toLowerCase()
                                    .includes(searchQuery.value.toLowerCase())
                            );
                            break;
                        case 'Materia Aprobada':
                            dataFilter = array2.filter((d) =>
                                d.Materia_aprobada
                                    .toLowerCase()
                                    .includes(searchQuery.value.toLowerCase())
                            );
                            break;
                        case 'Materia UNAHUR':
                            dataFilter = array2.filter((d) =>
                                d.Materia_solicitada
                                    .toLowerCase()
                                    .includes(searchQuery.value.toLowerCase())
                            );
                            break;
                            case 'Fecha ultima incorporacion':
                            dataFilter = array2.filter((d) =>
                                d.updatedAt
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
            <TableContainer sx={{ maxHeight: 500 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={'center'}
                                    style={{ minWidth: column.minWidth }}
                                    sx={{
                                        backgroundColor: 'rgba(245, 245, 245)',
                                        padding: '16px 40px'
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
                                                    align="center"
                                                    sx={{
                                                        padding: '1rem 2rem'
                                                    }}
                                                >
                                                    {value}
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
