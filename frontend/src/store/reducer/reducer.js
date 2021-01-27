import * as actionTypes from "../actions/actionTypes";
import { authStart, authSuccess, authFail, authLogout } from "./authReducer";
import { getUserStart, getUserSuccess, getUserFail } from "./userReducer";
import {
	fetchTodoStart,
	fetchTodosSuccess,
	fetchTodoFail,
} from "./todoReducer";

const initialState = {
	token: null,
	redirect: false,
	detail: null,
	error: null,
	isLoading: false,
	user: {},
	todos: [],
	categories: [],
	categoriesError: null,
	priorities: [],
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
		case actionTypes.FETCH_START:
			return fetchTodoStart(state, action);
		case actionTypes.FETCH_TODOS_SUCCESS:
			return fetchTodosSuccess(state, action);
		case actionTypes.FETCH_FAIL:
			return fetchTodoFail(state, action);
		default:
			return state;
	}
};

export default reducer;
