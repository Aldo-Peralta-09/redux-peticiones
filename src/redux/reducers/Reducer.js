const GET_DATA_REDUCER = (state = [], { type, payload }) => {
	switch(type){
		case "GET_DATA_PENDING": return [{ nombre: "Pending" }];
		case "GET_DATA_FULFILLED": return payload.data.success.notas;
		case "GET_DATA_REJECTED": return [{ nombre: "Error" }];
		default: return [...state];
	}
};

export default GET_DATA_REDUCER;