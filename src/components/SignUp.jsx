import React, { useState } from 'react';
import Axios from 'axios';
import Swal from 'sweetalert2';

export default function SignUp() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [nombre, setUsuario] = useState("")
    const [documento, setDocumento] = useState("")
    const [telefono, setTelefono] = useState("")
    var CryptoJS = require("crypto-js");


    const handleSubmit = (e) => {
        e.preventDefault()
        var ciphertext = CryptoJS.AES.encrypt(password, 'saleit');
        const user = {
            email: email,
            password: ciphertext.toString(),
            nombre: nombre,
            documento: documento,
            tipoDeDocumento: document.getElementById('tipoDocumento').value,
            telefono: telefono,
        }

        console.log(user)

        Axios.post("https://sale-it-back.herokuapp.com/home/users", user)
            .then(res => {
                return res.data;
            })
            .then(Response => {
                Swal.fire(
                    '¡Enhorabuena!',
                    'Usuario registrado',
                    'success'
                )
            }).catch(Response => {
                console.log(Response)
                Swal.fire({
                    title: 'Ops!',
                    text: 'Registro no válido',
                    icon: 'error',
                    confirmButtonText: 'Cool'
                })
            });
    }

    return (

        <section className="ftco-section ftco-wrap-about ftco-no-pb ftco-no-pt">
            <div className="container">
                <div className="row no-gutters">
                    <div className="col-sm-4 p-4 p-md-5 d-flex align-items-center justify-content-center bg-primary">
                        <form className="appointment-form" onSubmit={handleSubmit}>
                            <h3 className="mb-3">Regístrate!</h3>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input type="name" className="form-control" placeholder="Nombre" name="nombre"
                                            onChange={(e) => setUsuario(e.target.value)} required></input>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="Correo" name="email"
                                            onChange={(e) => setEmail(e.target.value)} required></input>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Teléfono"
                                            name="telefono" onChange={(e) => setTelefono(e.target.value)}
                                            required></input>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input type="password" className="form-control" placeholder="Contraseña"
                                            name="password" onChange={(e) => setPassword(e.target.value)}
                                            required></input>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Número de Documento"
                                            name="documento" onChange={(e) => setDocumento(e.target.value)}
                                            required></input>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <div className="form-field">
                                            <div className="select-wrap">
                                                <div className="icon"><span className="fa fa-chevron-down"></span></div>
                                                <select id="tipoDocumento" className="form-control"
                                                    name="tipodedocumento" required>
                                                    <option value="CC" className="option-color">Tipo de Documento
                                                    </option>
                                                    <option value="CC" className="option-color">CC</option>
                                                    <option value="CE" className="option-color">CE</option>
                                                    <option value="TI" className="option-color">TI</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input type="submit" value="Enviar" className="btn btn-white py-3 px-4"></input>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
