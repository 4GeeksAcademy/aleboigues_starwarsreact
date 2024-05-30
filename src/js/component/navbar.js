import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {

	const {store,actions}=useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light mb-3 ">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
				
				</span>
			</Link>
			<div>
				<div className="btn-group botonFav">
					<button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
						Favoritos{store.Fav.length}
					</button>
					<ul className="dropdown-menu">
						{store.Fav.map((item)=>(
						<li>
							<a className="dropdown-item">{item}</a>
						</li>	
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};
