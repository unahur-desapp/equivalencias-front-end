import { Grid } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Header } from './Header';
import { GridTop } from './GridTop';
import { Titulos } from './components/atoms/Title/Titulos';
import { BotonMUI } from './components/atoms/Button/BotonMUI';
import { CreateForm } from './CreateForm';
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
                            Formulario
                        </Titulos>
                    </Grid>

                    <Grid item>
                        <BotonMUI buttonContainedSmall variant="outlined">
                            Enviar
                        </BotonMUI>
                    </Grid>
                </GridTop>

                <CreateForm />
            </Grid>
        </Grid>
    );
};

export { GridPrueba };
