import React, { useState } from 'react';
import Axios from 'axios';
import Swal from 'sweetalert2';

export default function SignIn() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    var CryptoJS = require("crypto-js");


    const handleSubmit = (e) => {
        e.preventDefault()
        Axios.get("https://sale-it-back.herokuapp.com/home/users/email/" + email)
            .then(res => {
                return res.data;
            })
            .then(Response => {
                var cipherPassword = CryptoJS.AES.decrypt(Response.password, 'saleit');
                if (cipherPassword.toString(CryptoJS.enc.Utf8) === password) {
                    localStorage.setItem("isLoggedIn", true);
                    localStorage.setItem("id", Response.id);
                    localStorage.setItem("userName", Response.nombre);
                    localStorage.setItem("userEmail", Response.email);
                    localStorage.setItem("userDoc", Response.documento);
                    localStorage.setItem("userTipoDoc", Response.tipodedocumento);
                    localStorage.setItem("userTel", Response.telefono);
                    localStorage.setItem("userPuj", Response.listaDePujas);
                    localStorage.setItem("userSub", Response.subastasCreadas);
                    localStorage.setItem("userFav", Response.articulosFavoritos);
                    window.location.href = "/inicio";

                } else {
                    Swal.fire({
                        title: 'Ops!',
                        text: 'Contraseña incorrecta',
                        icon: 'error',
                        confirmButtonText: 'Ok'
                    })
                }
            }).catch(Response => {
                console.log(Response)
                Swal.fire({
                    title: 'Ops!',
                    text: 'Usuario no válido',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                })
            });
    }


    return (
        <section className="ftco-section ftco-wrap-about ftco-no-pb ftco-no-pt">
            <div className="container">
                <div className="row no-gutters">
                    <div className="col-sm-4 p-4 p-md-5 d-flex align-items-center justify-content-center bg-primary">
                        <form className="appointment-form" onSubmit={handleSubmit}>
                            <h3 className="mb-3">Ingresa!</h3>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="Correo" name="email"
                                            onChange={(e) => setEmail(e.target.value)} required></input>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input type="password" className="form-control" placeholder="Contraseña"
                                            name="password" onChange={(e) => setPassword(e.target.value)}
                                            required></input>
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <input type="submit" value="Enviar" className="btn btn-white py-3 px-4"></input>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

