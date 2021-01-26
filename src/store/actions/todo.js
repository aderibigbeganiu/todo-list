import * as actionTypes from "./actionTypes";
import axios from "axios";

const endPoint = `${process.env.REACT_APP_API_URL}`;

export const fetchStart = () => {
	return {
		type: actionTypes.FETCH_START,
	};
};

export const fetchFail = (error) => {
	return {
		type: actionTypes.FETCH_FAIL,
		error: error,
	};
};

export const fetchTodoSuccess = (todo) => {
	return {
		type: actionTypes.FETCH_TODO_SUCCESS,
		todo: todo,
	};
};

export const fetchTodosSuccess = (todos) => {
	return {
		type: actionTypes.FETCH_TODOS_SUCCESS,
		todos: todos,
	};
};

export const fetchTodos = () => {
	return (dispatch) => {
		dispatch(fetchStart());
		axios
			.get(`${endPoint}/todos`)
			.then((res) => {
				const todos = res.data;
				dispatch(fetchTodosSuccess(todos));
			})
			.catch((error) => {
				dispatch(fetchFail(error));
			});
	};
};

export const deleteTodo = (id) => {
	return (dispatch) => {
		axios
			.delete(`${endPoint}/todos/${id}`)
			.then((res) => {
				dispatch(fetchTodos());
			})
			.catch((error) => {
				dispatch(fetchFail(error));
			});
	};
};
