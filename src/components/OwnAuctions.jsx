import React, {Component} from "react";
import Axios from "axios";
import Swal from "sweetalert2";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import EditarSubasta from './EditarSubasta';

class OwnAuctions extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
        this.eliminar = this.eliminar.bind(this);
        this.editar = this.editar.bind(this);
    }

    eliminar(item) {
        let userID = localStorage.getItem("id");
        Axios.delete("https://sale-it-back.herokuapp.com/home/users/" + userID + "/auctions/" + item.id)
            .then(res => {
                var APIResponse = res.data;
                this.setState({items: this.state.items.filter(subasta => item.id !== subasta.id)});
                return APIResponse;
            })
            .then(Response => {
                Swal.fire(
                    '¡Enhorabuena!',
                    'Subasta eliminada',
                    'success'
                )
            }).catch(Response => {
            console.log(Response)
            Swal.fire({
                title: 'Ops!',
                text: 'Error al eliminar la subasta',
                icon: 'error',
                confirmButtonText: 'Ok'
            })
        });

    }

    editar(item) {
        localStorage.setItem("idSubasta", item); 
        window.location.href = "/editarSubasta";
    }


    async componentDidMount() {
        let userID = localStorage.getItem("id");
        Axios.get("https://sale-it-back.herokuapp.com/home/users/" + userID + "/auctions")
            .then(res => {
                var APIResponse = res.data;
                console.log(APIResponse);
                this.setState({items: APIResponse});
                return APIResponse;
            })
            .catch(Response => {
                console.log(Response)
                Swal.fire({
                    title: 'Ops!',
                    text: 'No has creado ninguna subasta',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                })
            });
    }

    render() {
        return (
                this.state.items.map((item, i) => {
                    return (
                        <tr>
                            <th scope="row">{item.articulo.nombre}</th>
                            <th scope="row">{item.articulo.descripcion}</th>
                            <th scope="row">{item.articulo.precioMinimo}</th>
                            <th scope="row">{item.articulo.estadoDeUso}</th>
                            <th scope="row">{item.fechaInicio.substr(0, 16)}</th>
                            <th scope="row">{item.fechaFin.substr(0, 16)}</th>
                            <th scope="row">{item.articulo.dimensiones}</th>
                            <th scope="row">{item.articulo.ubicacion}</th>
                            <th scope="row"><FontAwesomeIcon onClick={(e) => this.editar(item.articulo.id)} icon={faEdit}/></th>
                            <th scope="row"><FontAwesomeIcon onClick={() => this.eliminar(item)} icon={faTrashAlt}/></th>
                        </tr>
                        
                    );
                })

        )
    }


}

export default OwnAuctions;
