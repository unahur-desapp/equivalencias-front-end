import { Grid } from '@mui/material';
import { Header } from '../../../Header';
import { GridTop } from '../../../GridTop';
import { Titulos } from '../../atoms/Title/Titulos';
import { BotonMUI } from '../../atoms/Button/BotonMUI';
// import StickyHeadTable from '../../../TableAlumno';
import StickyHeadTable  from '../Direccion/TablaDireccion';
import FreeSolo  from '../Direccion/buscadorDireccion';
import React from 'react';
// import { Link } from 'react-router-dom';
// import TextField from '@mui/material/TextField';
// import Stack from '@mui/material/Stack';
// import Autocomplete from '@mui/material/Autocomplete';

const PageDireccion = () => {
    return (
        <Grid container direction="column">
            <Grid item container xs={12}>
                <Header name="Mis equivalencias" />
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
                        Solicitudes de equivalencias
                        </Titulos>
                    </Grid>
                </GridTop>

                <GridTop
                    item
                    container
                    blanco
                    search
                    searchPlaceholder
                    searchProps
                    debounceSearchRender
                    xs={11.5}
                    md={7}
                    marginTop={{
                        xs: '30px'
                    }}
                    sx={{
                        height: '80px'
                    }}
                >
                    {/* ENTRE ESTE  */}
                    <Grid item>
                    <FreeSolo />
                        {/* <Link to="/form" style={{textDecoration: 'none'}}>
                            <BotonMUI
                                buttonContainedSmall
                                sx={{
                                    width: '100%'
                                }}
                            >
                                Buscar 
                            </BotonMUI>
                        </Link> */}

                    </Grid>
                    {/* Y ESTE, VA EL SEARCH */}
                </GridTop>
                <GridTop
                    item
                    container
                    blanco
                    xs={11.5}
                    md={7}
                    marginTop={{
                        xs: '8px'
                    }}
                    sx={{
                        height: 'auto'
                    }}
                >
                    <StickyHeadTable />
                </GridTop>
            </Grid>
        </Grid>
    );
};

export { PageDireccion };
