import React, { Component } from "react";
import Axios from "axios";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEye} from "@fortawesome/free-solid-svg-icons/faEye";

function VerPujas() {
    // let userID = localStorage.getItem("id");
    //
    // Axios.delete("https://sale-it-back.herokuapp.com/home/users/" + userID + "/auctions/")
    //     .then(res => {
    //         var APIResponse = res.data;
    //         console.log(APIResponse);
    //         return APIResponse;
    //     })
    //     .then(Response => {
    //
    //
    //     }).catch(Response => {
    //     console.log(Response)
    //     Swal.fire({
    //         title: 'Ops!',
    //         text: 'Error al eliminar la subasta',
    //         icon: 'error',
    //         confirmButtonText: 'Ok'
    //     })
    // });
}

class ParticipantAuctions extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }

    async componentDidMount() {
        let userID = localStorage.getItem("id");
        Axios.get("https://sale-it-back.herokuapp.com/home/auctions/users/" + userID )
            .then(res => {
                var APIResponse = res.data;
                this.setState({ items: APIResponse });
                return APIResponse;
            })
            .catch(Response => {
                console.log(Response)
                Swal.fire({
                    title: 'Ops!',
                    text: 'No has participado en ninguna subasta',
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
                        <th scope="row">${item.articulo.precioMinimo}</th>
                        <th scope="row">{item.articulo.estadoDeUso}</th>
                        <th scope="row">{item.fechaInicio.substr(0, 16)}</th>
                        <th scope="row">{item.fechaFin.substr(0,16)}</th>
                        <th scope="row">{item.articulo.dimensiones}</th>
                        <th scope="row">{item.articulo.ubicacion}</th>
                        <th scope="row">${item.pujas[i].monto}</th>
                        {/*<th scope="row"><th scope="row"><FontAwesomeIcon onClick={VerPujas} icon={faEye} /></th></th>*/}
                    </tr>
                );
            })
        )
    }

}

export default ParticipantAuctions;
