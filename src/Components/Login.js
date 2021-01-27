import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import * as actions from "../store/actions/authActions";
import { connect } from "react-redux";
import LoginStyle from "./Login.module.scss";
import Notifications from "./Notifications";
import Loading from "./Loading";

const Login = (props) => {
	const [data, setData] = useState({ username: "", password: "" });

	const handleChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value,
		});
	};

	const handleLogin = (e) => {
		e.preventDefault();
		props.onAuth(data.username, data.password);
	};

	const { showLogin, loginClose, loginError, isLoading } = props;

	return (
		<Modal show={showLogin} onHide={loginClose} className={LoginStyle.modal}>
			<Modal.Header closeButton>Login</Modal.Header>
			<Modal.Body>
				{isLoading === true ? (
					<div className={LoginStyle.center}>
						<Loading />
					</div>
				) : (
					<>
						{loginError && (
							<Notifications message={`${loginError}`} variant="danger" />
						)}
						<Form className={LoginStyle.form}>
							<Form.Group>
								<Form.Label>Username</Form.Label>
								<Form.Control
									name="username"
									value={data.username}
									onChange={handleChange}
									type="text"
									placeholder="Enter username"
								/>
							</Form.Group>
							<Form.Group>
								<Form.Label>Password</Form.Label>
								<Form.Control
									name="password"
									value={data.password}
									onChange={handleChange}
									type="password"
									placeholder="Enter password"
								/>
							</Form.Group>
						</Form>
					</>
				)}
			</Modal.Body>
			<Modal.Footer>
				<Button variant="danger" onClick={loginClose}>
					Close
				</Button>
				<Button variant="primary" onClick={handleLogin}>
					Login
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

const mapStateToProps = (state) => {
	return {
		isLoading: state.isLoading,
		loginError: state.error,
		redirect: state.redirect,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onAuth: (username, password) =>
			dispatch(actions.authLogin(username, password)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
