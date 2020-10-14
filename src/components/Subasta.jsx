import React, {useState} from 'react';
import Axios from 'axios';
import Swal from "sweetalert2";


export default function Subasta() {

    let cate = localStorage.getItem("categoria");
    let userID = localStorage.getItem("id");


    const [nombre, setNombre] = useState("")
    const [estadodeuso, setEstadoDeUso] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [preciominimo, setPrecioMinimo] = useState("")
    const [dimensiones, setDimensiones] = useState("")
    const [ubicacion, setUbicacion] = useState("")
    const [fechafin, setFechaFin] = useState("")
    const [horafin, setHoraFin] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        const articulo = {
            nombre: nombre,
            estadoDeUso: estadodeuso,
            descripcion: descripcion,
            precioMinimo: preciominimo,
            dimensiones: dimensiones,
            ubicacion: ubicacion,
            categoria: cate,
        }
        var dia = new Date().toISOString().slice(0, 10).toString();
        var hora = new Date().getHours().toString();
        var minuto = new Date().getMinutes() + 3;
        if (minuto < 10) {
            minuto = "0" + minuto;
        }

        var finalDate = fechafin + "T" + horafin + ":00";
        const subasta = {
            fechaInicio: dia + "T" + hora + ":" + minuto.toString() + ":00",
            fechaFin: finalDate,
            articulo: articulo
        }

        console.log(articulo);
        console.log(articulo.categoria);

        console.log(subasta);
        console.log(userID);

        Axios.post("https://sale-it-back.herokuapp.com/home/users/" + userID + "/auctions", subasta)
            .then(res => {
                return res.data;
            })
            .then(Response => {
                Swal.fire(
                    '¡Enhorabuena!',
                    'Artículo registrado',
                    'success'
                )
            }).catch(Response => {
            Swal.fire({
                title: 'Ops!',
                text: 'El artículo no pudo ser registrado',
                icon: 'error',
                confirmButtonText: 'Ok'
            })
        });
    }

    return (
        <div id="agregarSubasta" className="modal fade" aria-hidden="true">

            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Ingresa los detalles del artículo</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label className="col-form-label">Nombre:</label>
                                <input type="text" className="form-control" name="nombre"
                                       onChange={(e) => setNombre(e.target.value)} required></input>
                            </div>

                            <div className="form-group">
                                <label className="col-form-label">Descripción:</label>
                                <input type="text" className="form-control" name="descripcion"
                                       onChange={(e) => setDescripcion(e.target.value)} required></input>
                            </div>

                            <div className="form-group">
                                <label className="col-form-label">Fecha fin de la oferta:</label>
                                <input id="fechaFinn" placeholder="YYYY-MM-DD" type="date" className="form-control"
                                       name="fechaFin" onChange={(e) => setFechaFin(e.target.value)} required></input>

                                <label className="col-form-label">Hora de finalización:</label>
                                <input id="horaFinn" placeholder="HH:mm" type="text" className="form-control"
                                       name="horaFin" onChange={(e) => setHoraFin(e.target.value)} required></input>
                            </div>


                            <div className="form-group">
                                <label className="col-form-label">Estado de uso:</label>
                                <div className="form-field">
                                    <div className="select-wrap">
                                        <div className="icon"><span className="fa fa-chevron-down"></span></div>
                                        <select name="estadoDeUso" className="form-control"
                                                onChange={(e) => setEstadoDeUso(e.target.value)} required>
                                            <option value="Nuevo" className="option-color">Estado de uso</option>
                                            <option value="Nuevo" className="option-color">Nuevo</option>
                                            <option value="Usado" className="option-color">Usado</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="col-form-label">Precio mínimo de la orferta:</label>
                                <input type="text" className="form-control" name="precioMinimo"
                                       onChange={(e) => setPrecioMinimo(e.target.value)} required></input>
                            </div>

                            <div className="form-group">
                                <label className="col-form-label">Dimensiones:</label>
                                <input type="text" className="form-control" name="dimensiones"
                                       onChange={(e) => setDimensiones(e.target.value)} required></input>
                            </div>

                            <div className="form-group">
                                <label className="col-form-label">Tu ubicación:</label>
                                <input type="text" className="form-control" name="ubicacion"
                                       onChange={(e) => setUbicacion(e.target.value)} required></input>
                            </div>

                            <div className="modal-footer">
                                <button type="submit" className="btn btn-primary">Agregar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
