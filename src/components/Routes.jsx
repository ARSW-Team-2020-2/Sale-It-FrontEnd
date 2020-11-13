import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Autenticacion from './Autenticacion';
import VistaPrincipal from './VistaPrincipal';
import SubastasCreadas from './SubastasCreadas';
import GuardRoute from './GuardRoute';
import MisParticipaciones from './MisParticipaciones';
import VerArticulos from './VerArticulos';
import EditarSubasta from './EditarSubasta';
import MiPerfil from './MiPerfil';


class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <GuardRoute path="/inicio" type="private" component={VistaPrincipal}></GuardRoute>
                <GuardRoute path="/misSubastas" type="private" component={SubastasCreadas}></GuardRoute>
                <GuardRoute path="/verPerfil" type="private" component={MiPerfil}></GuardRoute>
                <GuardRoute path="/misParticipaciones" type="private" component={MisParticipaciones}></GuardRoute>
                <GuardRoute path="/articulos" type="private" component={VerArticulos}></GuardRoute>
                <GuardRoute path="/editarSubasta" type="private" component={EditarSubasta}></GuardRoute>
                <Route path="/" type="public" component={Autenticacion}></Route>
            </Switch>
        );
    }
}

export default Routes;
