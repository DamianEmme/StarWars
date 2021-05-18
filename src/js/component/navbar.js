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
			<div className="dropdown">
				<a
					className="btn btn-light dropdown-toggle"
					href="#"
					role="button"
					id="dropdownMenuLink"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					Favorites
				</a>

				<div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
					<a className="dropdown-item" href="#">
						Action
					</a>
					<a className="dropdown-item" href="#">
						Another action
					</a>
					<a className="dropdown-item" href="#">
						Something else here
					</a>
				</div>
			</div>
		</nav>
	);
};
