import React, {useState, useEffect} from "react";
import Axios from "axios";
import Swal from "sweetalert2";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";


function ArticlesByCategory(props) {
    const [items, setItems] = useState([])
    let verCategoria = localStorage.getItem("verCategoria");
    useEffect(() => {
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
                } else {
                    let finalItems = [...items]
                    if (APIResponse.length !== items.length) {
                        finalItems = APIResponse

                    }
                    setItems(finalItems)
                    return APIResponse
                }
            })
            .catch(Response => {
                Swal.fire({
                    title: 'Ops!',
                    text: 'Ocurrió un error al consultar los artículos',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                })
            });

    }, [items])


    return items.map((item, i) => {
        return <tr>
            <th scope="row">{item.nombre}</th>
            <th scope="row">{item.descripcion}</th>
            <th scope="row">{item.precioMinimo}</th>
            <th scope="row">{item.estadoDeUso}</th>
            <th scope="row">{item.dimensiones}</th>
            <th scope="row">{item.ubicacion}</th>
            <th scope="row"><FontAwesomeIcon icon={faShoppingCart}/></th>
        </tr>;
    })
}

export default ArticlesByCategory;
