import styled, { css } from 'styled-components';
import { Button } from '@mui/material';

const BotonMUI = styled(Button)`
    width: 200px;
    height: 45px;
    text-transform: none;

    & .MuiButton-root {
        text-transform: none;
    }
`;

const ContenedorBoton = styled.div`
    margin-top: 22px;
    border-radius: 20px;
    background-color: #fff;
`;

export { BotonMUI, ContenedorBoton };
