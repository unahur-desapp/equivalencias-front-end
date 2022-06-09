import { Grid } from '@mui/material';
import { Header } from '../../../Header';
import { GridTop } from '../../../GridTop';
import { Titulos } from '../../atoms/Title/Titulos';
import StickyHeadTable from '../Direccion/TablaDireccion';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { getEquivalencia } from '../../../services/equivalencia_service';
import { useState, useEffect } from 'react';

const PageDireccion = () => {
    const [searchQuery, setSearchQuery] = useState('');
    console.log(searchQuery);

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
                            // border={0.5}
                            borderColor={'grey'}
                            // borderRadius={4}
                            sx={{
                                height: 'auto'
                            }}
                        >
                            <form>
                                <TextField
                                    id="search-bar"
                                    className="text"
                                    onInput={(e) => {
                                        e.preventDefault();
                                        setSearchQuery(e.target.value);
                                    }}
                                    label="Buscar..."
                                    variant="outlined"
                                    placeholder="Buscar Solicitante..."
                                    size="small"
                                />
                                {/* <IconButton onClick={search()} aria-label="search">
                                    <SearchIcon style={{ fill: 'blue' }} />
                                </IconButton> */}
                            </form>
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
                    <StickyHeadTable searchQuery={searchQuery} />
                </GridTop>
            </Grid>
        </Grid>
    );
};

export { PageDireccion };
