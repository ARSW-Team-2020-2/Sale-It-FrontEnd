import React from 'react';

export default function About() {
    return (
        <div id="acerca">
            <div className="text-center heading-section mt-5 mb-4">
                <div className="pl-lg-3 ml-md-5">
                    <span className="subheading">Acerca de</span>
                    <h2 className="mb-4 ">Sale It</h2>
                </div>
            </div>

            <div align="center" className="col-sm-25 wrap-about">

                <div className="col-md-12">
                    <h5>SaleIt es un proyecto para la
                        asignatura <strong> Arquitecturas de Software</strong> de la <strong> Escuela Colombiana
                            de Ingeniería Julio Garavito.</strong></h5>
                    <br/>

                    <h5>
                        ¡Subastas online para ofertar y pujar artículos en tiempo real!
                    </h5>

                </div>

            </div>

            <div className="imagen" align="center">
                <img src='/img/auction2.png' alt="auction2"></img>
            </div>
        </div>
    );
}
