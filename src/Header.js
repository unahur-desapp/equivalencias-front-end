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
import md5 from 'md5';

const Header = ({ name }) => {
    let stringConcat = 'https://gravatar.com/avatar/'.concat(
        md5('equivalencias'),
        '?s=30&d=retro&r=x'
    );

    return (
        <AppBar position="static" sx={{ bgcolor: '#122C34' }}>
            <Toolbar color="#122C34">
                <Grid xs={0.5} lg={1.5} />

                <Grid container xs={11} lg={9} justifyContent="space-between">
                    <Grid item>
                        <BotonMUI
                            buttoncontainedheader
                            variant="contained"
                            sx={{ marginRight: '40px' }}
                        >
                            {name}
                        </BotonMUI>

                        <BotonMUI variant="outlined" buttonoutlined>
                            Perfil
                        </BotonMUI>
                    </Grid>

                    <Grid
                        item
                        justifyContent={'flex-end'}
                        sx={{ display: 'flex', alignItems: 'center' }}
                    >
                        <img src={stringConcat} alt="" />

                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <BotonMUI
                                buttoncontained
                                buttonlogout
                                variant="contained"
                                sx={{ marginLeft: '40px' }}
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
