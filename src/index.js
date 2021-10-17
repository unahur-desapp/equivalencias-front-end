import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import IniciarSesion from './components/organisms/IniciarSesion/IniciarSesion';
import UsuarioMisFormularios from './components/UsuarioMisFormularios';
import { buttonTheme } from './components/atoms/Button/BotonMUI';
import { GridPrueba } from './GridPrueba';
import './index.css';

const App = () => {
    const [login, cambiarEstadoLogin] = useState(false);

    return (
        /*<ThemeProvider theme={buttonTheme}>*/
        <>
            {login ? (
                <>
                    <UsuarioMisFormularios />
                </>
            ) : (
                <>
                    <IniciarSesion />
                    {/* <GridPrueba /> */}
                </>
            )}
        </>
        /*<ThemeProvider/>*/
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
