import { Grid } from '@mui/material';
import { Header } from './Header';
import React from 'react';

const GridPrueba = () => {
    return (
        <Grid container direction="column">
            <Grid item>
                <Header />
            </Grid>

            <Grid item container>
                <Grid item xs={0} sm={2} />
                <Grid item xs={12} sm={8}>
                    This is where the content will be This is where the content
                    will be This is where the content will be This is where the
                    content will be This is where the content will be This is
                    where the content will be This is where the content will be
                    This is where the content will be This is where the content
                    will be This is where the content will be This is where the
                    content will be This is where the content will be This is
                    where the content will be
                </Grid>
                <Grid item xs={0} sm={2} />
            </Grid>
        </Grid>
    );
};

export { GridPrueba };
