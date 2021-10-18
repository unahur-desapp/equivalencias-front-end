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

            <Grid item container sx={{ padding: '60px 0px' }}>
                <Grid item xs={0} sm={2} />
                <GridTop
                    item
                    xs={12}
                    sm={8}
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Grid item>
                        <Titulos component="h2" tituloGrande>
                            Equivalencias
                        </Titulos>
                    </Grid>

                    <Grid item>
                        <BotonMUI
                            buttonContainedSmall
                            variant="outlined"
                            startIcon={<AddIcon />}
                        >
                            Crear
                        </BotonMUI>
                    </Grid>
                </GridTop>
                <Grid item xs={0} sm={2} />
            </Grid>
        </Grid>
    );
};

export { GridPrueba };
