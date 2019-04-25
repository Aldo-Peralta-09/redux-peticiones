/* const GET_DATA_REDUCER = (state = [], { type, payload }) => {
	switch(type){
		case "GET_DATA_PENDING": return [{ nombre: "Pending" }];
		case "GET_DATA_FULFILLED": return payload.data.success.notas;
		case "GET_DATA_REJECTED": return [{ nombre: "Error" }];
		default: return [...state];
	}
}; */

const GET_DATA_REDUCER = (state = [], action) => {
	switch(action.type){
		case "GET_DATA_PENDING": return state;
		case "GET_DATA_FULFILLED": return action.payload.data.success.notas;
		case "GET_DATA_REJECTED": return state;
		default: return state;
	}
};

const NEW_DATA_REDUCER = (state = {}, action) => {
	switch(action.type){
		case "NEW_DATA_PENDING": return { status: "Pending" };
		case "NEW_DATA_FULFILLED": return { status: action.payload.data.success };
		case "NEW_DATA_REJECTED": return { status: "Error" };
		default: return state;
	}
};

const UPDATE_DATA_REDUCER = (state = {}, action) => {
	switch(action.type){
		case "UPDATE_DATA_PENDING": return { status: "Pending" };
		case "UPDATE_DATA_FULFILLED": return { status: action.payload.data.success };
		case "UPDATE_DATA_REJECTED": return { status: "Error" };
		default: return state;
	}
};

const DELETE_DATA_REDUCER = (state = {}, action) => {
	switch(action.type){
		case "DELETE_DATA_PENDING": return { status: "Pending" };
		case "DELETE_DATA_FULFILLED": return { status: action.payload.data.success };
		case "DELETE_DATA_REJECTED": return { status: "Error" };
		default: return state;
	}
};

export {GET_DATA_REDUCER,NEW_DATA_REDUCER,UPDATE_DATA_REDUCER,DELETE_DATA_REDUCER};