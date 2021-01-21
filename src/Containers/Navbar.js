import React from "react";
import { NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<NavLink className="navbar-brand" as={Link} to="/#">
				Navbar
			</NavLink>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarText"
				aria-controls="navbarText"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon" />
			</button>
			<div className="collapse navbar-collapse" id="navbarText">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item">
						<NavLink className="nav-link" as={Link} to="/#">
							Home
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink className="nav-link" as={Link} to="/#">
							Features
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink className="nav-link" as={Link} to="/#">
							Pricing
						</NavLink>
					</li>
				</ul>
				<NavLink
					className="btn btn-outline-info my-2 my-sm-0"
					as={Link}
					to="/login"
				>
					Login
				</NavLink>
				<NavLink
					className="btn btn-outline-info my-2 my-sm-0 ml-3"
					as={Link}
					to="/register"
				>
					Register
				</NavLink>
			</div>
		</nav>
	);
}

export default Navbar;
