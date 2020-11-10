import React, { useState } from 'react';
import Axios from "axios";
import Swal from "sweetalert2";
import { useEffect } from 'react';

export default function EditarSubasta(props) {

    let userID = localStorage.getItem("id");

    const { item } = props;

    const [nombre, setNombre] = useState(item.articulo.nombre)
    const [estadodeuso, setEstadoDeUso] = useState(item.articulo.estadoDeUso)
    const [descripcion, setDescripcion] = useState(item.articulo.descripcion)
    const [preciominimo, setPrecioMinimo] = useState(item.articulo.precioMinimo)
    const [dimensiones, setDimensiones] = useState(item.articulo.dimensiones)
    const [ubicacion, setUbicacion] = useState(item.articulo.ubicacion)
    const [fechafin, setFechaFin] = useState(item.fechaFin.substr(0, 16))

    useEffect (()=> {

        setNombre(item.articulo.nombre)
        setDescripcion(item.articulo.descripcion)
        setEstadoDeUso(item.articulo.estadoDeUso)
        setPrecioMinimo(item.articulo.precioMinimo)
        setDimensiones(item.articulo.dimensiones)
        setUbicacion(item.articulo.ubicacion)
        setFechaFin(item.fechaFin.substr(0, 16))

    },[item]
    )
  
    const handleSubmit = (e) => {
        e.preventDefault()
        const articuloNuevo = {
            nombre: nombre,
            estadoDeUso: estadodeuso,
            descripcion: descripcion,
            precioMinimo: preciominimo,
            dimensiones: dimensiones,
            ubicacion: ubicacion,
            categoria: item.articulo.categoria,
            id :item.articulo.id,
        }
        const subasta = {
            id: item.id,
            fechaInicio: item.fechaInicio.substr(0, 16),
            fechaFin: fechafin,
            articuloNuevo: articuloNuevo,
            vendedor: userID,
            pujas: item.pujas,
        }

        //falla back


        Axios.put("https://sale-it-back.herokuapp.com/home/users/" + userID + "/auctions", subasta)
            .then(res => {
                return res.data;
            })
            .then(Response => {
                Swal.fire(
                    '¡Enhorabuena!',
                    'Subasta modificada',
                    'success'
                )
                //desdocuemntar los limpiar cuando sirva el put
                //limpiar();
            }).catch(Response => {
                console.log(Response);
            Swal.fire({
                title: 'Ops!',
                text: 'La subasta no pudo ser modificada',
                icon: 'error',
                confirmButtonText: 'Ok'
            })
            //la inro que neceitan
            console.log(userID);
            console.log(subasta);
            //limpiar();
        });
    }

    function limpiar() {
        document.getElementById("tablaModificarSubasta").submit();
    }


    return (
        <div id="editarSubasta" className="modal fade" aria-hidden="true">

            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Modifica tu subasta:</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form id="tablaModificarSubasta" onSubmit={handleSubmit}>
                            <div className="form-group">
                            <h5 className="text-left">Nombre:</h5>
                                <input type="text" className="form-control" name="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required></input>
                            </div>
                            <div className="form-group">
                                <h5 className="text-left">Descripción:</h5>
                                <input type="text" className="form-control" name="descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} required></input>
                            </div>
                            <div className="form-group">
                            <h5 className="text-left">Precio Mínimo:</h5>
                                <input type="text" className="form-control" name="precioMinimo" value={preciominimo} onChange={(e) => setPrecioMinimo(e.target.value)} required></input>
                            </div>
                            <div className="form-group">
                                <h5 className="text-left">Estado de uso:</h5>
                                <input type="text" className="form-control" name="estadoDeUso" value={estadodeuso} onChange={(e) => setEstadoDeUso(e.target.value)} required></input>
                            </div>
                            <div className="form-group">
                                <h5 className="text-left">Dimensiones:</h5>
                                <input type="text" className="form-control" name="dimensiones" value={dimensiones} onChange={(e) => setDimensiones(e.target.value)} required></input>
                            </div>
                            <div className="form-group">
                                <h5 className="text-left">Ubicación:</h5>
                                <input type="text" className="form-control" name="ubicacion" value={ubicacion} onChange={(e) => setUbicacion(e.target.value)} required></input>
                            </div>
                            <div className="form-group">
                                <h5 className="text-left">FechaFin:</h5>
                                <input type="text" className="form-control" name="fechaFin" value={fechafin} onChange={(e) => setFechaFin(e.target.value)} required></input>
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-primary" >Modificar
                            </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

