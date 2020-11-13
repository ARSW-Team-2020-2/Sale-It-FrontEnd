import React from 'react';

export default function MisSubastas() {

    const misSubastas = (e) => {
        window.location.href = "/misSubastas";
    }

    const misParticipaciones = (e) => {
        window.location.href = "/misParticipaciones";
    }

    const miPerfil = (e) => {
        window.location.href = "/verPerfil";
    }

    return (

        <div id="misSubastas">
            <div className="text-center heading-section mt-5 mb-4">
                <div className="pl-lg-3 ml-md-5">
                    <span className="subheading">Mi</span>
                    <h2 className="mb-0">Perfil</h2>
                </div>
            </div>
            <div className="auction-background">
                <div className="wrap-about py-5 text-center">
                    <row>
                        <button onClick={(e) => misParticipaciones()} className="btn btn-primary">Mis participaciones</button>
                        <button onClick={(e) => misSubastas()} className="btn btn-primary ml-3">Mis subastas creadas</button>
                        <button onClick={(e) => miPerfil()} className="btn btn-primary ml-3">Ver perfil</button>
                    </row>
                </div>
            </div>
        </div>

    );
}
