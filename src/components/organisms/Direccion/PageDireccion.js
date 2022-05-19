import { Grid } from '@mui/material';
import { Header } from '../../../Header';
import { GridTop } from '../../../GridTop';
import { Titulos } from '../../atoms/Title/Titulos';
// import { BotonMUI } from '../../atoms/Button/BotonMUI';
// import StickyHeadTable from '../../../TableAlumno';
import FreeSolo from '../Direccion/buscadorDireccion';
import StickyHeadTable from '../Direccion/TablaDireccion';
import React from 'react';
// import { Search } from '@mui/icons-material';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
// import { Link } from 'react-router-dom';
// import TextField from '@mui/material/TextField';
// import Stack from '@mui/material/Stack';
// import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto'
    }
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(2, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '10ch',
            '&:focus': {
                width: '20ch'
            }
        }
    }
}));

const PageDireccion = () => {
    return (
        <Grid container direction="column">
            <Grid item container xs={12}>
                <Header name="Mis equivalencias" />
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
                    sx={{
                        padding: '0px 20px'
                    }}
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Grid item>
                        <Titulos component="h2" tituloGrande>
                            Solicitudes de equivalencias
                        </Titulos>
                    </Grid>
                </GridTop>

                <GridTop
                    item
                    container
                    blanco
                    search
                    searchPlaceholder
                    searchProps
                    debounceSearchRender
                    xs={11.5}
                    md={7}
                    marginTop={{
                        xs: '30px'
                    }}
                    sx={{
                        height: '80px'
                    }}
                >
                    <Grid item>
                        {/* <FreeSolo /> */}

                        <Grid
                            item
                            container
                            mt={2}
                            ml={7}
                            border={0.5}
                            borderColor={'grey'}
                            borderRadius={4}
                            sx={{
                                height: 'auto'
                            }}
                        >
                            <Search>
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Buscar..."
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </Search>
                        </Grid>
                    </Grid>
                </GridTop>
                <GridTop
                    item
                    container
                    blanco
                    xs={11.5}
                    md={7}
                    marginTop={{
                        xs: '8px'
                    }}
                    sx={{
                        height: 'auto'
                    }}
                >
                    <StickyHeadTable />
                </GridTop>
            </Grid>
        </Grid>
    );
};

export { PageDireccion };
