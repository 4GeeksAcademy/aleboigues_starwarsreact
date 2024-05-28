import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

const StarShipDetail = () => {

    const { store, actions } = useContext(Context);
    const params = useParams();
    return (
        <>
            <div className="container-flex text-center general">
                <div className="row align-items-center">
                    <div className="col-6">
                        <img className="imagenDetalle" src=""></img>
                    </div>                    <div className="col-4  Planet Info">
                        <h2>{store.StarShip[params.StarShipid].name}</h2>

                    </div>
                    <div className="container-flex text-center">
                        <div className="row align-items-center col-10">
                            <table class="table StarShipTable">
                                <tbody>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Model</th>
                                        <th scope="col">Manufacturer</th>
                                        <th scope="col">Length</th>
                                        <th scope="col">Crew</th>
                                        <td>{store.StarShip[params.StarShipid].name}</td>
                                        <td>{store.StarShip[params.StarShipid].model}</td>
                                        <td>{store.StarShip[params.StarShipid].manufacturer}</td>
                                        <td>{store.StarShip[params.StarShipid].length}</td>
                                        <td>{store.StarShip[params.StarShipid].crew}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default StarShipDetail;