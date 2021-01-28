import axios from "axios";
import * as actions from "./actionTypes";

const endPoint = `${process.env.REACT_APP_API_URL}`;

export const fetchCategoriesStart = () => {
	return {
		type: actions.FETCH_CATEGORIES_START,
	};
};

export const fetchCategoriesSuccess = (categories) => {
	return {
		type: actions.FETCH_CATEGORIES_SUCCESS,
		categories: categories,
	};
};

export const fetchCategoriesFail = (error) => {
	return {
		type: actions.FETCH_CATEGORIES_FAIL,
		categoriesError: error,
	};
};

export const fetchCategories = () => {
	return (dispatch) => {
		dispatch(fetchCategoriesStart());
		axios
			.get(`${endPoint}/categories`)
			.then((res) => {
				setData(res.data);
			})
			.catch((error) => {
				console.log(error);
			});
	};
};
