import styled from 'styled-components';
import { TextField } from '@mui/material';

const InputMUI = styled(TextField)`
    outline: 1px;
    border: 0;
    width: 400px;
    height: 54px;
`;

const ContenedorInputs = styled.div`
    margin: 0 auto;
    padding: 6px 0;
    display: inline-block;
    text-align: center;
`;

export { InputMUI, ContenedorInputs };
