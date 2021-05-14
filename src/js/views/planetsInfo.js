import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export function PlanetsInfo() {
	const params = useParams();
	const { store, actions } = useContext(Context);
	const [detalles, setDetalles] = useState();

	const cargarInfo = id => {
		fetch(store.planets[id].url)
			.then(res => res.json())
			.then(data => {
				setInfo(data.result.properties);
			});
	};

	useEffect(
		() => {
			cargarDetalles(params.theid);
		},
		[store.planets[params.theid]]
	);
}
