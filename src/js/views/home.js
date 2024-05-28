import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Characters from "./Characters";
import Planets from "./Planets";
import StarShip from "./Starship";

export const Home = () => (
	<div className="text-center mt-5">
		<Characters />
		<Planets />
		<StarShip />
	</div>

);
