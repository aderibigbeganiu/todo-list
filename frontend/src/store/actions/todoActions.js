import * as actionTypes from "./actionTypes";
import axios from "axios";

const endPoint = `${process.env.REACT_APP_API_URL}`;

export const fetchTodoStart = () => {
	return {
		type: actionTypes.FETCH_START,
	};
};

export const fetchTodoFail = (error) => {
	return {
		type: actionTypes.FETCH_FAIL,
		error: error,
	};
};

// export const fetchTodoSuccess = (todo) => {
// 	return {
// 		type: actionTypes.FETCH_TODO_SUCCESS,
// 		todo: todo,
// 	};
// };

export const fetchTodosSuccess = (todos) => {
	return {
		type: actionTypes.FETCH_TODOS_SUCCESS,
		todos: todos,
	};
};

export const fetchTodos = () => {
	return (dispatch) => {
		dispatch(fetchTodoStart());
		axios
			.get(`${endPoint}/todos`)
			.then((res) => {
				const todos = res.data;
				dispatch(fetchTodosSuccess(todos));
			})
			.catch((error) => {
				dispatch(fetchTodoFail(error));
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
				dispatch(fetchTodoFail(error));
			});
	};
};

export const createTodoStart = () => {
	return {
		type: actionTypes.CREATE_TODO_START,
	};
};
export const createTodoSusccess = () => {
	return {
		type: actionTypes.CREATE_TODO_SUCCESS,
	};
};

export const createTodoFail = (error) => {
	return {
		type: actionTypes.CREATE_TODO_FAIL,
		error: error,
	};
};

export const createTodo = (
	user,
	title,
	due_date,
	notes,
	priority_id,
	category_id
) => {
	return (dispatch) => {
		axios
			.post(`${endPoint}/todos/`, {
				user,
				title,
				due_date,
				notes,
				priority_id,
				category_id,
			})
			.then((res) => {
				dispatch(createTodoSusccess(res.data));
				dispatch(fetchTodos());
				console.log(res);
			})
			.catch((error) => {
				dispatch(createTodoFail(error));
				console.log(error);
			});
	};
};

export const todoCompleted = (id, completed) => {
	return (dispatch) => {
		axios
			.patch(`${endPoint}/todos/${id}/`, {
				completed: completed,
			})
			.then((res) => {
				console.log(res.data.completed + " " + res.data.id);
			})
			.catch((error) => {
				console.log(error);
			});
	};
};
