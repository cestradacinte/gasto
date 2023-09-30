import axios from 'axios';

const API_URL = 'https://gestiongastos-bf4a7f881a7b.herokuapp.com/api/';

const fetchGastos = async () => {
    const response = await axios.get(`${API_URL}gastos/`);
    return response.data;
};

const createGasto = async (data) => {
    const response = await axios.post(`${API_URL}gastos/`, data);
    return response.data;
};

const fetchIngresos = async () => {
    const response = await axios.get(`${API_URL}ingresos/`);
    return response.data;
};

const createIngreso = async (data) => {
    const response = await axios.post(`${API_URL}ingresos/`, data);
    return response.data;
};

export {
    fetchGastos,
    createGasto,
    fetchIngresos,
    createIngreso
};