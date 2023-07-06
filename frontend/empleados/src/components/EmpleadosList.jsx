import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllEmpleados } from "../api/empleados.api";

export function EmpleadosList() {
  const [empleados, setEmpleados] = useState([]);
  useEffect(() => {
    async function loadEmpleados() {
      const res = await getAllEmpleados();
      setEmpleados(res.data);
    }
    loadEmpleados();
  }, []);
  const navigate = useNavigate();
  return (
    <table className="w-auto mx-auto bg-black text-white">
      <thead>
        <tr className="bg-blue-500">
          <th className="py-2 px-4 border-b text-white">Nombre</th>
          <th className="py-2 px-4 border-b text-white">Apellido</th>
          <th className="py-2 px-4 border-b text-white">Salario</th>
          <th className="py-2 px-4 border-b text-white">Horas trabajadas</th>
          <th className="py-2 px-4 border-b text-white">Fecha de contratación</th>
          <th className="py-2 px-4 border-b text-white">Departamento</th>
          <th className="py-2 px-4 border-b text-white">Correo Electrónico</th>
        </tr>
      </thead>
      <tbody>
        {empleados.map((empleado) => (
          <tr
            key={empleado.id}
            className="cursor-pointer hover:bg-gray-900"
            onClick={() => {
              navigate(`/empleados/${empleado.id}`);
            }}
          >
            <td className="py-2 px-4 border-b text-white">{empleado.nombre}</td>
            <td className="py-2 px-4 border-b text-white">{empleado.apellido}</td>
            <td className="py-2 px-4 border-b text-white">{empleado.salario_base}</td>
            <td className="py-2 px-4 border-b text-white">{empleado.horas_trabajadas}</td>
            <td className="py-2 px-4 border-b text-white">{empleado.fecha_contratacion}</td>
            <td className="py-2 px-4 border-b text-white">{empleado.departamento}</td>
            <td className="py-2 px-4 border-b text-white">{empleado.correo_electronico}</td>
          </tr>
        ))}
      </tbody>
    </table>
    
  );
}
