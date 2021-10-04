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

export default BotonMUI;
