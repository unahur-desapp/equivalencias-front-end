import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { BotonMUI } from './components/atoms/Button/BotonMUI';
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
        <Grid
            item
            container
            xs={12}
            md={revision ? 9 : 7}
            marginTop={{
                xs: '20px'
            }}
        >
            <Grid
                item
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                width="100%"
                xs={12}
                lg={12}
            >
                <Grid item container xs={1} lg={1}>
                    <BotonMUI
                        buttoncontainedsmall
                        sx={{
                            width: '100%',
                            backgroundColor: '#009673',
                            color: '#FFFFFF'
                        }}
                        onClick={handleClickOpen}
                    >
                        Volver
                    </BotonMUI>
                </Grid>
                <Grid item container xs={6} lg={3}>
                    <BotonMUI
                        buttoncontainedsmallFinalizar
                        onClick={handleSubmit}
                        sx={{
                            margin: '0px 0px 0px 50px',
                            width: '100%',
                            alignItems: 'center'
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
