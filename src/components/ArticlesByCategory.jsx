import React, { Component } from "react";
import Axios from "axios";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";


function Pujar() {
    //let userID = localStorage.getItem("id");

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
        let verCategoria = localStorage.getItem("verCategoria");
        Axios.get("https://sale-it-back.herokuapp.com/home/categories/" + verCategoria + "/articles")
            .then(res => {
                var APIResponse = res.data;
                if (APIResponse.length === 0) {
                    Swal.fire({
                        title: 'Ops!',
                        text: 'Aún no hay artículos en esta categoría',
                        icon: 'error',
                        confirmButtonText: 'Ok'
                    })
                } 
                else {
                    this.setState({ items: APIResponse });
                    return APIResponse;
                }
            })
            .catch(Response => {
                console.log(Response)
                Swal.fire({
                    title: 'Ops!',
                    text: 'Ocurrió un error al consultar los artículos',
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
