import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import SW400 from "../../img/star wars400B.png";

export function Starships() {
	const { store, actions } = useContext(Context);

	return (
		<div className="container justify-content-between d-flex mb-4">
			{store.starships.map((starship, index) => {
				return (
					<div key={index} className="mr-5">
						<div className="card text-white bg-dark m-2" style={{ width: "400px" }}>
							<img src={SW400} className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">{starship.name}</h5>
								<p className="card-text">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
								</p>
								<div className="d-flex justify-content-between align-items-center">
									<Link to={"/starships-info/" + index}>
										<span className="btn btn-outline-light">Learn more!</span>
									</Link>
									<button type="button" className="btn btn-outline-danger">
										<i className="fas fa-heart" />
									</button>
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}
