import { Grid, TextareaAutosize } from '@mui/material';
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
import TableRow from '@mui/material/TableRow';
import { BotonMUI } from '../../atoms/Button/BotonMUI';
import { TextField } from '@mui/material';

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
    createData(
        'Josecito',
        'josesito@gmail.com',
        '11111111',
        '14/04/2022',
        '1100000000'
    )
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
                            borderRadius: '10px 10px 0px 0px',
                            boxShadow: 'none',
                            borderBottom: '1px solid #dadce0'
                        }}
                    >
                        <TableContainer sx={{ maxHeight: 440 }}>
                            <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>
                                        {columns.map((column) => (
                                            <TableCell
                                                key={column.id}
                                                align="center"
                                                style={{
                                                    minWidth: column.minWidth
                                                }}
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
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="center">
                                                {row.calories}
                                            </TableCell>
                                            <TableCell align="center">
                                                {row.fat}
                                            </TableCell>
                                            <TableCell align="center">
                                                {row.carbs}
                                            </TableCell>
                                            <TableCell align="center">
                                                {row.protein}
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
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Aut architecto, eos vero ipsa magni aliquid
                            distinctio iure quidem numquam, rem beatae neque
                            tenetur ex nemo suscipit consectetur ut veniam! Hic.
                        </p>

                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Aut architecto, eos vero ipsa magni aliquid
                            distinctio iure quidem numquam, rem beatae neque
                            tenetur ex nemo suscipit consectetur ut veniam! Hic.
                        </p>

                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Aut architecto, eos vero ipsa magni aliquid
                            distinctio iure quidem numquam, rem beatae neque
                            tenetur ex nemo suscipit consectetur ut veniam! Hic.
                        </p>

                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Aut architecto, eos vero ipsa magni aliquid
                            distinctio iure quidem numquam, rem beatae neque
                            tenetur ex nemo suscipit consectetur ut veniam! Hic.
                        </p>

                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Aut architecto, eos vero ipsa magni aliquid
                            distinctio iure quidem numquam, rem beatae neque
                            tenetur ex nemo suscipit consectetur ut veniam! Hic.
                        </p>
                    </Grid>

                    <Grid
                        item
                        container
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="center"
                        sm={12}
                        padding={{
                            xs: '30px 30px',
                            sm: '30px 60px'
                        }}
                        sx={{
                            height: 'auto',
                            borderRadius: '10px 10px 0px 0px'
                        }}
                    >
                        {/* <Grid
                            item
                            container
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                            sm={12}
                            sx={{
                                padding: '0px 0px 20px 0px'
                            }}
                        >
                            <p
                                style={{
                                    color: 'rgba(0, 0, 0, 0.87)',
                                    fontWeight: 500
                                }}
                            >
                                
                                Devolución
                            </p>
                        </Grid> */}

                        <Grid
                            item
                            container
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                            sm={12}
                        >
                            <Grid
                                item
                                container
                                direction="row"
                                justifyContent="flex-start"
                                alignItems="center"
                                sm={9}
                            >
                                {/* <TextareaAutosize
                                    style={{
                                        width: '100%',
                                        height: '206px',
                                        resize: 'none',
                                        fontFamily: 'roboto',
                                        fontSize: '16px',
                                        padding: '18px 14px',
                                        background: '#f8f9fa',
                                        borderStyle: 'none',
                                        borderRadius: '5px 0px 0px 0px',
                                        borderBottom: '1px solid #80868b',
                                        outline: 'none'
                                    }}
                                    placeholder="Observación..."
                                /> */}

                                <TextField
                                    id="filled-basic"
                                    label="Observación..."
                                    variant="filled"
                                    multiline
                                    rows={10}
                                    sx={{
                                        width: '100%'
                                    }}
                                />
                            </Grid>

                            <Grid
                                item
                                container
                                direction="column"
                                justifyContent="center"
                                alignItems="center"
                                sm={3}
                            >
                                <BotonMUI
                                    buttonContainedSmall
                                    sx={{
                                        background: '#348FDC',
                                        '&:hover': {
                                            background: '#2380D1'
                                        },
                                        marginBottom: '10px'
                                    }}
                                >
                                    Responder
                                </BotonMUI>

                                {/* <BotonMUI
                                    buttonContainedSmall
                                    sx={{
                                        background: '#009673',
                                        '&:hover': {
                                            background: '#007A5E'
                                        },
                                        marginBottom: '10px'
                                    }}
                                >
                                    Solicitar +
                                </BotonMUI> */}

                                {/* <BotonMUI
                                    buttonContainedSmall
                                    sx={{
                                        background: '#E74924',
                                        '&:hover': {
                                            background: '#CA3716'
                                        }
                                    }}
                                >
                                    Rechazar
                                </BotonMUI> */}
                            </Grid>
                        </Grid>
                    </Grid>
                </GridTop>
            </Grid>
        </Grid>
    );
};

export { PageRevision };
