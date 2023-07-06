import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { createEmpleado, deleteEmpleado, getEmpleado, updateEmpleado } from "../api/empleados.api";
import { toast } from "react-hot-toast";

export function EmpleadosFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await updateEmpleado(params.id, data);
      toast.success("Empleado actualizado", {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "#fff",
        },
      });
    } else {
      await createEmpleado(data);
      toast.success("Nuevo empleado creado", {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "#fff",
        },
      });
    }

    navigate("/empleados");
  });

  useEffect(() => {
    async function loadEmpleado() {
      if (params.id) {
        const { data } = await getEmpleado(params.id);
        setValue("nombre", data.nombre);
        setValue("apellido", data.apellido);
        setValue("salario_base", data.salario_base);
        setValue("horas_trabajadas", data.horas_trabajadas);
        setValue("fecha_contratacion", data.fecha_contratacion);
        setValue("departamento", data.departamento);
        setValue("correo_electronico", data.correo_electronico);
      }
    }
    loadEmpleado();
  }, []);

  return (
    <div className="max-w-xl mx-auto">
      <form onSubmit={onSubmit} className="bg-zinc-800 p-10 rounded-lg mt-2">
        <h1 className="text-center text-4xl font-bold">Empleado</h1>
        <br />
        <input
          type="text"
          placeholder="Nombre"
          {...register("nombre", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
          autoFocus
        />

        {errors.nombre && <span>Este campo es requerido</span>}

        <input
          type="text"
          placeholder="Apellido"
          {...register("apellido", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />
        {errors.apellido && <span>Este campo es requerido</span>}
        <input
          type="number"
          placeholder="Salario"
          {...register("salario_base", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />
        {errors.salario_base && <span>Este campo es requerido</span>}
        <input
          type="number"
          placeholder="Horas trabajadas"
          {...register("horas_trabajadas", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />
        {errors.horas_trabajadas && <span>Este campo es requerido</span>}
        <input
          type="date"
          placeholder="Fecha de contratacion"
          {...register("fecha_contratacion", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />
        {errors.fecha_contratacion && <span>Este campo es requerido</span>}
         <input
          type="text"
          placeholder="Departamento"
          {...register("departamento", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />
        {errors.departamento && <span>Este campo es requerido</span>}
         <input
          type="text"
          placeholder="Email"
          {...register("correo_electronico", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />

        {errors.correo_electronico && <span>Este campo es requerido</span>}

        <button className="bg-indigo-500 p-3 rounded-lg block w-full mt-3">
          Guardar
        </button>
      </form>

      {params.id && (
        <div className="flex justify-end">
          <button
            className="bg-red-500 p-3 rounded-lg w-48 mt-3"
            onClick={async () => {
              const accepted = window.confirm("¿Estás seguro?");
              if (accepted) {
                await deleteEmpleado   (params.id);
                toast.success("Empleado eliminado", {
                  position: "bottom-right",
                  style: {
                    background: "#101010",
                    color: "#fff",
                  },
                });
                navigate("/empleados");
              }
            }}
          >
            Eliminar
          </button>
        </div>
      )}
    </div>
  );
}