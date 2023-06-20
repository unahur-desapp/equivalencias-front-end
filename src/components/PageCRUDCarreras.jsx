import React, { useEffect, useState } from 'react';
import {
    Box,
    FormControl,
    Grid,
    InputAdornment,
    InputLabel,
    MenuItem,
    Select,
    TextField
} from '@mui/material';
import { GridTop } from '../GridTop';
import { Titulos } from './atoms/Title/Titulos';
import SearchIcon from '@mui/icons-material/Search';
import TablaUsuarios from './TablaUsuarios';
import { HeaderSuperUsuario } from './HeaderSuperUsuario';
import { getUsuarios } from '../services/usuario_service';

const PageCRUDCarreras = () => {
    return (
        <Grid container>
            <Grid item container xs={12}>
                <HeaderSuperUsuario />
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
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Grid item xs={12}>
                        <Titulos>CRUD Carreras</Titulos>
                    </Grid>
                </GridTop>
            </Grid>
        </Grid>

        );
};

export default PageCRUDCarreras;