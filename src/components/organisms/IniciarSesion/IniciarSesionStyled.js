import styled from 'styled-components';

const TarjetaLogin = styled.div`
    margin: 0 auto;
    width: 960px;
    max-width: 960px;
    height: 550px;
    border-radius: 20px;
    box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.7);
    background-color: #fff;
    display: flex;
`;

const SideRegistro = styled.div`
    background: #009673;
    width: 35%;
    max-width: 35%;
    height: 100%;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

const FormularioMain = styled.div`
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

export { TarjetaLogin, SideRegistro, FormularioMain };
