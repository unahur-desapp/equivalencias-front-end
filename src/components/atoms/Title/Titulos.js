import { Grid, Typography } from '@mui/material';
import styled, { css } from 'styled-components';

const TituloBienvenida = styled(Grid)`
    width: 100%;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

const Titulos = styled(Typography)`
    color: #000;
    font-weight: medium;

    ${(props) =>
        props.centrar &&
        css`
            text-align: center;
        `}

    ${(props) =>
        props.blanco &&
        css`
            color: #fff;
        `}

	${(props) =>
        props.tituloGrande &&
        css`
            font-size: 2.3em;
        `}

    ${(props) =>
        props.tituloBold &&
        css`
            font-weight: bold;
        `}

    ${(props) =>
        props.tituloChico &&
        css`
            font-size: 1.875em;
        `}

    ${(props) =>
        props.tituloLight &&
        css`
            font-weight: lighter;
        `}

    ${(props) =>
        props.tituloMarginBotton &&
        css`
            margin-bottom: 30px;
        `}
`;

export { TituloBienvenida, Titulos };
