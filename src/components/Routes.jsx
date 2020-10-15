import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Autenticacion from './Autenticacion';
import VistaPrincipal from './VistaPrincipal';
import SubastasCreadas from './SubastasCreadas';
import GuardRoute from './GuardRoute';
import MisParticipaciones from './MisParticipaciones';
import VerArticulos from './VerArticulos';


class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <GuardRoute path="/inicio" type="private" component={VistaPrincipal}></GuardRoute>
                <GuardRoute path="/misSubastas" type="private" component={SubastasCreadas}></GuardRoute>
                <GuardRoute path="/misParticipaciones" type="private" component={MisParticipaciones}></GuardRoute>
                <GuardRoute path="/articulos" type="private" component={VerArticulos}></GuardRoute>
                <Route path="/" type="public" component={Autenticacion}></Route>
            </Switch>
        );
    }
}

export default Routes;
