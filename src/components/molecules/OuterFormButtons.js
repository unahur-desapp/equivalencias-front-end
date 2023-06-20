import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { BotonMUI } from '../atoms/Button/BotonMUI';
import { Link } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

const OuterFormButtons = ({
    handleSubmit,
    path,
    titulo,
    mensaje,
    revision
}) => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Grid container item xs={12} lg={9} marginTop={{ xs: '20px' }}>
            <Grid container item direction="row" width="100%" xs={12} lg={12}>
                <Grid
                    item
                    container
                    xs={6}
                    lg={1}
                    justifyContent={{ xs: 'flex-start', lg: 'flex-start' }}
                >
                    <BotonMUI
                        buttoncontainedsmall="+true"
                        sx={{
                            backgroundColor: '#009673',
                            color: '#FFFFFF',
                            width: {
                                lg: '20rem',
                                xs: '7rem'
                            }
                        }}
                        onClick={handleClickOpen}
                    >
                        Volver
                    </BotonMUI>
                </Grid>
                <Grid
                    item
                    container
                    xs={6}
                    lg={10.9}
                    justifyContent={{ xs: 'flex-end', lg: 'flex-end' }}
                >
                    <BotonMUI
                        buttoncontainedsmallFinalizar="+true"
                        onClick={handleSubmit}
                        sx={{
                            width: {
                                lg: '20rem',
                                xs: '7rem'
                            }
                        }}
                    >
                        Finalizar
                    </BotonMUI>
                </Grid>
            </Grid>
            <Grid
                item
                container
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
                lg={6}
            ></Grid>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{titulo}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {mensaje}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancelar</Button>
                    <Link to={path} style={{ textDecoration: 'none' }}>
                        <Button>Aceptar</Button>
                    </Link>
                </DialogActions>
            </Dialog>
        </Grid>
    );
};

export { OuterFormButtons };
