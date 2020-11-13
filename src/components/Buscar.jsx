import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import React from 'react';


export default function Buscar() {
    return (
        <div className="row justify-content-center mb-5">
            <form class="form-inline">
                <input class="form-control form-control-sm mr-3 w-75" type="text" placeholder="Busca un artículo"
                ></input>
                <button className="btn btn-primary" aria-hidden="true">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </form>
        </div>

    );
}