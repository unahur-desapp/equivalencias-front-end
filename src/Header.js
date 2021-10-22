import {
    AppBar,
    Toolbar,
    Button,
    ThemeProvider,
    Grid,
    Avatar
} from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { AccessAlarm } from '@mui/icons-material';
import { BotonMUI } from './components/atoms/Button/BotonMUI';
import React from 'react';

const Header = () => {
    return (
        <AppBar position="static" sx={{ bgcolor: '#122C34' }}>
            <Toolbar color="#122C34">
                <Grid sm={1.5} />

                <Grid container sm={9} justifyContent="space-between">
                    <Grid item>
                        <BotonMUI
                            buttonContainedHeader
                            variant="contained"
                            sx={{ marginRight: '40px' }}
                        >
                            Mis equivalencias
                        </BotonMUI>

                        <BotonMUI variant="outlined" buttonOutlined>
                            Perfil
                        </BotonMUI>
                    </Grid>

                    <Grid
                        item
                        justifyContent={'flex-end'}
                        sx={{ display: 'flex', alignItems: 'center' }}
                    >
                        <Avatar sx={{ bgcolor: '#FF7F11' }}>H</Avatar>

                        <BotonMUI
                            buttonContained
                            buttonLogOut
                            variant="contained"
                            sx={{ marginLeft: '40px' }}
                        >
                            Cerrar sesión
                        </BotonMUI>
                    </Grid>
                </Grid>

                <Grid sm={1.5} />
            </Toolbar>
        </AppBar>
    );
};

export { Header };
