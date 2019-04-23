import axios from 'axios';

const BASE_URL = "http://comunicacion-a.hidalgo.gob.mx/traer/notas";

const GET_DATA_ACTION = () => {
	return {
		type: "GET_DATA",
		payload: axios.post(BASE_URL)
	};
};

const ADD_DATA_ACTION = () => {
	return {
		type: "ADD_DATA",
		payload: axios.post(BASE_URL)
	};
};

const UPDATE_DATA_ACTION = () => {
	return {
		type: "UPDATE_DATA",
		payload: axios.put(BASE_URL)
	};
};

const DELETE_DATA_ACTION = () => {
	return {
		type: "DELETE_DATA",
		payload: axios.delete(BASE_URL)
	};
};

export default {GET_DATA_ACTION,ADD_DATA_ACTION,UPDATE_DATA_ACTION,DELETE_DATA_ACTION};