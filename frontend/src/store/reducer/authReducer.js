import { updateObject } from "../actions/utility";

export const authStart = (state, action) => {
	return updateObject(state, {
		...state,
		error: null,
		isLoading: true,
	});
};

export const authSuccess = (state, action) => {
	return updateObject(state, {
		...state,
		token: action.token,
		detail: action.detail,
		error: null,
		isLoading: false,
		redirect: true,
	});
};

export const authFail = (state, action) => {
	return updateObject(state, {
		...state,
		error: action.error,
		isLoading: false,
	});
};

export const authLogout = (state, action) => {
	return updateObject(state, {
		...state,
		token: null,
		redirect: false,
	});
};
