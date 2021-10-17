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

const Titulosh1 = styled(Typography)`
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
`;

const Titulosh2 = styled(Typography)`
    color: #009673;

    ${(props) =>
        props.tituloh2Grande &&
        css`
            font-size: 2.5em;
            margin-bottom: 40px;
        `}

    ${(props) =>
        props.tituloh2Chico &&
        css`
            font-size: 1.875em;
        `}
`;

export { TituloBienvenida, Titulosh1, Titulosh2 };
