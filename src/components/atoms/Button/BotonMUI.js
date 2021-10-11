import styled, { css } from 'styled-components';
import { Button } from '@mui/material';

const BotonMUI = styled(Button)`
    width: 200px;
    height: 45px;
    text-transform: none;

    & .MuiButton-root {
        text-transform: none;
    }

    ${(props) =>
        props.buttonHeaderForm &&
        css`
        width: 170px
        height: 45px
        
    `}
`;

const ContenedorBoton = styled.div`
    margin-top: 22px;
    background-color: #fff;
`;

export { BotonMUI, ContenedorBoton };
