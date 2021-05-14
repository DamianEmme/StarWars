import React, { useContext } from "react";
import "../../styles/home.scss";
import { Characters } from "../component/characters.js";
import { Planets } from "../component/planets.js";
import { Starships } from "../component/starships.js";

export const Home = () => {
	return (
		<div clasName="justify-content-between d-flex">
			<div clasName=" justify-content-between d-flex">
				<Characters />
				<Starships />
				<Planets />
			</div>
		</div>
	);
};
