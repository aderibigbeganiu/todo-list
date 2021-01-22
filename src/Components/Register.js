import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { connect } from "react-redux";
import * as actions from "../store/actions/auth";
import RegisterStyle from "./Register.module.scss";
import Loading from "./Loading";
import Notifications from "./Notifications";

function Register(props) {
	const [data, setData] = useState({
		username: "",
		email: "",
		password1: "",
		password2: "",
	});

	const handleRegister = (e) => {
		e.preventDefault();
		props.onAuth(data.username, data.email, data.password1, data.password2);
	};

	const handleChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value,
		});
	};

	const { showRegister, registerClose, isLoading, signupError, detail } = props;

	return (
		<Modal show={showRegister} onHide={registerClose}>
			<Modal.Header closeButton>Register</Modal.Header>
			<Modal.Body>
				{isLoading === true ? (
					<div className={RegisterStyle.center}>
						<Loading />
					</div>
				) : (
					<>
						{signupError && (
							<Notifications
								variant="danger"
								message={`${signupError}: Make sure you enter correct information`}
							/>
						)}
						{detail && (
							<Notifications
								variant="success"
								message={`Verification e-mail has been sent to ${data.email}`}
							/>
						)}
						<Form>
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
								<Form.Label>Email Address</Form.Label>
								<Form.Control
									name="email"
									value={data.email}
									onChange={handleChange}
									type="email"
									placeholder="Enter email"
								/>
								<Form.Text className="text-muted">
									We'll never share your email with anyone else.
								</Form.Text>
							</Form.Group>
							<Form.Group>
								<Form.Label>Password</Form.Label>
								<Form.Control
									name="password1"
									value={data.password1}
									onChange={handleChange}
									type="password"
									placeholder="password"
								/>
							</Form.Group>
							<Form.Group>
								<Form.Label>Repeat Password</Form.Label>
								<Form.Control
									name="password2"
									value={data.password2}
									onChange={handleChange}
									type="password"
									placeholder="repeat password"
								/>
							</Form.Group>
						</Form>
					</>
				)}
			</Modal.Body>
			<Modal.Footer>
				<Button variant="danger" onClick={registerClose}>
					Close
				</Button>
				<Button variant="primary" onClick={handleRegister} type="submit">
					Submit
				</Button>
			</Modal.Footer>
		</Modal>
	);
}

const mapStateToProps = (state) => {
	return {
		isLoading: state.isLoading,
		signupError: state.error,
		redirect: state.redirect,
		detail: state.detail,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onAuth: (username, email, password1, password2) =>
			dispatch(actions.authSignup(username, email, password1, password2)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
