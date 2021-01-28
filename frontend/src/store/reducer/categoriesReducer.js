import { updateObject } from "../actions/utility";

export const fetchCategoriesStart = (action, state) => {
	return updateObject(state, {
		...state,
		categoriesError: null,
		isLoading: true,
	});
};

export const fetchCategoriesSuccess = (action, state) => {
	return updateObject(state, {
		...state,
		categories: action.categories,
		isLoading: false,
		categoriesError: null,
	});
};

export const fetchCategoriesFail = (action, state) => {
	return updateObject(state, {
		...state,
		isLoading: false,
		categoriesError: action.categoriesError,
	});
};
