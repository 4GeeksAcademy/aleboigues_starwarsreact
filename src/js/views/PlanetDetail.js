import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

const PlanetDetail = () => {

    const { store, actions } = useContext(Context);
    const params = useParams();
    return (
        <>
            <div className="container-flex text-center general">
                <div className="row align-items-center">
                    <div className="col-6">
                        <img className="imagenDetalle" src=""></img>
                    </div>                    <div className="col-4  Planet Info">
                        <h2>{store.Planets[params.planetsid].name}</h2>

                    </div>
                    <div className="container-flex text-center">
                        <div className="row align-items-center col-10">
                            <table class="table PlanetsTable">
                                <tbody>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Rotation Period</th>
                                        <th scope="col">Diameter</th>
                                        <th scope="col">Climate</th>
                                        <th scope="col">Gravity</th>
                                        <th scope="col">Terrain</th>
                                        <td>{store.Planets[params.planetsid].name}</td>
                                        <td>{store.Planets[params.planetsid].rotation_period}</td>
                                        <td>{store.Planets[params.planetsid].diameter}</td>
                                        <td>{store.Planets[params.planetsid].climate}</td>
                                        <td>{store.Planets[params.planetsid].gravity}</td>
                                        <td>{store.Planets[params.planetsid].terrain}</td>
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

export default PlanetDetail;