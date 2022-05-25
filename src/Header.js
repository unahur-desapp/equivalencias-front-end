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
import { Menu } from '../src/components/molecules/Menu';
import React from 'react';
import md5 from 'md5';

const stringConcat = 'https://gravatar.com/avatar/'.concat(
    md5('sauron'),
    '?s=30&d=retro&r=g'
);

const Header = ({ name, botonSeleccionado }) => {
    return (
        <AppBar position="static" sx={{ bgcolor: '#122C34' }}>
            <Toolbar color="#122C34">
                <Grid xs={0.5} lg={1.5} />

                <Grid
                    container
                    lg={9}
                    justifyContent="space-between"
                    sx={{ display: { sm: 'none', xs: 'none', md: 'flex' } }}
                >
                    <Grid item>
                        <BotonMUI
                            variant="text"
                            sx={{
                                marginRight: '40px',
                                width: 'auto',
                                backgroundColor: `${botonSeleccionado}`
                            }}
                        >
                            {name}
                        </BotonMUI>

                        <BotonMUI variant="text" sx={{ width: '100px' }}>
                            Perfil
                        </BotonMUI>
                    </Grid>

                    {/* <Grid
                        item
                        justifyContent={'center'}
                        alignContent={'center'}
                        sx={{ display: 'flex', alignItems: 'center' }}
                    >
                        <img
                            src="https://unahur.edu.ar/wp-content/uploads/2021/03/UNAHUR-1.png"
                            alt=""
                            width={'40px'}
                            height={'45px'}
                        />
                    </Grid> */}

                    <Grid
                        item
                        justifyContent={'flex-end'}
                        alignContent={'center'}
                        sx={{ display: 'flex', alignItems: 'center' }}
                    >
                        <img
                            src={stringConcat}
                            alt=""
                            style={{ borderRadius: '100%' }}
                            width={'32px'}
                        />

                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <BotonMUI
                                buttoncontained
                                buttonlogout
                                variant="contained"
                                sx={{ marginLeft: '40px', width: '150px' }}
                            >
                                Cerrar sesión
                            </BotonMUI>
                        </Link>
                    </Grid>
                </Grid>
                {/* Mobile */}
                <Grid
                    container
                    justifyContent="space-between"
                    sx={{ display: { xs: 'flex', md: 'none' } }}
                >
                    <Grid item>
                        <Menu name={name} />
                    </Grid>

                    {/* <Grid
                        item
                        justifyContent={'center'}
                        alignContent={'center'}
                        sx={{ display: 'flex', alignItems: 'center' }}
                    >
                        <img
                            src="https://unahur.edu.ar/wp-content/uploads/2021/03/UNAHUR-1.png"
                            alt=""
                            width={'30px'}
                            height={'35px'}
                        />
                    </Grid> */}

                    <Grid
                        item
                        justifyContent={'flex-end'}
                        sx={{ display: 'flex', alignItems: 'center' }}
                    >
                        {/* <img src={stringConcat} alt="" /> */}
                    </Grid>
                </Grid>

                <Grid xs={0.5} lg={1.5} />
            </Toolbar>
        </AppBar>
    );
};

export { Header, stringConcat };
