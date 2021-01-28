import { updateObject } from "../actions/utility";

export const fetchTodoStart = (state, action) => {
	return updateObject(state, {
		...state,
		error: null,
		isLoading: true,
	});
};

export const fetchTodosSuccess = (state, action) => {
	return updateObject(state, {
		...state,
		error: null,
		isLoading: false,
		todos: action.todos,
	});
};

export const fetchTodoFail = (state, action) => {
	return updateObject(state, {
		...state,
		error: action.error,
		isLoading: false,
	});
};
