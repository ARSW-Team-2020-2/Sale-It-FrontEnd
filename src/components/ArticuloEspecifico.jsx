import React from "react";

export default function ArticuloEspecifico() {

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
        <div id="verArticuloEspecifico">
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
    
    let articuloEspecificoNombre = localStorage.getItem("articuloEspecificoNombre");
    let articuloEstadoDeUso = localStorage.getItem("articuloEstadoDeUso");
    let articuloDescripcion = localStorage.getItem("articuloDescripcion");
    let articuloPrecioMinimo = localStorage.getItem("articuloPrecioMinimo");
    let articuloCategoria = localStorage.getItem("articuloCategoria");
    let articuloUbicacion = localStorage.getItem("articuloUbicacion");
    let articuloDimensiones = localStorage.getItem("articuloDimensiones");

    if (articuloCategoria == 1) {
        localStorage.setItem("iniciales", "Hogar y Cocina");
    } else if (articuloCategoria == 2) {
        localStorage.setItem("iniciales", "Salud y Belleza");
    } else if (articuloCategoria == 3) {
        localStorage.setItem("iniciales", "Bebidas y Licores");
    } else if (articuloCategoria == 4) {
        localStorage.setItem("iniciales", "Carros y Motos");
    } else if (articuloCategoria == 5) {
        localStorage.setItem("iniciales", "Sección Infantil");
    } else if (articuloCategoria == 6) {
        localStorage.setItem("iniciales", "Muebles y Jardinería");
    } else if (articuloCategoria == 7) {
        localStorage.setItem("iniciales", "Sección de Tecnología");
    } else if (articuloCategoria == 8) {
        localStorage.setItem("iniciales", "Sección Deportiva");
    } else if (articuloCategoria == 9) {
        localStorage.setItem("iniciales", "Ropa y Accesorios");
    }

    let iniciales = localStorage.getItem("iniciales");
    
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
                        <h2 className="mb-4 color-white text-left">Artículo consultado: {articuloEspecificoNombre}</h2>
                        <table className="table table-striped table-dark">
                            <thead>
                            <tr>
                            <th scope="col">Categoria</th>
                                <th scope="col">Estado de Uso</th>
                                <th scope="col">Descripción</th>
                                <th scope="col">Precio Mínimo</th>
                                <th scope="col">Dimensiones</th>
                                <th scope="col">Ubicación</th>
                                <th scope="col"></th>
                            </tr>
                            </thead>
                            <tbody>
                            <th scope="row">{iniciales}</th>
                            <th scope="row">{articuloEstadoDeUso}</th>
            <th scope="row">{articuloDescripcion}</th>
            <th scope="row">{articuloPrecioMinimo}</th>
            <th scope="row">{articuloDimensiones}</th>
            <th scope="row">{articuloUbicacion}</th>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
