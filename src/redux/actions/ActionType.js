import axios from 'axios';

const BASE_URL = "http://comunicacion-a.hidalgo.gob.mx/traer/notas";

const GET_DATA_ACTION = () => {
	return {
		type: "GET_DATA",
		payload: axios.post(BASE_URL)
	};
};

export default GET_DATA_ACTION;