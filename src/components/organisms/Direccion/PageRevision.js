import { Grid } from '@mui/material';
import React from 'react';
import { Header } from '../../../Header';
import { Titulos } from '../../atoms/Title/Titulos';
import { GridTop } from '../../../GridTop';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { DateTime } from 'luxon';

const columns = [
    { id: 'desc', label: 'Solicitante', minWidth: 170 },
    { id: 'dateTime', label: 'Email', minWidth: 100 },
    { id: 'state', label: 'DNI', minWidth: 170 },
    { id: 'actions', label: 'Fecha', minWidth: 170 },
    { id: 'phone', label: 'Teléfono', minWidth: 170 }
];

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Josecito', 'josesito@gmail.com', '11111111', '14/04/2022', '1100000000')
  ];



const PageRevision = () => {
    return (
        <Grid container direction="column">
            <Grid item container xs={12}>
                <Header name="Equivalencias" />

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
                        <Titulos component="h2" tituloGrande>
                            Revisión
                        </Titulos>
                    </Grid>

                </GridTop>

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
                        height: 'auto'
                    }}
                >

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
                                                align= 'center'
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
                                    {rows.map((row) => (
                                    <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell align = 'center' component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="center">{row.calories}</TableCell>
                                        <TableCell align="center">{row.fat}</TableCell>
                                        <TableCell align="center">{row.carbs}</TableCell>
                                        <TableCell align="center">{row.protein}</TableCell>
                                    </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>

                    
                </GridTop>

            </Grid>
             
        </Grid>

        
            
    );
};

export {PageRevision};