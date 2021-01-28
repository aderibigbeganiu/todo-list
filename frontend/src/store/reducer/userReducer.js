import { updateObject } from "../actions/utility";

export const getUserStart = (state, action) => {
	return updateObject(state, {
		...state,
		error: null,
		isLoading: true,
	});
};

export const getUserSuccess = (state, action) => {
	return updateObject(state, {
		...state,
		user: action.user,
		isLoading: false,
	});
};

export const getUserFail = (state, action) => {
	return updateObject(state, {
		...state,
		error: action.error,
		isLoading: false,
	});
};
