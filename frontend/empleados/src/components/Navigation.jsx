import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <nav className="bg-indigo-500 py-4">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <Link to="/empleados" className="text-white text-2xl font-bold">
          Empleados App
        </Link>
        <div className="space-x-4">
          <Link
            to="/empleados"
            className="text-white hover:underline hover:text-blue-300"
          >
            Ver empleados
          </Link>
          <Link
            to="/empleados-crear"
            className="text-white hover:underline hover:text-blue-300"
          >
            Crear empleado
          </Link>
          {/* Agrega más enlaces según sea necesario */}
        </div>
      </div>
    </nav>
  );
}
