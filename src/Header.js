import {
    AppBar,
    Toolbar,
    Button,
    ThemeProvider,
    Grid,
    Avatar,
    IconButton
} from '@mui/material';
import { Link } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';
import { AccessAlarm } from '@mui/icons-material';
import { BotonMUI } from './components/atoms/Button/BotonMUI';
import React from 'react';

const Header = ({name}) => {
    return (
        <AppBar position="static" sx={{ bgcolor: '#122C34' }}>
            <Toolbar color="#122C34">
                <Grid xs={0.5} lg={1.5} />

                <Grid container xs={11} lg={9} justifyContent="space-between">
                    <Grid item>
                        <BotonMUI
                            buttonContainedHeader
                            variant="contained"
                            sx={{ marginRight: '40px' }}
                            
                        >
                            {name}
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

                        <Link to="/" style={{textDecoration: 'none'}} >
                            <BotonMUI
                                buttonContained
                                buttonLogOut
                                variant="contained"
                                sx={{ marginLeft: '40px', }}
                            >
                                Cerrar sesión
                            </BotonMUI>
                        </Link>
                    </Grid>
                </Grid>

                <Grid xs={0.5} lg={1.5} />
            </Toolbar>
        </AppBar>
    );
};

export { Header };
