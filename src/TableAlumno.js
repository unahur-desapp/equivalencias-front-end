import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Chip from '@mui/material/Chip';
import { Grid } from '@mui/material';
import { ActionButtons } from './ActionButtons';
import { getEquivalencia } from './services/equivalencia_service';
import { useState, useEffect } from 'react';

const columns = [
    { id: 'desc', label: 'Descripción', minWidth: 170 },
    { id: 'dateTime', label: 'Fecha y hora', minWidth: 100 },
    { id: 'stateS', label: 'Estado', minWidth: 170 },
    { id: 'actions', label: 'Visualizar', minWidth: 170 }
];

function createData(desc, dateTime, state) {
    const actions = <ActionButtons />;
    // const stateS = (
    //     <Stack spacing={1} alignItems="center">
    //         <Stack direction="row" spacing={1}>
    //             <Chip label="Falta completar" color="info" />;
    //         </Stack>
    //     </Stack>
    // );
    const stateS =
        state === 'Falta completar' ? (
            <Grid
                container
                item
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Chip
                    label="Falta completar"
                    sx={{
                        backgroundColor: 'rgba(0, 0, 0, 0.17)',
                        color: 'rgba(0, 0, 0, 0.87)'
                    }}
                />
            </Grid>
        ) : state === 'Aceptado' ? (
            <Grid
                container
                item
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Chip
                    label="Aceptado"
                    sx={{
                        backgroundColor: 'rgba(25, 118, 210, 0.17)',
                        color: '#1976d2'
                    }}
                />
            </Grid>
        ) : (
            <Grid
                container
                item
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Chip
                    label="Rechazado"
                    sx={{
                        backgroundColor: 'rgba(211, 47, 47, 0.17)',
                        color: '#d32f2f'
                    }}
                />
            </Grid>
        );

    return { desc, dateTime, stateS, actions };
}

const horaConCero = (hora) => {
    if (hora < 10) {
        return `0${hora}`;
    } else {
        return hora;
    }
};

export default function StickyHeadTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [rows, setRows] = useState([]);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    useEffect(() => {
        const fetchEquivalenciaData = async () => {
            const obtainedEquivalenciaData = await getEquivalencia();
            let arrayData = [];

            obtainedEquivalenciaData.forEach(function (arrayItem) {
                let d = new Date(arrayItem.Materias_solicitadas[0].createdAt);
                let dateTime =
                    d.getDate() +
                    '/' +
                    (d.getMonth() + 1) +
                    '/' +
                    d.getFullYear() +
                    ' - ' +
                    d.getHours() +
                    ':' +
                    horaConCero(d.getMinutes());

                arrayData.push(
                    createData(
                        arrayItem.Materias_solicitadas[0].nombre,
                        dateTime,
                        arrayItem.estado

                        // arrayItem.Estado[0].en_proceso
                    )
                );
            });

            setRows(arrayData);
            console.log('array data: ', arrayData);
            console.log(obtainedEquivalenciaData);
        };

        fetchEquivalenciaData();
    }, []);

    return (
        <Paper
            sx={{
                width: '100%',
                overflow: 'hidden',
                borderRadius: '10px',
                boxShadow: 'none'
            }}
        >
            <TableContainer sx={{ height: 'auto' }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    // align={column.align}

                                    align={
                                        column.label === 'Visualizar' ||
                                        column.label === 'Estado'
                                            ? 'center'
                                            : 'left'
                                    }
                                    style={{ minWidth: column.minWidth }}
                                    sx={{
                                        backgroundColor: '#FBFBFB',
                                        padding: '16px 60px'
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
                                                        padding: '16px 60px'
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
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
