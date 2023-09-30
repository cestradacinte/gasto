import axios from 'axios';

const API_URL = 'http://localhost:8000/api/';

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