import React, { Component } from "react";
import Axios from "axios";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";


function Editar() {
    let userID = localStorage.getItem("id");

    Axios.put("https://sale-it-back.herokuapp.com/home/users/" + userID + "/auctions/",)
    .then(res => {
        var APIResponse = res.data;
        console.log(APIResponse);
        return APIResponse;
    })
    .then(Response => {


    }).catch(Response => {
    console.log(Response)
    Swal.fire({
        title: 'Ops!',
        text: 'Error al editar la subasta',
        icon: 'error',
        confirmButtonText: 'Ok'
    })
});
}

function Eliminar() {
    let userID = localStorage.getItem("id");

    Axios.delete("https://sale-it-back.herokuapp.com/home/users/" + userID + "/auctions/")
        .then(res => {
            var APIResponse = res.data;
            console.log(APIResponse);
            return APIResponse;
        })
        .then(Response => {


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

class OwnAuctions extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }

    async componentDidMount() {
        let userID = localStorage.getItem("id");
        Axios.get("https://sale-it-back.herokuapp.com/home/users/" + userID + "/auctions")
            .then(res => {
                var APIResponse = res.data;
                this.setState({ items: APIResponse });
                return APIResponse;
            })
            .catch(Response => {
                console.log(Response)
                Swal.fire({
                    title: 'Ops!',
                    text: 'Error al obtener las subastas',
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
                        <th scope="row">{item.articulo.categoria}</th>
                        <th scope="row">{item.articulo.estadoDeUso}</th>
                        <th scope="row">{item.fechaInicio}</th>
                        <th scope="row">{item.fechaFin}</th>
                        <th scope="row">{item.articulo.dimensiones}</th>
                        <th scope="row">{item.articulo.ubicacion}</th>
                        <th scope="row"><FontAwesomeIcon onClick={Editar} icon={faEdit} /><FontAwesomeIcon onClick={Eliminar} icon={faTrashAlt} /></th>
                    </tr>
                );
            })
        )
    }

}

export default OwnAuctions;
