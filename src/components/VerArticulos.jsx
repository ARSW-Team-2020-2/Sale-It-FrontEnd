import React from 'react';
import ArticlesByCategory from "./ArticlesByCategory";

export default function VerArticulos() {

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
    let numeroCategoria = localStorage.getItem("verCategoria");
    if (numeroCategoria == 1) {
        localStorage.setItem("inicialesCategorias", "Hogar y Cocina");
    } else if (numeroCategoria == 2) {
        localStorage.setItem("inicialesCategorias", "Salud y Belleza");
    } else if (numeroCategoria == 3) {
        localStorage.setItem("inicialesCategorias", "Bebidas y Licores");
    } else if (numeroCategoria == 4) {
        localStorage.setItem("inicialesCategorias", "Carros y Motos");
    } else if (numeroCategoria == 5) {
        localStorage.setItem("inicialesCategorias", "Sección Infantil");
    } else if (numeroCategoria == 6) {
        localStorage.setItem("inicialesCategorias", "Muebles y Jardinería");
    } else if (numeroCategoria == 7) {
        localStorage.setItem("inicialesCategorias", "Sección de Tecnología");
    } else if (numeroCategoria == 8) {
        localStorage.setItem("inicialesCategorias", "Sección Deportiva");
    } else if (numeroCategoria == 9) {
        localStorage.setItem("inicialesCategorias", "Ropa y Accesorios");
    }

    var nombreCategoria = localStorage.getItem("inicialesCategorias")
    return (

        <div className="overlay home-background justify-content-center">


            <div className="row mt-5">

                <div className="col-md-12">
                    <div className="heading-section">
                        <h2 className="mb-4 color-white text-center">Artículos</h2>

                    </div>
                    <div className="text w-100 mt-5 text-center">
                        <div>
                            <h2 className="mb-4 color-white text-left">Categoría: <strong>{nombreCategoria}</strong>
                            </h2>
                            <table className="table table-striped table-dark">
                                <thead>
                                    <tr>
                                        <th scope="col">Artículo</th>
                                        <th scope="col">Descripción</th>
                                        <th scope="col">Precio Mínimo</th>
                                        <th scope="col">Estado de Uso</th>
                                        <th scope="col">Dimensiones</th>
                                        <th scope="col">Ubicación</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <ArticlesByCategory />
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
