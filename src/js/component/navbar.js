import React from "react";
import { Link } from "react-router-dom";
import SWlogo from "../../img/star-wars-seeklogo.com-2.png";

export const Navbar = () => {
	return (
		<nav className="navbar sticky-top navbar-light bg-black">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img src={SWlogo} />
				</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-light">Favorites</button>
				</Link>
			</div>
		</nav>
	);
};
