import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

const PlanetDetail = () => {

    const { store, actions } = useContext(Context);
    const params = useParams();
    return (
        <>
            <div className="container-flex text-center general">
                <div className="row justify-content-center align-items-center">
                    <div className="col-4">
                        <img className="img-fluid" src="https://www.startpage.com/av/proxy-image?piurl=http%3A%2F%2Fimages2.fanpop.com%2Fimages%2Fphotos%2F3300000%2FStar-Wars-star-wars-characters-3339889-1280-1024.jpg&sp=1717435042Tcb08ef5b1fc9f9702383b0c598ee4581ff96d4362c21a995d9937cc5c54c04f8"></img>
                    </div>
                    <div className="col-4  PlanetInfo">
                        <h2>{store.Planets[params.planetid].name}</h2>
                        <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </div>
                    <div className="row justify-content-center align-items-center">
                        <div className="col-10 tablainfo text-danger">
                            <table className="table tablaPlaneta text-danger">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Rotation Period</th>
                                        <th scope="col">Diameter</th>
                                        <th scope="col">Climate</th>
                                        <th scope="col">Gravity</th>
                                        <th scope="col">Terrain</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{store.Planets[params.planetid].name}</td>
                                        <td>{store.Planets[params.planetid].rotation_period}</td>
                                        <td>{store.Planets[params.planetid].diameter}</td>
                                        <td>{store.Planets[params.planetid].climate}</td>
                                        <td>{store.Planets[params.planetid].gravity}</td>
                                        <td>{store.Planets[params.planetid].terrain}</td>
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