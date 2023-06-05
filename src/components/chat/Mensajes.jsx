import React from 'react';
import cx from 'clsx';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import withStyles from '@material-ui/core/styles/withStyles';
import MensajesStyle from './MensajesStyle.js';
import AvatarIcon from '../AvatarIcon.jsx';
import { Fragment } from 'react';

const Mensajes = withStyles(MensajesStyle)((props) => {
    const { classes, mensajes, usuario_id } = props;

    const primerUltimoMensaje = (index, mensaje) =>
        index === 0 ||
        mensajes[index].id_remitente !== mensajes[index - 1].id_remitente
            ? classes[`${sidePorUsuario(mensaje)}First`]
            : index === mensajes.length - 1 ||
              mensajes[index].id_remitente !== mensajes[index + 1].id_remitente
            ? classes[`${sidePorUsuario(mensaje)}Last`]
            : '';

    function convertUTCtoLocalTime(utcDatetimeString) {
        const date = new Date(utcDatetimeString);
        return (
            date.toLocaleDateString() +
            ' - ' +
            date.toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true
            })
        );
    }

    const sidePorUsuario = (mensaje) => {
        return mensaje.id_remitente === usuario_id ? 'right' : 'left';
    };

    const mensajeUnico = (index) => {
        return (
            (index === 0 ||
                mensajes[index].id_remitente !==
                    mensajes[index - 1].id_remitente) &&
            (index === mensajes.length - 1 ||
                mensajes[index].id_remitente !==
                    mensajes[index + 1].id_remitente)
        );
    };

    return (
        <Fragment>
            <Grid container spacing={0}>
                {mensajes.map((mensaje, i) => {
                    if (sidePorUsuario(mensaje) === 'left') {
                        if (
                            primerUltimoMensaje(i, mensaje) ===
                            classes.leftFirst
                        ) {
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
                                        <AvatarIcon
                                            info={[
                                                mensaje.Usuario.nombre.trim() +
                                                    ' ' +
                                                    mensaje.Usuario.apellido.trim()
                                            ]}
                                        />
                                    </Grid>
                                    <Grid item xs={11}>
                                        <Typography
                                            align={'left'}
                                            className={cx(
                                                classes.msg,
                                                classes[
                                                    `${sidePorUsuario(mensaje)}`
                                                ],
                                                primerUltimoMensaje(i, mensaje)
                                            )}
                                        >
                                            {mensaje.texto}
                                        </Typography>
                                        {mensajeUnico(i) && (
                                            <Typography
                                                variant="body2"
                                                color="textSecondary"
                                                className={cx(
                                                    classes[
                                                        `${sidePorUsuario(
                                                            mensaje
                                                        )}Time`
                                                    ]
                                                )}
                                            >
                                                {convertUTCtoLocalTime(
                                                    mensaje.createdAt
                                                )}
                                            </Typography>
                                        )}
                                    </Grid>
                                </Grid>
                            );
                        } else if (
                            primerUltimoMensaje(i, mensaje) === classes.leftLast
                        ) {
                            return (
                                <Grid
                                    key={mensaje.id || i}
                                    container
                                    item
                                    className={
                                        classes[`${sidePorUsuario(mensaje)}Row`]
                                    }
                                >
                                    <Grid item xs={1}></Grid>
                                    <Grid item xs={11}>
                                        <Typography
                                            align={'left'}
                                            className={cx(
                                                classes.msg,
                                                classes[
                                                    `${sidePorUsuario(mensaje)}`
                                                ],
                                                primerUltimoMensaje(i, mensaje)
                                            )}
                                        >
                                            {mensaje.texto}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="textSecondary"
                                            className={cx(
                                                classes[
                                                    `${sidePorUsuario(
                                                        mensaje
                                                    )}Time`
                                                ]
                                            )}
                                        >
                                            {convertUTCtoLocalTime(
                                                mensaje.createdAt
                                            )}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            );
                        } else
                            return (
                                <Grid
                                    key={mensaje.id || i}
                                    item
                                    container
                                    className={
                                        classes[`${sidePorUsuario(mensaje)}Row`]
                                    }
                                >
                                    <Grid item xs={1}></Grid>
                                    <Grid item xs={11}>
                                        <Typography
                                            align={'left'}
                                            className={cx(
                                                classes.msg,
                                                classes[
                                                    `${sidePorUsuario(mensaje)}`
                                                ],
                                                primerUltimoMensaje(i, mensaje)
                                            )}
                                        >
                                            {mensaje.texto}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            );
                    }
                    if (primerUltimoMensaje(i, mensaje) === classes.rightLast) {
                        return (
                            <Grid
                                key={mensaje.id || i}
                                item
                                xs={12}
                                className={
                                    classes[`${sidePorUsuario(mensaje)}Row`]
                                }
                            >
                                <Typography
                                    align={'right'}
                                    className={cx(
                                        classes.msg,
                                        classes[`${sidePorUsuario(mensaje)}`],
                                        primerUltimoMensaje(i, mensaje)
                                    )}
                                >
                                    {mensaje.texto}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                    className={cx(
                                        classes[
                                            `${sidePorUsuario(mensaje)}Time`
                                        ]
                                    )}
                                >
                                    {convertUTCtoLocalTime(mensaje.createdAt)}
                                </Typography>
                            </Grid>
                        );
                    } else
                        return (
                            <Grid
                                key={mensaje.id || i}
                                item
                                xs={12}
                                className={
                                    classes[`${sidePorUsuario(mensaje)}Row`]
                                }
                            >
                                <Typography
                                    align={'right'}
                                    className={cx(
                                        classes.msg,
                                        classes[`${sidePorUsuario(mensaje)}`],
                                        primerUltimoMensaje(i, mensaje)
                                    )}
                                >
                                    {mensaje.texto}
                                </Typography>
                                {mensajeUnico(i) && (
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                        className={cx(
                                            classes[
                                                `${sidePorUsuario(mensaje)}Time`
                                            ]
                                        )}
                                    >
                                        {convertUTCtoLocalTime(
                                            mensaje.createdAt
                                        )}
                                    </Typography>
                                )}
                            </Grid>
                        );
                })}
            </Grid>
        </Fragment>
    );
});

export default Mensajes;
