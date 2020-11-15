import React, {useState, useEffect} from "react";
import Axios from "axios";
import Swal from "sweetalert2";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGavel} from "@fortawesome/free-solid-svg-icons";
import Pujar from "./Pujar";
//quitar fav
import {faStar as faStarRegular} from "@fortawesome/free-regular-svg-icons";
//quitar fav
import {faStar as faStarSolid} from "@fortawesome/free-solid-svg-icons";

export default function ArticlesByCategory() {

    const [items, setItems] = useState([])


    useEffect(() => {
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

    function pujar(item) {
        localStorage.setItem("idArticulo", item.id);
        var idArticulo = localStorage.getItem("idArticulo");
        Axios.get("https://sale-it-back.herokuapp.com/home/auctions/article/" + idArticulo)
            .then(res => {
                const APIResponse = [res.data];
                //set
                localStorage.setItem("idSubastap", APIResponse[0].id);
            })
            .catch(Response => {
                console.log(Response);
                console.log(localStorage.getItem("idSubastap"));
                Swal.fire({
                    title: 'Ops!',
                    text: 'Error al cargar la subasta',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                })
            });
    }

    return items.map((item, i) => {
        return <tr>
            <th scope="row">{item.nombre}</th>
            <th scope="row">{item.descripcion}</th>
            <th scope="row">{item.precioMinimo}</th>
            <th scope="row">{item.estadoDeUso}</th>
            <th scope="row">{item.dimensiones}</th>
            <th scope="row">{item.ubicacion}</th>
            <th scope="row">
                <button onClick={(e) => pujar(item)}
                        className="btn btn-primary ml-3" data-toggle="modal" data-target="#pujar">
                    <FontAwesomeIcon icon={faGavel}/>
                </button>
        {/* si esto fuera un componente podria poner la funcionalidad acá */}
                <button 
                        className="btn btn-primary ml-3">
                    <FontAwesomeIcon icon={faStarRegular}/>
                </button>
            </th>
            <Pujar></Pujar>
        </tr>;
    })
}