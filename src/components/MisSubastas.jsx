import React from 'react';

export default function MisSubastas() {
    return (

        <div id="misSubastas">
            <div className="text-center heading-section mt-5 mb-4">
                <div className="pl-lg-3 ml-md-5">
                    <span className="subheading">Mis</span>
                    <h2 className="mb-0">Subastas</h2>
                </div>
            </div>
            <div className="auction-background">
                <div className="wrap-about py-5 text-center">
                    <row>
                        <button className="btn btn-primary">Mis participaciones</button>
                        <button className="btn btn-primary ml-3">Mis subastas creadas</button>
                    </row>
                </div>
            </div>
        </div>

    );
}
