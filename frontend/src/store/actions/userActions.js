import * as actionTypes from "./actionTypes";
import axios from "axios";

const endPoint = `${process.env.REACT_APP_API_URL}`;

export const getUserStart = () => {
	return {
		type: actionTypes.GET_USER_START,
	};
};

export const getUserSuccess = (user) => {
	return {
		type: actionTypes.GET_USER_SUCCESS,
		user: user,
	};
};

export const getUserFail = () => {
	return {
		type: actionTypes.GET_USER_FAIL,
	};
};

export const getUser = (userToken) => {
	return (dispatch) => {
		dispatch(getUserStart());
		axios
			.get(`${endPoint}/rest-auth/user/`, {
				headers: {
					Authorization: `Token ${userToken}`,
				},
			})
			.then((res) => {
				const user = res.data;
				dispatch(getUserSuccess(user));
			})
			.catch((error) => {
				dispatch(getUserFail(error));
			});
	};
};
