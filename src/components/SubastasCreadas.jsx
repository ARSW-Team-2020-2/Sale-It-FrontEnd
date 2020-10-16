import React from 'react';
import OwnAuctions from "./OwnAuctions";

export default function SubastasCreadas() {

    const signOut = (e) => {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('userId');
        localStorage.removeItem('typeUserLogged');
        window.location.href = "/";
    }

    const volver = (e) => {
        window.location.href = "/inicio";
    }

    return (
        <div id="misSubastasCreadas">
            <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                <div className="container">
                    <a className="navbar-brand" href="index.html">Saleit <span>Subastas</span></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
                            aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="oi oi-menu"> </span> Menu
                    </button>

                    <div className="collapse navbar-collapse" id="ftco-nav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item"><a href="#volver" className="nav-link"
                                                        onClick={(e) => volver()}>Regresar</a></li>
                            <li className="nav-item"><a href="#cerrarSesion" className="nav-link"
                                                        onClick={(e) => signOut()}>Salir</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Fondo></Fondo>
        </div>
    );
}

function Fondo() {
    return (

        <div className="overlay home-background justify-content-center">


            <div className="row mt-5">

                <div className="col-md-12">
                    <div className="heading-section">
                        <br/>
                        <br/>
                    </div>
                    <div className="text w-100 mt-5 text-center">
                        <div>
                            <h2 className="mb-4 color-white text-left">Mis subastas creadas:</h2>
                            <table id="tablaSubastasCreadas" className="table table-dark table-hover">
                                <thead>
                                <tr>
                                    <th scope="col">Artículo</th>
                                    <th scope="col">Descripción</th>
                                    <th scope="col">Precio Mínimo</th>
                                    <th scope="col">Estado de Uso</th>
                                    <th scope="col">Fecha de Inicio</th>
                                    <th scope="col">Fecha de Fin</th>
                                    <th scope="col">Dimensiones</th>
                                    <th scope="col">Ubicación</th>
                                    <th scope="col"></th>
                                </tr>
                                </thead>
                                <tbody>
                                <OwnAuctions></OwnAuctions>
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
