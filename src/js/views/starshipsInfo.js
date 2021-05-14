import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export function StarshipsInfo() {
	const params = useParams();
	const { store, actions } = useContext(Context);
	const [detalles, setDetalles] = useState();

	const cargarInfo = id => {
		fetch(store.starships[id].url)
			.then(res => res.json())
			.then(data => {
				setInfo(data.result.properties);
			});
	};

	useEffect(
		() => {
			cargarDetalles(params.theid);
		},
		[store.starships[params.theid]]
	);
	return (
		<div className="card bg-dark text-white">
			<img src="..." className="card-img" alt="..." />
			<div className="card-img-overlay">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					This is a wider card with supporting text below as a natural lead-in to additional content. This
					content is a little bit longer.
				</p>
				<p className="card-text">Last updated 3 mins ago</p>
			</div>
		</div>
	);
}
