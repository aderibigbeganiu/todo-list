import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../actions/utility";

const initialState = {
	token: null,
	redirect: false,
	error: null,
	isLoading: false,
	user: {},
};

const authStart = (state, action) => {
	return updateObject(state, {
		error: null,
		isLoading: true,
	});
};

const authSuccess = (state, action) => {
	return updateObject(state, {
		token: action.token,
		error: null,
		isLoading: false,
		redirect: true,
	});
};

const authFail = (state, action) => {
	return updateObject(state, {
		error: action.error,
		isLoading: false,
	});
};

const authLogout = (state, action) => {
	return updateObject(state, {
		token: null,
		redirect: false,
	});
};

const getUserStart = (state, action) => {
	return updateObject(state, {
		error: null,
		isLoading: true,
	});
};

const getUserSuccess = (state, action) => {
	return updateObject(state, {
		user: action.user,
		isLoading: false,
	});
};

const getUserFail = (state, action) => {
	return updateObject(state, {
		error: action.error,
		isLoading: false,
	});
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.AUTH_START:
			return authStart(state, action);
		case actionTypes.AUTH_SUCCESS:
			return authSuccess(state, action);
		case actionTypes.AUTH_FAIL:
			return authFail(state, action);
		case actionTypes.AUTH_LOGOUT:
			return authLogout(state, action);
		case actionTypes.GET_USER_START:
			return getUserStart(state, action);
		case actionTypes.GET_USER_SUCCESS:
			return getUserSuccess(state, action);
		case actionTypes.GET_USER_FAIL:
			return getUserFail(state, action);
		default:
			return state;
	}
};

export default reducer;
