import { Grid } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Header } from './Header';
import { GridTop } from './GridTop';
import { Titulos } from './components/atoms/Title/Titulos';
import { BotonMUI } from './components/atoms/Button/BotonMUI';
import React from 'react';

const GridPrueba = () => {
    return (
        <Grid container direction="column">
            <Grid item container>
                <Header />
            </Grid>

            <Grid
                item
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{ padding: '60px 0px' }}
            >
                <GridTop
                    item
                    container
                    xs={12}
                    sm={8}
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Grid item>
                        <Titulos component="h2" tituloGrande>
                            Formulario
                        </Titulos>
                    </Grid>

                    <Grid item>
                        <BotonMUI buttonContainedSmall variant="outlined">
                            Enviar
                        </BotonMUI>
                    </Grid>
                </GridTop>

                <GridTop
                    item
                    container
                    xs={12}
                    sm={8}
                    direction="row"
                    sx={{
                        height: '370px',
                        margin: '50px',
                        paddingTop: '25px',
                        paddingBottom: '25px'
                    }}
                >
                    Formulario
                </GridTop>
            </Grid>
        </Grid>
    );
};

export { GridPrueba };
