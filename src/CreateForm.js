import { Grid } from '@mui/material';
import { OnlyInput } from './components/atoms/Input/InputMUI';
import { Titulos } from './components/atoms/Title/Titulos';
import React from 'react';
import { GridTop } from './GridTop';
import { MateriaUniOrigen } from './MateriaUniOrigen';

const CreateForm = () => {
    return (
        <GridTop
            item
            container
            xs={12}
            sm={7}
            sx={{
                height: 'auto',
                marginTop: '50px',
                padding: '0px'
                /*paddingTop: '25px',
                paddingBottom: '25px'*/
            }}
        >
            <Grid
                item
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                sm={12}
                sx={{
                    height: 'auto',
                    bgcolor: '#FBFBFB',
                    borderBottom: '1px solid #DADCE0',
                    borderRadius: '10px',
                    padding: '0px 60px'
                }}
            >
                <Grid
                    item
                    container
                    direction="column"
                    alignItems="flex-start"
                    sx={{
                        height: 'auto',
                        margin: '20px 0px'
                    }}
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
                    sx={{
                        height: 'auto',
                        margin: '20px 0px'
                    }}
                >
                    <OnlyInput
                        required
                        size="normal"
                        label="Materia solicitada UNAHUR"
                        variant="standard"
                    />
                </Grid>
            </Grid>

            <MateriaUniOrigen />
        </GridTop>
    );
};

export { CreateForm };
