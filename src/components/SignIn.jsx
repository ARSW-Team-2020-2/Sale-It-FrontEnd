import React, { useState } from 'react';
import Axios from 'axios';

export default function SignIn() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        Axios.get("https://sale-it-back.herokuapp.com/home/users/email/" + email)
            .then(res => {
                return res.data;
            })
            .then(Response => {
                if (Response.password === password) {
                    localStorage.setItem("isLoggedIn", true);
                    localStorage.setItem("id", Response.id);
                    localStorage.setItem("email", Response.nombre);
                    window.location.href = "/inicio";

                } else {
                    alert("Clave incorrecta")
                }
            }).catch(Response => {
                console.log(Response)
            });
    }


    return (
        <section className="ftco-section ftco-wrap-about ftco-no-pb ftco-no-pt">
            <div className="container">
                <div className="row no-gutters">
                    <div className="col-sm-4 p-4 p-md-5 d-flex align-items-center justify-content-center bg-primary">
                        <form className="appointment-form"  onSubmit={handleSubmit}>
                            <h3 className="mb-3">Ingresa!</h3>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="Correo" name="email" onChange={(e) => setEmail(e.target.value)} required></input>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input type="password" className="form-control" placeholder="Contraseña" name="password" onChange={(e) => setPassword(e.target.value)} required></input>
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

