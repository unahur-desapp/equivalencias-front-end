import { AppBar, Toolbar, Button, ThemeProvider, Grid } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { AccessAlarm } from '@mui/icons-material';
import { BotonMUI } from './components/atoms/Button/BotonMUI';
import React from 'react';

const Header = () => {
    return (
        <AppBar position="static" sx={{ bgcolor: '#122C34' }}>
            <Toolbar color="#122C34">
                <Grid sm={1} />

                <Grid container spacing={5}>
                    <Grid item>
                        <BotonMUI variant="contained" buttonContained>
                            Mis equivalencias
                        </BotonMUI>
                    </Grid>

                    <Grid item>
                        <BotonMUI variant="outlined" buttonOutlined>
                            Perfil
                        </BotonMUI>
                    </Grid>
                </Grid>

                <Grid sm={1} />
            </Toolbar>
        </AppBar>
    );
};

export { Header };
