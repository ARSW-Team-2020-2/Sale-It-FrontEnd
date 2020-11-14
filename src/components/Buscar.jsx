import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import React,{useState} from 'react';


export default function Buscar() {

    const [nombre, setNombreArticulo] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        localStorage.setItem("nombreArticulo",nombre);
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