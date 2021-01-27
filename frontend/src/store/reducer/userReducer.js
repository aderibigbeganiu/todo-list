import { updateObject } from "../actions/utility";

export const getUserStart = (state, action) => {
	return updateObject(state, {
		error: null,
		isLoading: true,
	});
};

export const getUserSuccess = (state, action) => {
	return updateObject(state, {
		user: action.user,
		isLoading: false,
	});
};

export const getUserFail = (state, action) => {
	return updateObject(state, {
		error: action.error,
		isLoading: false,
	});
};
