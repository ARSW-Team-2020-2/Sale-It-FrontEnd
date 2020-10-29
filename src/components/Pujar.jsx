import React, { useState } from "react";
import Axios from "axios";
import Swal from "sweetalert2";

export default function Pujar() {

    let subastaID = localStorage.getItem("idSubastap");
    let userID = localStorage.getItem("id");
    const [monto, setMonto] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        var diaa = new Date().toISOString().slice(0, 10).toString();
        var horaa = new Date().getHours().toString();
        var minutoo = new Date().getMinutes() + 1;

        const puja = {
            fechaAutomatica: diaa + "T" + horaa + ":" + minutoo.toString() + ":00",
            monto: monto,
            subasta: subastaID,
        }

        Axios.post("https://sale-it-back.herokuapp.com/home/users/" + userID + subastaID, puja)
            .then(res => {
                console.log(res.data);
                console.log(res);
                return res.data;
            })
            .then(Response => {
                Swal.fire(
                    '¡Enhorabuena!',
                    'Puja realizada',
                    'success'
                )
            }).catch(Response => {
                console.log(Response);
                console.log(subastaID);
                console.log(puja);
                console.log(userID);
                Swal.fire({
                    title: 'Ops!',
                    text: 'No se pudo realizar la puja',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                })
            });
    }

    return (
        <div id="pujar" className="modal fade" aria-hidden="true">

            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Realiza tu puja!</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form id="tablaHacerPuja" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <h5 className="text-left">Monto:</h5>
                                <input onChange={(e) => setMonto(e.target.value)} type="text" className="form-control" placeholder={"$$$"} required ></input>
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-primary" >Enviar
                            </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}