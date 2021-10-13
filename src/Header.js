import { AppBar, Toolbar, Button, ThemeProvider, Grid } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { AccessAlarm } from '@mui/icons-material';
import React from 'react';

const headerTheme = createTheme({
    palette: {
        primary: {
            main: '#122C34'
        }
    }
});

const buttonTheme = createTheme({
    palette: {
        primary: {
            main: 'rgba(255,255,255,0.15)',
            contrastText: '#fff'
        },
        secondary: {
            main: '#fff'
        }
    }
});

const Header = () => {
    return (
        <ThemeProvider theme={headerTheme}>
            <AppBar position="static">
                <Toolbar color="#122C34">
                    <Grid sm={1} />
                    <ThemeProvider theme={buttonTheme}>
                        <Button
                            variant="contained"
                            sx={{
                                textTransform: 'none',
                                width: '170px',
                                height: '45px'
                            }}
                        >
                            Mis equivalencias
                        </Button>
                        <Button
                            color="secondary"
                            variant="outlined"
                            sx={{
                                textTransform: 'none',
                                width: '170px',
                                height: '45px'
                            }}
                        >
                            Perfil
                        </Button>
                    </ThemeProvider>
                    <Grid sm={1} />
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
};

export { Header };
