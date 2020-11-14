import React, { useState } from "react";
import Axios from "axios";
import Swal from "sweetalert2";

export default function MiPerfil() {

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
        <div id="verPerfil">
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

    let us = localStorage.getItem("userName");
    let em = localStorage.getItem("userEmail");
    let doc = localStorage.getItem("userDoc");
    let tdoc = localStorage.getItem("userTipoDoc");
    let tel = localStorage.getItem("userTel");


    const [nombre, setNombre] = useState(us)
    const [email, setEmail] = useState(em)
    const [documento, setDocumento] = useState(doc)
    const [tipodedocumento, setTipoDocumento] = useState(tdoc)
    const [telefono, setTelefono] = useState(tel)
    const [clave, setClave] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault()
        const usuario = {
            nombre: nombre,
            email: email,
            documento: documento,
            tipoDeDocumento: tipodedocumento,
            telefono: telefono,
        }


        //end point de la info del usuario
        Axios.put("https://sale-it-back.herokuapp.com/home/users/" + "/auctions")
            .then(res => {
                return res.data;
            })
            .then(Response => {
                Swal.fire(
                    '¡Enhorabuena!',
                    'Pefil modificado',
                    'success'
                )

            }).catch(Response => {
                console.log(Response);
                Swal.fire({
                    title: 'Ops!',
                    text: 'El perfil no pudo ser modificado',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                })

            });
    }

    const handleSubmitDos = (e) => {
        e.preventDefault()
        const usuarioClave = {
            clave: clave,
        }

         //end point de la clave
        Axios.put("https://sale-it-back.herokuapp.com/home/users/" + "/auctions")
            .then(res => {
                return res.data;
            })
            .then(Response => {
                Swal.fire(
                    '¡Enhorabuena!',
                    'Contraseña modificada',
                    'success'
                )

            }).catch(Response => {
                console.log(Response);
                Swal.fire({
                    title: 'Ops!',
                    text: 'La contraseña no pudo ser modificada',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                })

            });
    }


    return (

        <div className="overlay home-background">


            <div className="mt-5 mr-4 ml-5">
                <div className="row mt-5 mr-3 ml-5">
                    <div className="container mt-5 ml-5">

                        <h2 className="color-white ml-5">Bienvenid@ {us}</h2>


                        <div className="container"></div>

                        <div className="col mt-5">
                            <div className="container mt-5 mr-3">


                                <div className="container">

                                    <form id="tablaActualizarClave" onSubmit={handleSubmitDos}>

                                        {/*no va seteada la clave porque es una mala practica, si la quiere cambiar debe digitar la nueva*/}
                                        <div className="form-group">
                                            <h5 className="text-left color-white">Clave nueva:</h5>
                                            <input type="password" className="form-control" onChange={(e) => setClave(e.target.value)} required></input>
                                        </div>
                                        <div className="form-group">
                                            <h5 className="text-left color-white">Clave verificación:</h5>
                                            <input type="password" className="form-control" required></input>
                                        </div>
                                        <div className="form-group">
                                            <button type="submit" className="btn btn-primary" >Cambiar Clave
                                            </button>
                                        </div>
                                    </form>


                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

            <div className="mt-5">
                <div className="row mt-5">
                    <div className="container">


                        <div className="container">
                            <form id="actualizarPerfil">

                                <div className="row">
                                    <div className="form-group mr-5 mt-5" onSubmit={handleSubmit}>
                                        <h5 className="text-left color-white">Nombre:</h5>
                                        <input type="text" className="form-control" value={nombre} onChange={(e) => setNombre(e.target.value)} required></input>
                                    </div>

                                    <div className="form-group mt-5">
                                        <h5 className="text-left color-white">Correo:</h5>
                                        <input type="text" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required></input>
                                    </div>
                                </div>

                                <div className="row">


                                    <div className="form-group mr-5">
                                        <h5 className="text-left color-white">Documento:</h5>
                                        <input type="text" className="form-control" value={documento} onChange={(e) => setDocumento(e.target.value)} required></input>
                                    </div>

                                    <div className="form-group">
                                    <h5 className="text-left color-white">Tipo de Documento:</h5>
                                        <div className="form-field">
                                            <div className="select-wrap">
                                                <div className="icon"><span className="fa fa-chevron-down"></span></div>
                                                <select id="tipoDocumento" className="form-control"
                                                         required>
                                                    <option value="CC" className="option-color">CC
                                                    </option>
                                                    <option value="CE" className="option-color">CE</option>
                                                    <option value="TI" className="option-color">TI</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">

                                    <div className="form-group mr-5">
                                        <h5 className="text-left color-white">Teléfono:</h5>
                                        <input type="text" className="form-control" value={telefono} onChange={(e) => setTelefono(e.target.value)} required></input>
                                    </div>

                                    <div className="form-group mt-5">
                                        <button type="submit" className="btn btn-primary">Actualizar información
                            </button>
                                    </div>

                                </div>

                            </form>

                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}




