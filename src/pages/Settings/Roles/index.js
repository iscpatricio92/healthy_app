import React, { useEffect, useRef, useState } from "react";
import getRoles from "../../../data/roles";
import { useAuth } from "../../../context/auth/authContext";

import { Table } from "../../../components/Table";
import EditRol from "./edit.js";

export default function Roles() {
  const { getToken } = useAuth();
  const token = getToken();

  //functions
  const handleEdit = (rol) => {
    setEditData(rol);
    const modal = document.getElementById("modalEdit");
    console.log("MODAL", modal);
    //TODO HERE modal.style.display = "block";
  };

  const handleConfirmEdit = () => {
    console.log("SEND PATCH");
  };
  //states
  const [dataTable, setDataTable] = useState({
    head: ["Rol", "Created", "Status", "Actions"],
    data: [],
    actions: handleEdit,
  });
  const [editData, setEditData] = useState(null);

  //effects
  useEffect(() => {
    const getDataRoles = async () => {
      try {
        const { status, result, statusCode } = await getRoles(token);
        if (status && result) {
          setDataTable({ ...dataTable, data: result });
        } else {
          console.log("ERROR", statusCode);
        }
      } catch (e) {
        console.log("ERRORs", e);
      }
    };
    getDataRoles();
  }, [token]);

  return (
    <>
      <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="max-w-full overflow-x-auto"></div>
        <Table dataTable={dataTable} />
        {/*<EditRol editData={editData} />*/}
      </div>
    </>
  );
}
