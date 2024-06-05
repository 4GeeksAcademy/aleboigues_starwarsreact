import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

const CharacterDetail = () => {

    const { store, actions } = useContext(Context);
    const params = useParams();
    return (
        <>
            <div className="container d-flex justify-content-center">
                <div className="row justify-content-center align-items-center">
                    <div className="col-4">
                        <img className="img-fluid" src="https://www.startpage.com/av/proxy-image?piurl=http%3A%2F%2Fimages2.fanpop.com%2Fimages%2Fphotos%2F3300000%2FStar-Wars-star-wars-characters-3339889-1280-1024.jpg&sp=1717435042Tcb08ef5b1fc9f9702383b0c598ee4581ff96d4362c21a995d9937cc5c54c04f8"></img>
                    </div>
                    <div className="col-4 informacionPersonaje">
                        <h2 className="text-center">{store.Characters[params.characterid].name}</h2>
                        <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </div>
                    <div className="row justify-content-center align-items-center">
                        <div className="col-10 tablainfo">
                            <table className="table tablaPersonaje text-danger">
                                <thead>
                                    <tr>
                                        <th scope="col">Nombre</th>
                                        <th scope="col">Año de nacimiento</th>
                                        <th scope="col">Género</th>
                                        <th scope="col">Altura</th>
                                        <th scope="col">Color de piel</th>
                                        <th scope="col">Color de ojos</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{store.Characters[params.characterid].name}</td>
                                        <td>{store.Characters[params.characterid].birth_year}</td>
                                        <td>{store.Characters[params.characterid].gender}</td>
                                        <td>{store.Characters[params.characterid].height}</td>
                                        <td>{store.Characters[params.characterid].skin_color}</td>
                                        <td>{store.Characters[params.characterid].eye_color}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div >        </>
    )

}

export default CharacterDetail;