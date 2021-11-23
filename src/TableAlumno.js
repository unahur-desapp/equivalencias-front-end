import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { ActionButtons } from './ActionButtons';
import { getEquivalencia } from './services/equivalencia_service';
import { useState, useEffect } from 'react';


const columns = [
    { id: 'desc', label: 'Descripción', minWidth: 170 },
    { id: 'dateTime', label: 'Fecha y hora', minWidth: 100 },
    { id: 'state', label: 'Estado', minWidth: 170 },
    { id: 'actions', label: 'Acciones', minWidth: 170 }
];

function createData(desc, dateTime, state) {
    const actions = <ActionButtons />;
    return { desc, dateTime, state, actions };
}




export default function StickyHeadTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const [equivalenciaData, setEquivalenciaData] = useState();

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const rows = [
    
        equivalenciaData
        ? createData(`Solicitud de ${equivalenciaData.data['nombre_universidad']}`, "20-12-2021", "Aceptado")
        : createData(`Cargando datos`, "20-12-2021", "Aceptado")
        // createData(`${equivalenciaData}`, "20-12-2021", "Aceptado")

        // createData('Solicitud de Bases de Datos', '26/08/21 18:00', 'En espera'),
        // createData('Solicitud de Matemática II', '22/08/21 15:30', 'Aceptado'),
        // createData('Solicitud de Introducción a la Programación', '20/08/21 16:15', 'Rechazado')
    ];
    

    useEffect( () => {
        const fetchEquivalenciaData = async () => {
            const obtainedEquivalenciaData = await getEquivalencia(1);
            console.log(obtainedEquivalenciaData)
            setEquivalenciaData(obtainedEquivalenciaData)
        }
        
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
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
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
