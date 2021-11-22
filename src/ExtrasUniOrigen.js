import {
    Grid,
    FormControl,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio
} from '@mui/material';
import React from 'react';
import { StandardInput, FileUploader } from './components/atoms/Input/InputMUI';
import { Titulos } from './components/atoms/Title/Titulos';
import { BotonMUI } from './components/atoms/Button/BotonMUI';


function addMateria() {
    <p>Hola papu</p>
}

const ExtrasUniOrigen = () => {
    return (
        <Grid
            item
            container
            xs={12}
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
        >
            <Grid
                item
                container
                md={12}
                lg={5.8}
                direction="row"
                justifyContent="space-between"
                alignItems="flex-start"
                sx={{
                    marginTop: '10px'
                }}
            >
                <Grid item container xs={5.6}>
                    <StandardInput
                        required
                        size="small"
                        label="Año aprobación"
                        variant="outlined"
                        type="number"
                    />
                </Grid>

                <Grid item container xs={5.6}>
                    <StandardInput
                        required
                        size="small"
                        label="Carga horaria total"
                        variant="outlined"
                        type="number"
                    />
                </Grid>
            </Grid>

            <Grid
                item
                container
                md={12}
                lg={5.8}
                direction="row"
                justifyContent="space-between"
                alignItems="flex-start"
                sx={{
                    marginTop: '10px'
                }}
            >
                <Grid item container xs={5.6}>
                    <StandardInput
                        required
                        size="small"
                        label="Nota aprobación"
                        variant="outlined"
                        type="number"
                    />
                </Grid>

                <Grid
                    item
                    container
                    justifyContent="center"
                    alignItems="flex-end"
                    xs={5.6}
                    marginTop="7px"
                >
                    <FormControl component="fieldset">
                        <FormLabel component="legend" sx={{ fontSize: '14px' }}>
                            ¿Tiene certificado?
                        </FormLabel>
                        <RadioGroup
                            required
                            row
                            aria-label="bool"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel
                                value="yes"
                                control={<Radio size="small" />}
                                label="Si"
                            />
                            <FormControlLabel
                                value="no"
                                control={<Radio size="small" />}
                                label="No"
                            />
                        </RadioGroup>
                    </FormControl>
                </Grid>
            </Grid>

            <Grid
                item
                container
                xs={12}
                sx={{
                    marginTop: '16px'
                }}
            >
                <Grid item container xs={12}>
                    <Titulos
                        tituloLabel
                        variant="h3"
                        fontSize={{
                            xs: '14px',
                            sm: '16px'
                        }}
                    >
                        Adjuntar programa de la materia .pdf
                    </Titulos>
                </Grid>

                <Grid item container xs={12} sx={{ marginTop: '16px' }}>
                    <label htmlFor="contained-button-file" style={{width: '100%'}}>
                        <BotonMUI
                            sx={{
                                marginRight: '12px'
                            }}
                            buttonUpload
                            variant="outlined"
                            component="span"
                        >
                            Seleccionar
                        </BotonMUI>
                        <FileUploader
                            id="contained-button-file"
                            multiple
                            size="small"
                            variant="standard"
                            type="file"
                            accept="application/pdf, application/vnd.ms-Excel"
                        />
                    </label>
                </Grid>
            </Grid>
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
        </Grid>
    );
};

export { ExtrasUniOrigen, addMateria };
