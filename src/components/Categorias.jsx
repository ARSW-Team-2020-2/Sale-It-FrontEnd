import React from 'react';
import Subasta from './Subasta';

export default function Categorias() {

    //AGREGAR SUBASTA

    const asignarA = (e) => {
        localStorage.setItem("categoria", 1)
    }
    const asignarB = (e) => {
        localStorage.setItem("categoria", 2)
    }
    const asignarC = (e) => {
        localStorage.setItem("categoria", 3)
    }
    const asignarD = (e) => {
        localStorage.setItem("categoria", 4)
    }
    const asignarE = (e) => {
        localStorage.setItem("categoria", 5)
    }
    const asignarG = (e) => {
        localStorage.setItem("categoria", 6)
    }
    const asignarH = (e) => {
        localStorage.setItem("categoria", 7)
    }
    const asignarI = (e) => {
        localStorage.setItem("categoria", 8)
    }
    const asignarF = (e) => {
        localStorage.setItem("categoria", 9)
    }

    //VER ARTICULOS

    const asignarVerCategoriaA = (e) => {
        localStorage.setItem("verCategoria", 1)
        window.location.href = "/articulos";
    }
    const asignarVerCategoriaB = (e) => {
        localStorage.setItem("verCategoria", 2)
        window.location.href = "/articulos";
    }
    const asignarVerCategoriaC = (e) => {
        localStorage.setItem("verCategoria", 3)
        window.location.href = "/articulos";
    }
    const asignarVerCategoriaD = (e) => {
        localStorage.setItem("verCategoria", 4)
        window.location.href = "/articulos";
    }
    const asignarVerCategoriaE = (e) => {
        localStorage.setItem("verCategoria", 5)
        window.location.href = "/articulos";
    }
    const asignarVerCategoriaG = (e) => {
        localStorage.setItem("verCategoria", 6)
        window.location.href = "/articulos";
    }
    const asignarVerCategoriaH = (e) => {
        localStorage.setItem("verCategoria", 7)
        window.location.href = "/articulos";
    }
    const asignarVerCategoriaI = (e) => {
        localStorage.setItem("verCategoria", 8)
        window.location.href = "/articulos";
    }
    const asignarVerCategoriaF = (e) => {
        localStorage.setItem("verCategoria", 9)
        window.location.href = "/articulos";
    }

    return (

        <div id="categorias" className="container">
            <div className="row justify-content-center mt-5 pb-2">
                <div className="col-md-7 text-center heading-section">
                    <span className="subheading">Nuestras</span>
                    <h2 className="mb-4">Categorías</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="blog-entry">
                        <img src='/img/hogar.jpg' alt="hogar"></img>
                        <div className="text-center px-4 pt-3 pb-4">
                            <h3 className="heading">Hogar y Cocina</h3>
                            <p className="clearfix">
                                <button onClick={(e) => asignarVerCategoriaA()} className="btn btn-primary">Ver Artículos</button>
                                <button onClick={(e) => asignarA()} className="btn btn-primary ml-3" data-toggle="modal"
                                        data-target="#agregarSubasta">Ofertar Artículo
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="blog-entry">
                        <img src='/img/belleza.jpg' alt="belleza"></img>
                        <div className="text-center px-4 pt-3 pb-4">
                            <h3 className="heading">Salud y Belleza</h3>
                            <p className="clearfix">
                                <button onClick={(e) => asignarVerCategoriaB()} className="btn btn-primary">Ver Artículos</button>
                                <button onClick={(e) => asignarB()} className="btn btn-primary ml-3" data-toggle="modal"
                                        data-target="#agregarSubasta">Ofertar Artículo
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="blog-entry">
                        <img src='/img/licores.png' alt="licores"></img>
                        <div className="text-center px-4 pt-3 pb-4">
                            <h3 className="heading">Bebidas y Licores</h3>
                            <p className="clearfix">
                                <button onClick={(e) => asignarVerCategoriaC()} className="btn btn-primary">Ver Artículos</button>
                                <button onClick={(e) => asignarC()} className="btn btn-primary ml-3" data-toggle="modal"
                                        data-target="#agregarSubasta">Ofertar Artículo
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="blog-entry">
                        <img src='/img/carros.jpg' alt="carros"></img>
                        <div className="text-center px-4 pt-3 pb-4">
                            <h3 className="heading">Carros y Motos</h3>
                            <p className="clearfix">
                                <button onClick={(e) => asignarVerCategoriaD()} className="btn btn-primary">Ver Artículos</button>
                                <button onClick={(e) => asignarD()} className="btn btn-primary ml-3" data-toggle="modal"
                                        data-target="#agregarSubasta">Ofertar Artículo
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="blog-entry">
                        <img src='/img/bb.jpg' alt="infantil"></img>
                        <div className="text-center px-4 pt-3 pb-4">
                            <h3 className="heading">Sección Infantil</h3>
                            <p className="clearfix">
                                <button onClick={(e) => asignarVerCategoriaE()} className="btn btn-primary">Ver Artículos</button>
                                <button onClick={(e) => asignarE()} className="btn btn-primary ml-3" data-toggle="modal"
                                        data-target="#agregarSubasta">Ofertar Artículo
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="blog-entry">
                        <img src='/img/ropa.jpg' alt="ropa"></img>
                        <div className="text-center px-4 pt-3 pb-4">
                            <h3 className="heading">Ropa y Accesorios</h3>
                            <p className="clearfix">
                                <button onClick={(e) => asignarVerCategoriaF()} className="btn btn-primary">Ver Artículos</button>
                                <button onClick={(e) => asignarF()} className="btn btn-primary ml-3" data-toggle="modal"
                                        data-target="#agregarSubasta">Ofertar Artículo
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="blog-entry">
                        <img src='/img/muebles.jpg' alt="muebles"></img>
                        <div className="text-center px-4 pt-3 pb-4">
                            <h3 className="heading">Muebles y Jardinería</h3>
                            <p className="clearfix">
                                <button onClick={(e) => asignarVerCategoriaG()} className="btn btn-primary">Ver Artículos</button>
                                <button onClick={(e) => asignarG()} className="btn btn-primary ml-3" data-toggle="modal"
                                        data-target="#agregarSubasta">Ofertar Artículo
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="blog-entry">
                        <img src='/img/tec.jpg' alt="tecnologia"></img>
                        <div className="text-center px-4 pt-3 pb-4">
                            <h3 className="heading">Sección de Tecnología</h3>
                            <p className="clearfix">
                                <button onClick={(e) => asignarVerCategoriaH()} className="btn btn-primary">Ver Artículos</button>
                                <button onClick={(e) => asignarH()} className="btn btn-primary ml-3" data-toggle="modal"
                                        data-target="#agregarSubasta">Ofertar Artículo
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="blog-entry">
                        <img src='/img/deporte.jpg' alt="deporte"></img>
                        <div className="text-center px-4 pt-3 pb-4">
                            <h3 className="heading">Sección Deportiva</h3>
                            <p className="clearfix">
                                <button onClick={(e) => asignarVerCategoriaI()} className="btn btn-primary">Ver Artículos</button>
                                <button onClick={(e) => asignarI()} className="btn btn-primary ml-3" data-toggle="modal"
                                        data-target="#agregarSubasta">Ofertar Artículo
                                </button>

                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Subasta></Subasta>
        </div>

    );
}
