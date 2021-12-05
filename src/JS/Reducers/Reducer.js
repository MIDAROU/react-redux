const initialState = {
	tasks: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_TASK":
			action.payload.id = state.tasks.length + 1;
			return {
				...state,
				tasks: [...state.tasks, action.payload],
			};
		case "REMOVE_TASK":
			return {
				...state,
				tasks: state.tasks.filter((task) => task.id !== action.payload.id),
			};
		case "CHECK_TASK":
			return {
				...state,
				tasks: state.tasks.map((task) => {
					if (task.id !== action.payload.id) {
						return task;
					}
					return {
						...task,
						isDone: !task.isDone,
					};
				}),
			};
		case "TOGGLE_EDIT":
			return {
				...state,
				tasks: state.tasks.map((task) => {
					if (task.id !== action.payload.id) {
						return task;
					}
					return {
						...task,
						editing: !task.editing,
					};
				}),
			};
		case "SET_EDIT":
			return {
				...state,
				tasks: state.tasks.map((task) => {
					if (task.id !== action.payload.id) {
						return task;
					}
					return {
						...task,
						description: action.payload.newdescription,
					};
				}),
			};
		default:
			return state;
	}
};
export default reducer;
