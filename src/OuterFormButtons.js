import React from 'react';
import { Grid } from '@mui/material';
import { BotonMUI } from './components/atoms/Button/BotonMUI';

const OuterFormButtons = () => {
    return (
        <Grid
            item
            container
            xs={11.5}
            md={7}
            marginTop={{
                xs: '20px'
            }}
            sx={{
                padding: '20px 60px'
            }}
        >
            <Grid
                item
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                lg={6}
            >
                {/* <BotonMUI buttonContainedAddEq>
                    Agregar equivalencia
                </BotonMUI> */}
            </Grid>

            <Grid
                item
                container
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
                xs={12}
                lg={6}
            >
                <Grid item container xs={6}>
                    <BotonMUI
                        buttonContainedCancel
                        sx={{
                            width: '100%'
                        }}
                    >
                        Cancelar
                    </BotonMUI>
                </Grid>

                <Grid item container xs={6}>
                    <BotonMUI
                        buttonContainedSmall
                        sx={{
                            marginLeft: '12px',
                            width: '100%'
                        }}
                    >
                        Enviar
                    </BotonMUI>
                </Grid>
            </Grid>
        </Grid>
    );
};

export { OuterFormButtons };
