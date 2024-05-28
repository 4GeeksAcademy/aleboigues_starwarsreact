import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

const CharacterDetail = () => {

    const { store, actions } = useContext(Context);
    const params = useParams();
    return (
        <>
            <div className="container-flex text-center general">
                <div className="row align-items-center">
                    <div className="col-6">
                        <img className="imagenDetalle" src=""></img>
                    </div>                    <div className="col-4 informacionPersonaje">
                        <h2>{store.Characters[params.characterid].name}</h2>
                    
                    </div>                    
                    <div className="container-flex text-center">
                        <div className="row align-items-center col-10">
                            <table class="table tablaPersonaje">                                
                            z<tbody>
                                <tr>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Año de nacimiento</th>
                                    <th scope="col">Género</th>
                                    <th scope="col">Altura</th>
                                    <th scope="col">Color de piel</th>
                                    <th scope="col">Color de ojos</th>                                        
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
            </div>        </>
    )

}

export default CharacterDetail;