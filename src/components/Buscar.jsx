import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import React,{useState} from 'react';
import Axios from 'axios';
import Swal from 'sweetalert2';


export default function Buscar() {

    const [nombre, setNombreArticulo] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        localStorage.setItem("nombreArticulo",nombre);
        let nam = localStorage.getItem("nombreArticulo");

        Axios.get("https://sale-it-back.herokuapp.com/home/articles")
            .then(res => {
                var json = res.data;
                for (let j in json) {
                    let nom = json[j].nombre;
                    if(nom == nam) {
                        console.log(json[j]);
                        localStorage.setItem("articuloEspecificoNombre",json[j].nombre);
                        localStorage.setItem("articuloEstadoDeUso",json[j].estadoDeUso);
                        localStorage.setItem("articuloDescripcion",json[j].descripcion);
                        localStorage.setItem("articuloPrecioMinimo",json[j].precioMinimo);
                        localStorage.setItem("articuloCategoria",json[j].categoria);
                        localStorage.setItem("articuloUbicacion",json[j].ubicacion);
                        localStorage.setItem("articuloDimensiones",json[j].dimensiones);
                    }
                    }
                
            }).catch(Response => {
                Swal.fire({
                    title: 'Ops!',
                    text: 'No se pudieron obtenerr los artículos',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                })
            });


            window.location.href="/verArticuloEspecifico"
    }


    return (
        <div className="row justify-content-center mb-5">
            <form className="form-inline" onSubmit={handleSubmit}>
            <div className="form-group">
            <input className="form-control mr-3" type="text" placeholder="Busca un artículo" onChange={(e) => setNombreArticulo(e.target.value)} ></input>
                <button type="submit" className="btn btn-primary" aria-hidden="true">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
        </div>
            </form>
        </div>

    );
}