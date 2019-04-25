import axios from 'axios';

const BASE_URL = "http://comunicacion-a.hidalgo.gob.mx/traer/notas";

/* const GET_DATA_ACTION = () => {
	return {
		type: "GET_DATA",
		payload: axios.post(BASE_URL + "/datos")
	};
}; */

const GET_DATA_ACTION = () => {
	return {
		type: "GET_DATA",
		payload: axios.post(BASE_URL)
	};
}

const NEW_DATA_ACTION = (mi_nombre) => {
	return {
		type: "NEW_DATA",
		payload: axios.post(BASE_URL + "/dato", { nombre: mi_nombre })
	};
}

const UPDATE_DATA_ACTION = (id, nuevo_nombre) => {
	return {
		type: "UPDATE_DATA",
		payload: axios.put(BASE_URL + "/dato?id=" + id, { nombre: nuevo_nombre })
	};
}

const DELETE_DATA_ACTION = (id) => {
	return {
		type: "DELETE_DATA",
		payload: axios.delete(BASE_URL + "/dato?id=" + id)
	};
}

export {GET_DATA_ACTION,NEW_DATA_ACTION,UPDATE_DATA_ACTION,DELETE_DATA_ACTION};