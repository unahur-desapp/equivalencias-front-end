import {Grid} from '@mui/material';
import React from 'react';
import { BotonMUI } from './components/atoms/Button/BotonMUI';

const addMateria = () => {
    return (
        <>
            <p>Hola</p>
        </>
        
    )
}

const AgregarMateriaUniOrigen = () => {
    return (
        <Grid
                item
                container
                xs={12}
                sx={{ borderTop: '1px solid #DADCE0', marginTop: '20px ' }}
        >
                <BotonMUI
                    buttonContainedAddMateria
                    variant="outlined"
                    sx={{ marginTop: '20px' }}
                    onClick={<AgregarMateriaUniOrigen/>}
                >
                    Agregar materia
                </BotonMUI>
        </Grid>
    )
};

export {AgregarMateriaUniOrigen}