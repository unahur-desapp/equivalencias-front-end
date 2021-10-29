import { Grid } from '@mui/material';
import { StandardInput } from './components/atoms/Input/InputMUI';
import { Titulos } from './components/atoms/Title/Titulos';
import React from 'react';
import { GridTop } from './GridTop';
import { FormUniOrigen } from './FormUniOrigen';

const CreateForm = () => {
    return (
        <GridTop
            item
            container
            blanco
            xs={11.5}
            sm={7}
            marginTop={{
                xs: '30px'
            }}
            sx={{
                height: 'auto'
            }}
        >
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
                    borderBottom: '1px solid #DADCE0',
                    borderRadius: '10px 10px 0px 0px'
                }}
            >
                <Grid
                    item
                    container
                    direction="column"
                    alignItems="flex-start"
                    /*sx={{
                        height: 'auto'
                    }}*/
                >
                    <Titulos tituloLabel component="h2">
                        Universidad Nacional de Hurlingham
                    </Titulos>
                </Grid>
                <Grid
                    item
                    container
                    direction="column"
                    alignItems="flex-start"
                    md={12}
                    lg={5.4}
                    sx={{
                        marginTop: '6px'
                    }}
                    /*width={{md:"100%", lg:"45%"}}
                    sx={{
                        height: 'auto'
                    }}*/
                >
                    <StandardInput
                        required
                        size="normal"
                        label="Materia solicitada UNAHUR"
                        variant="standard"
                    />
                </Grid>
            </Grid>

            <FormUniOrigen />
        </GridTop>
    );
};

export { CreateForm };
