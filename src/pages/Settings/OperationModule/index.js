import React, { useEffect, useState } from "react";
import { useAuth } from "../../../context/auth/authContext";
import { useToast } from "../../../hook/useToast";
import { getOperationModuleByRol } from "../../../data/operationModule";
import Input from "../../../components/Input";

export default function OperationModule() {
  const { getToken } = useAuth();
  const token = getToken();
  const toast = useToast();

  const [rol, setRol] = useState("72df6f26-6f79-432c-9d10-1fc2e3530e54");
  const [dataTable, setDataTable] = useState();

  const getDataModules = async () => {
    try {
      const { status, result, statusCode } = await getOperationModuleByRol(
        token,
        rol
      );
      if (status && result) {
        setDataTable({ ...dataTable, data: result });
      } else {
        toast.warning(statusCode);
      }
    } catch (e) {
      console.error("error", e);
    }
  };
  const handleChange = (e) => {
    console.log("AA", e.target.value);
  };

  //effects
  useEffect(() => {
    getDataModules();
  }, [token]);

  return (
    <div>
      <form action="https://formbold.com/s/unique_form_id" method="POST">
        <div className="relative">
          <div className="my-5">
            <label htmlFor={"rolActive"}>
              rolActive
              <select
                name={"rolActive"}
                placeholder={"select rol"}
                value={1}
                onChange={handleChange}
              >
                <option value="72df6f26-6f79-432c-9d10-1fc2e3530e54">
                  {"72df6f26-6f79-432c-9d10-1fc2e3530e54"}
                </option>
              </select>
            </label>
          </div>
        </div>
      </form>
      <div class="grid grid-cols-4 gap-4 py-5">
        {dataTable &&
          dataTable?.data.map((operation) => (
            <div
              className="rounded-sm p-2 shadow-lg space-y-2 bg-slate-200 dark:bg-graydark dark:text-white "
              key={operation?.operacion_module?.id}
            >
              <p>{operation?.operacion_module?.name}</p>
              <p>{operation?.operacion_module?.module?.name}</p>
              <p>{operation?.operacion_module?.module?.path}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
