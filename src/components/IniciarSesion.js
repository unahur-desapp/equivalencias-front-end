import React from 'react';
import FormularioInicioSesion from './FormularioInicioSesion';
import Registro from './Registro';
import SideRegistro from '../elements/SideRegistro';
import TarjetaLogin from '../elements/TarjetaLogin';
import FormularioMain from '.././elements/FormularioMain';
import Titulosh1 from '../elements/Titulosh1';
import Boton from '../elements/Boton';
import BotonMUI from '../elements/BotonMUI';

const IniciarSesion = () => {
    const onClick = (e) => {
        return <Registro />;
    };

    return (
        <TarjetaLogin>
            <SideRegistro>
                <Titulosh1 centrar blanco tituloGrande>
                    Trámites de Equivalencias
                </Titulosh1>
                <Boton>Registrarse</Boton>

                {/*
				<BotonMUI variant="outlined" onClick={onClick}>
					Registrarse
				</BotonMUI>
				*/}
            </SideRegistro>

            <FormularioMain>
                <FormularioInicioSesion />
            </FormularioMain>
        </TarjetaLogin>
    );
};

export default IniciarSesion;
