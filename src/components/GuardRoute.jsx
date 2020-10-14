import React from 'react';
import { Redirect, Route } from 'react-router-dom';

class GuardRoute extends React.Component {
    render() {

        const isLogged = localStorage.getItem('isLoggedIn');

        const {
            type,
        } = this.props;

        if (type === "private" && !isLogged) {
            return <Redirect to="/" />;

        } else if (type === "public") {
            console.log(isLogged)
            if (!isLogged) {
                return <Redirect to="/" />;
            } else {
                return <Redirect to="/inicio" />;
            }

        }

        return <Route {...this.props} />
    }
}

export default GuardRoute;
