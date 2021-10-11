import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import IniciarSesion from './components/organisms/IniciarSesion/IniciarSesion';
import UsuarioMisFormularios from './components/UsuarioMisFormularios';
import './index.css';

const App = () => {
    const [login, cambiarEstadoLogin] = useState(true);

    return (
        <>
            {login ? (
                <>
                    <UsuarioMisFormularios />
                </>
            ) : (
                <>
                    <IniciarSesion />
                </>
            )}
        </>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
