import React from 'react';

export default function About() {
    return (
        <div id="acerca">
            <div className="text-center heading-section mt-5 mb-4">
                <div className="pl-lg-3 ml-md-5">
                    <span className="subheading">Acerca de</span>
                    <h2 className="mb-4 ">Saleit</h2>
                </div>
            </div>
            <div className="pro-image">
                <div className="col-sm-8 wrap-about py-5">
                    <div className="row pb-5 pb-md-0">
                        <div className="col-md-12 col-lg-6">
                            <p className="text-justify"> SaleIt es una aplicación web realizada como proyecto para la
                            asignatura Arquitecturas de Software de la Escuela Colombiana de Ingeniería Julio
                            Garavito. Somos una aplicación para realizar subastas de forma online donde podrás
                            ofertar artículos y podrás pujar para conseguir otros. Ofrecemos una fácil usabilidad,
                            excelente experiencia de usuario y además la participación dentro de las subastas al
                            momento de ofrecer una puja es de forma anónima. Estos factores nos diferencian respecto
                                a la mayoría de las páginas de subastas online.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img className="center" src='/img/auction2.png' alt="auction2"></img>
            </div>
        </div>
    );
}
