import axios from "axios";

const URL =
  process.env.NODE_ENV === "production"
    ? import.meta.env.VITE_BACKEND_URL
    : "http://localhost:8000";

console.log(URL);
const empleadosApi = axios.create({
  baseURL: `${URL}/empleados/api/v1/empleados`,
});

export const getAllEmpleados = () => empleadosApi.get("/");

export const getEmpleado = (id) => empleadosApi.get(`/${id}`);

export const createEmpleado = (empleados) => empleadosApi.post("/", empleados);

export const updateEmpleado = (id, empleados) => empleadosApi.put(`/${id}/`, empleados);

export const deleteEmpleado = (id) => empleadosApi.delete(`/${id}`);