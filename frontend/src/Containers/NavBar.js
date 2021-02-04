import React, { useState } from "react";
import { Button, Navbar, NavLink, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Login from "../Components/Login";
import Register from "../Components/Register";
import * as authActions from "../store/actions/authActions";
import * as todosActions from "../store/actions/todoActions";
import TodoCreateForm from "../Components/TodoCreateForm";

const NavBar = (props) => {
	const [showRegister, setShowRegister] = useState(false);
	const [showLogin, setShowLogin] = useState(false);
	const [createFormShow, setCreateFormShow] = useState(false);

	const registerShow = () => setShowRegister(true);
	const registerClose = () => setShowRegister(false);

	const loginShow = () => setShowLogin(true);
	const loginClose = () => setShowLogin(false);

	const handleCreateFormClose = () => setCreateFormShow(false);
	const handleCreateFormShow = () => setCreateFormShow(true);

	return (
		<>
			<Navbar bg="light" variant="light">
				<NavLink
					className="navbar-brand"
					as={Link}
					to="/"
					onClick={() => {
						props.fetchTodos();
					}}
				>
					TASKA
				</NavLink>
				{!props.isAuthenticated ? (
					<Nav className="ml-auto">
						<Button
							className="my-2 my-sm-0"
							variant="outline-primary"
							onClick={loginShow}
						>
							Login
						</Button>
						<Login loginClose={loginClose} showLogin={showLogin} />
						<Button
							className="my-2 my-sm-0 ml-3"
							variant="outline-primary"
							onClick={registerShow}
						>
							Register
						</Button>
						<Register
							showRegister={showRegister}
							registerClose={registerClose}
						/>
					</Nav>
				) : (
					<Nav className="ml-auto">
						<Button
							className="my-2 my-sm-0 ml-3"
							variant="primary"
							onClick={handleCreateFormShow}
						>
							Create
						</Button>
						<Button
							className="my-2 my-sm-0 ml-3"
							variant="outline-danger"
							onClick={props.logout}
						>
							Logout
						</Button>
					</Nav>
				)}
			</Navbar>
			<TodoCreateForm
				createFormShow={createFormShow}
				handleCreateFormClose={handleCreateFormClose}
			/>
		</>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		logout: () => dispatch(authActions.logout()),
		fetchTodos: () => dispatch(todosActions.fetchTodos()),
	};
};

export default connect(null, mapDispatchToProps)(NavBar);
