import React from 'react';
import cx from 'clsx';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import withStyles from '@material-ui/core/styles/withStyles';
import MensajesStyle from './MensajesStyle.js';
import AvatarIcon from '../AvatarIcon.jsx';

const Mensajes = withStyles(MensajesStyle)((props) => {
    const { classes, mensajes, usuario_id } = props;

    const primerUtlimoMensaje = (index, mensaje) => {
        if (
            index === 0 ||
            mensajes[index].id_remitente !== mensajes[index - 1].id_remitente
        ) {
            return classes[`${sidePorUsuario(mensaje)}First`];
        }
        if (
            index === mensajes.length - 1 ||
            mensajes[index].id_remitente !== mensajes[index + 1].id_remitente
        ) {
            return classes[`${sidePorUsuario(mensaje)}Last`];
        }
        return '';
    };

    const sidePorUsuario = (mensaje) => {
        if (mensaje.id_remitente === usuario_id) {
            return 'right';
        } else {
            return 'left';
        }
    };

    return (
        <Grid container spacing={0}>
            {mensajes.map((mensaje, i) => {
                if (sidePorUsuario(mensaje) === 'left') {
                    if (primerUtlimoMensaje(i, mensaje) === classes.leftFirst) {
                        return (
                            <Grid
                                key={mensaje.id || i}
                                container
                                item
                                className={
                                    classes[`${sidePorUsuario(mensaje)}Row`]
                                }
                            >
                                <Grid item xs={1}>
                                    <AvatarIcon info={['Gonzalo Iglesias']} />
                                </Grid>
                                <Grid item xs={11}>
                                    <Typography
                                        align={'left'}
                                        className={cx(
                                            classes.msg,
                                            classes[
                                                `${sidePorUsuario(mensaje)}`
                                            ],
                                            primerUtlimoMensaje(i, mensaje)
                                        )}
                                    >
                                        {mensaje.texto}
                                    </Typography>
                                </Grid>
                            </Grid>
                        );
                    }
                    return (
                        <Grid
                            key={mensaje.id || i}
                            item
                            container
                            className={classes[`${sidePorUsuario(mensaje)}Row`]}
                        >
                            <Grid item xs={1}></Grid>
                            <Grid item xs={11}>
                                <Typography
                                    align={'left'}
                                    className={cx(
                                        classes.msg,
                                        classes[`${sidePorUsuario(mensaje)}`],
                                        primerUtlimoMensaje(i, mensaje)
                                    )}
                                >
                                    {mensaje.texto}
                                </Typography>
                            </Grid>
                        </Grid>
                    );
                }
                return (
                    <Grid
                        key={mensaje.id || i}
                        item
                        xs={12}
                        className={classes[`${sidePorUsuario(mensaje)}Row`]}
                    >
                        <Typography
                            align={'right'}
                            className={cx(
                                classes.msg,
                                classes[`${sidePorUsuario(mensaje)}`],
                                primerUtlimoMensaje(i, mensaje)
                            )}
                        >
                            {mensaje.texto}
                        </Typography>
                    </Grid>
                );
            })}
        </Grid>
    );
});

export default Mensajes;
