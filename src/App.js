import PageIniciarSesion from './components/organisms/IniciarSesion/PageIniciarSesion';
import { PageCreateForm } from './PageCreateForm';
import { PageRevision } from './components/organisms/Direccion/PageRevision';
import { PageMyForm } from './PageMyForm';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default function App() {
    return (
        <Router>
            <Route path="/" exact component={PageIniciarSesion} />
            <Route path="/home" component={PageMyForm} />
            <Route path="/form" component={PageCreateForm} />
            <Route path="/revision" component={PageRevision} />
        </Router>
    );
}
