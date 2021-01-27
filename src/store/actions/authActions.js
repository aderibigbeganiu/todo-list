import * as actionTypes from "./actionTypes";
import { getUser } from "./userActions";
import axios from "axios";

const endPoint = `${process.env.REACT_APP_API_URL}`;
// const endPoint = `http://127.0.0.1:8000`;
export const authStart = () => {
	return {
		type: actionTypes.AUTH_START,
	};
};

export const authSuccess = (token, redirect, detail) => {
	return {
		type: actionTypes.AUTH_SUCCESS,
		token: token,
		redirect: redirect,
		detail: detail,
	};
};

export const authFail = (error) => {
	return {
		type: actionTypes.AUTH_FAIL,
		error: error,
	};
};

export const logout = () => {
	localStorage.removeItem("token");
	localStorage.removeItem("username");
	localStorage.removeItem("email");
	localStorage.removeItem("expirationDate");
	return {
		type: actionTypes.AUTH_LOGOUT,
		redirect: false,
	};
};

export const checkAuthTimeout = (expirationDate) => {
	return (dispatch) => {
		setTimeout(() => {
			dispatch(logout());
		}, expirationDate * 1000);
	};
};

export const authLogin = (username, password) => {
	return (dispatch) => {
		dispatch(authStart());
		axios
			.post(`${endPoint}/rest-auth/login/`, {
				username,
				password,
			})
			.then((res) => {
				const token = res.data.key;
				const expirationDate = new Date(
					new Date().getTime() + 3600 * 1000 * 168
				);
				localStorage.setItem("username", username);
				localStorage.setItem("token", token);
				localStorage.setItem("expirationDate", expirationDate);
				dispatch(authSuccess(token, true, null));
				dispatch(getUser(token));
				dispatch(checkAuthTimeout(3600 * 168));
			})
			.catch((error) => {
				dispatch(authFail(error));
			});
	};
};
export const authSignup = (username, email, password1, password2) => {
	return (dispatch) => {
		dispatch(authStart());
		axios
			.post(
				`${endPoint}/rest-auth/registration/`,
				{
					username,
					email,
					password1,
					password2,
				},
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			)
			.then((res) => {
				const detail = res.data.detail;
				localStorage.setItem("username", username);
				localStorage.setItem("email", email);
				dispatch(authSuccess(null, true, detail));
			})
			.catch((error) => {
				dispatch(authFail(error));
			});
	};
};

export const authCheckState = () => {
	return (dispatch) => {
		const token = localStorage.getItem("token");
		if (token === undefined) {
			dispatch(logout());
		} else {
			const expirationDate = new Date(localStorage.getItem("expirationDate"));
			if (expirationDate <= new Date()) {
				dispatch(logout());
			} else {
				dispatch(authSuccess(token, false, null));
				dispatch(
					checkAuthTimeout(
						(expirationDate.getTime() - new Date().getTime()) / 1000
					)
				);
			}
		}
	};
};
export const confirmEmail = (username, password) => {
	return (dispatch) => {
		dispatch(authStart());
		localStorage.setItem("username", username);
		axios
			.post(`${endPoint}/rest-auth/login/`, {
				username: username,
				password: password,
			})
			.then((res) => {
				const token = res.data.key;
				const expirationDate = new Date(
					new Date().getTime() + 3600 * 1000 * 168
				);
				localStorage.setItem("token", token);
				localStorage.setItem("expirationDate", expirationDate);
				dispatch(authSuccess(token, true, null));
				dispatch(checkAuthTimeout(3600 * 168));
			})
			.catch((error) => {
				dispatch(authFail(error));
				localStorage.removeItem("username");
			});
	};
};
