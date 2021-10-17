import { Grid, styled } from '@mui/material';

const TarjetaLogin = styled(Grid)`
    margin: 0 auto;
    width: 960px;
    max-width: 960px;
    height: 550px;
    border-radius: 20px;
    box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.7);
    background-color: #fff;
    display: flex;
    align-self: center;
`;

const FormularioMain = styled(Grid)`
    width: 65%;
    max-width: 65%;
    height: 100%;
    padding: 50px 0px;
    border-radius: 20px;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const FatherContainer = styled(Grid)`
    height: 100%;
    display: flex;
    position: fixed;
    width: 100%;
`;

export { TarjetaLogin, FormularioMain, FatherContainer };
