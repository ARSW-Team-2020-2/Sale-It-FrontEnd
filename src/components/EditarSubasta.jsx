import React, { useState } from 'react';
import Axios from 'axios';
import Swal from "sweetalert2";


export default function EditarSubasta() {

    const signOut = (e) => {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('userId');
        localStorage.removeItem('typeUserLogged');
        window.location.href = "/";
    }

    const volver = (e) => {
        window.location.href = "/misSubastas";
    }


    const modificar = (e) => {

        let subastaId = localStorage.getItem("idSubasta");

        Axios.get("https://sale-it-back.herokuapp.com/home/auctions/" + subastaId)
            .then(res => {
                //set de lo que neceistan
                var APIResponse = res.data;
                console.log(APIResponse);
                this.setState({ items: APIResponse });
                return APIResponse;
            })
            .catch(Response => {
                console.log(Response)
                Swal.fire({
                    title: 'Ops!',
                    text: 'No hay subast',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                })
            });
    }

    return (
        <div>
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
            <h2>formulario</h2>
        </div>
    );
}