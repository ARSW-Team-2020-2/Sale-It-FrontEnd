import React, {Component} from "react";
import Axios from "axios";
import Swal from "sweetalert2";

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
                console.log(APIResponse);

                this.setState({items: APIResponse});

                return APIResponse;
            })
            .catch(Response => {
            console.log(Response)
            Swal.fire({
                title: 'Ops!',
                text: 'No se pudo obtener las subastas',
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
                    </tr>
                );
            })
        )
    }

}

export default OwnAuctions;
