import React, { useState } from 'react';
import Axios from "axios";
import Swal from "sweetalert2";


function update(){
    /*
    localStorage.setItem("idSubasta", item.id);
    let subastaId = localStorage.getItem("idSubasta");

    Axios.put("https://sale-it-back.herokuapp.com/home/auctions/" + subastaId)
        .then(res => {
            const APIResponse = [res.data];

            //set
            localStorage.setItem("nombreInicial", APIResponse.nombre);
            localStorage.setItem("descripcionInicial", APIResponse.descripcion);
            localStorage.setItem("precioMinimoInicial", APIResponse.precioMinimo);
            localStorage.setItem("estadoDeUsoInicial", APIResponse.estadoDeUso);
            localStorage.setItem("dimesionesInicial", APIResponse.dimensiones);
            localStorage.setItem("ubicacionInicial", APIResponse.ubicacion);
        })
        .catch(Response => {
            console.log(Response)
            Swal.fire({
                title: 'Ops!',
                text: 'Error al cargar la subasta',
                icon: 'error',
                confirmButtonText: 'Ok'
            })
        });

     */
}

export default function EditarSubasta(props) {
    const { item } = props;
    console.log("item editar: ",item)
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
                        <form id="tablaModificarSubasta">
                            <div className="form-group">
                            <h5 className="text-left">Nombre:</h5>
                                <input type="text" className="form-control" required value={item.articulo.nombre}></input>
                            </div>
                            <div className="form-group">
                                <h5 className="text-left">Descripción:</h5>
                                <input type="text" className="form-control" name="descripcion" required value={item.articulo.descripcion}></input>
                            </div>
                            <div className="form-group">
                            <h5 className="text-left">Precio Mínimo:</h5>
                                <input type="text" className="form-control" name="nombre" required value={item.articulo.precioMinimo}></input>
                            </div>
                            <div className="form-group">
                                <h5 className="text-left">Estado de uso:</h5>
                                <input type="text" className="form-control" name="descripcion" required value={item.articulo.estadoDeUso}></input>
                            </div>
                            <div className="form-group">
                                <h5 className="text-left">Dimensiones:</h5>
                                <input type="text" className="form-control" name="descripcion" required value={item.articulo.dimensiones}></input>
                            </div>
                            <div className="form-group">
                                <h5 className="text-left">Ubicación:</h5>
                                <input type="text" className="form-control" name="descripcion" required value={item.articulo.ubicacion}></input>
                            </div>
                            <div className="modal-footer">
                                <button onClick={update} type="submit" className="btn btn-primary" >Modificar
                            </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

