import {
	ADD_TASK,
	CHECK_TASK,
	REMOVE_TASK,
	SET_EDIT,
	TOGGLE_EDIT,
} from "./ActionTypes";

export const addTask = (newtask) => {
	return {
		type: ADD_TASK,
		payload: newtask,
	};
};
export const removeTask = (id) => {
	return {
		type: REMOVE_TASK,
		payload: { id },
	};
};
export const checkTask = (id) => {
	return {
		type: CHECK_TASK,
		payload: { id },
	};
};
export const toggleEdit = (editing, id) => {
	return {
		type: TOGGLE_EDIT,
		payload: { editing, id },
	};
};
export const setEdit = (newdescription, id) => {
	return {
		type: SET_EDIT,
		payload: { newdescription, id },
	};
};
