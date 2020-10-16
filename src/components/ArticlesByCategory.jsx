import React, { Component } from "react";
import Axios from "axios";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";


function Pujar() {
    let userID = localStorage.getItem("id");

    // Axios.post("https://sale-it-back.herokuapp.com/home/users/" + userID + "/" + subastaID, puja)
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
    //         text: 'Error al editar la subasta',
    //         icon: 'error',
    //         confirmButtonText: 'Ok'
    //     })
    // });
}

class ArticlesByCategory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }

    async componentDidMount() {
        let categoriaID = localStorage.getItem("categoria");
        console.log(localStorage);
        console.log(categoriaID);
        Axios.get("https://sale-it-back.herokuapp.com/home/categories/" + categoriaID + "/articles")
            .then(res => {
                var APIResponse = res.data;
                this.setState({ items: APIResponse });
                return APIResponse;
            })
            .catch(Response => {
                console.log(Response)
                Swal.fire({
                    title: 'Ops!',
                    text: 'Error al obtener los artículos',
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
                        <th scope="row">{item.nombre}</th>
                        <th scope="row">{item.descripcion}</th>
                        <th scope="row">{item.precioMinimo}</th>
                        <th scope="row">{item.estadoDeUso}</th>
                        <th scope="row">{item.dimensiones}</th>
                        <th scope="row">{item.ubicacion}</th>
                        <th scope="row"><FontAwesomeIcon onClick={Pujar} icon={faShoppingCart} /></th>
                    </tr>
                );
            })
        )
    }

}

export default ArticlesByCategory;
