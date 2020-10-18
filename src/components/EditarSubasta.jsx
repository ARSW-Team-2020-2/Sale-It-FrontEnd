import React, { useState } from 'react';

export default function EditarSubasta() {
    
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
                                <input type="text" className="form-control" required></input>
                            </div>
                            <div className="form-group">
                                <h5 className="text-left">Descripción:</h5>
                                <input type="text" className="form-control" name="descripcion" required></input>
                            </div>
                            <div className="form-group">
                            <h5 className="text-left">Precio Mínimo:</h5>
                                <input type="text" className="form-control" name="nombre" required></input>
                            </div>
                            <div className="form-group">
                                <h5 className="text-left">Estado de uso:</h5>
                                <input type="text" className="form-control" name="descripcion" required></input>
                            </div>
                            <div className="form-group">
                                <h5 className="text-left">Dimensiones:</h5>
                                <input type="text" className="form-control" name="descripcion" required></input>
                            </div>
                            <div className="form-group">
                                <h5 className="text-left">Ubicación:</h5>
                                <input type="text" className="form-control" name="descripcion" required></input>
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

