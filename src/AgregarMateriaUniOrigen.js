import { Grid } from '@mui/material';
import React, { useState } from 'react';
import { BotonMUI } from './components/atoms/Button/BotonMUI';
import { FormUniOrigen } from './FormUniOrigen';

const AgregarMateriaUniOrigen = () => {
    const [materia, setMateria] = useState([]);

    function addMateria() {
        setMateria([...materia, <FormUniOrigen key={0} />]);
    }

    return (
        <>
            <>
                {materia.map((item, i = 1) => (
                    <div key={i}> {item} </div>
                ))}
            </>

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
                    onClick={addMateria}
                >
                    Agregar materia
                </BotonMUI>
            </Grid>
        </>
    );
};

export { AgregarMateriaUniOrigen };
